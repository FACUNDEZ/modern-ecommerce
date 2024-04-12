import type { APIRoute } from "astro";
import { emailRegex, passwordRegex } from "../../../utils/regex"
import { compare } from "bcrypt"
import pkg from 'jsonwebtoken';
const { sign } = pkg;

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const POST: APIRoute = async ({ request }) => {
    try {
        const { email, password } = await request.json()
        const usuario = {
            email,
            password
        }

        if (!usuario || !usuario.email || !usuario.email.match(emailRegex)) {
            return new Response(JSON.stringify({ msg: "Wrong email. Try it again." }), { status: 400 });
        }

        if (!usuario || !usuario.password || !usuario.password.match(passwordRegex)) {
            return new Response(JSON.stringify({ msg: "Wrong password. Comply with the characters: - Minimum 8 digits: One capital letter, lowercase letters and numbers. Try it again." }), { status: 400 });
        }

        const usuarioEnDB = await prisma.user.findUnique({ where: { email: usuario.email } })

        if (!usuarioEnDB) {
            return new Response(JSON.stringify({ msg: "Account does not exist." }), { status: 403 })
        }

        const contrasenaValida = await compare(usuario.password, usuarioEnDB.password)

        if (!contrasenaValida) {
            return new Response(JSON.stringify({ msg: "Wrong password. Try it again." }), { status: 401 })
        }

        const token = sign(usuarioEnDB, process.env.TOKEN_SECRET as string, {
            expiresIn: "7d"
        })

        return new Response(JSON.stringify({ token }), { status: 200 });
    } catch (error) {
        console.error('Error en la solicitud POST:', error);
        return new Response(JSON.stringify({ msg: "Internal server error." }), { status: 500 });
    }
}