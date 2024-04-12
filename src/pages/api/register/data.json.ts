import type { APIRoute } from 'astro';
import { PrismaClient } from '@prisma/client';
import { encriptarPassword } from '../../../utils/crypto';
import { emailRegex, passwordRegex } from '../../../utils/regex';
import pkg from 'jsonwebtoken';
const { sign } = pkg;

const prisma = new PrismaClient();

export const POST: APIRoute = async ({ request }) => {
    try {
        const { firstName, lastName, email, password } = await request.json();
        const usuario = {
            firstName,
            lastName,
            email,
            password
        };

        if (!usuario || !usuario.email || !usuario.email.match(emailRegex)) {
            return new Response(JSON.stringify({ msg: "Wrong email. Try it again." }), { status: 400 });
        }

        if (!usuario || !usuario.password || !usuario.password.match(passwordRegex)) {
            return new Response(JSON.stringify({ msg: "Wrong password. Comply with the characters: - Minimum 8 digits: One capital letter, lowercase letters and numbers. Try it again." }), { status: 400 });
        }

        const usuarioExistente = await prisma.user.findUnique({
            where: {
                email: usuario.email
            }
        });

        if (usuarioExistente) {
            return new Response(JSON.stringify({ msg: "Email exists. Write other email." }), { status: 400 });
        }

        const hash = await encriptarPassword(usuario.password);

        const usuarioAGuardar = { ...usuario, password: hash };
        const usuarioSubido = await prisma.user.create({ data: usuarioAGuardar });

        if (!usuarioSubido) {
            return new Response("It could not upload the user.", { status: 500 });
        }

        const token = sign(usuarioAGuardar, process.env.TOKEN_SECRET as string);

        return new Response(JSON.stringify({ msg: "Registered correctly! Log in to continue." }), { status: 201, headers: { "Authorization": token } });
    } catch (error) {
        console.error('Error en la solicitud POST:', error);
        return new Response(JSON.stringify({ msg: "Internal server error." }), { status: 500 });
    }
};
