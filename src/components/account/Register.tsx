import { useRef, useState, type FormEvent } from "react"

export const RegisterAccount = () => {
    const firstNameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const [alert, setAlert] = useState(null)

    const getApi = async () => {
        try {
        const res = await fetch("http://localhost:4321/api/register/data.json", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ firstName: firstNameRef.current?.value, lastName: lastNameRef.current?.value, email: emailRef.current?.value, password: passwordRef.current?.value })
        })
        const data = await res.json()

        if (res.status === 201) {
            location.href= "/auth/login"
        } else {
            setAlert(data.msg)
        }
    } catch(error) {
        console.log(error)
    }
    }

    async function sendFormReg(e: FormEvent) {
        e.preventDefault()

        await getApi()
    }

    return (
        <section className="mt-24">
            <div className="flex flex-row items-center text-xs ml-7">
                <a href="/" className="text-customGray hover:underline">Home</a>
                <span className="mx-2">&#62;</span>
                <p className="text-customGray">Register</p>
            </div>

            <div className="flex flex-col ml-7 overflow-x-hidden">
                <h2 className="my-6 text-xl font-bold">Create a new account</h2>
                <p className="mb-6 text-sm">Buy fastly and take control of your buyings in the same app!</p>
                <form onSubmit={sendFormReg}>
                    <label className="text-xs tracking-widest mb-2 block" htmlFor="full-name"
                    >FIRST NAME</label>
                    <input
                        className="mb-4 py-2 px-3 text-xs w-[445px] bg-zinc-800 rounded-sm focus:outline-none "
                        type="text"
                        name="full-name"
                        ref={firstNameRef}
                        required
                    />

                    <label className="text-xs tracking-widest mb-2 block" htmlFor="last-name"
                    >LAST NAME</label>
                    <input
                        className="mb-4 py-2 px-3 text-xs w-[445px] bg-zinc-800 rounded-sm focus:outline-none "
                        type="text"
                        name="last-name"
                        ref={lastNameRef}
                        required
                    />

                    <label className="text-xs tracking-widest mb-2 block" htmlFor="email"
                    >EMAIL</label>
                    <input
                        className="mb-4 py-2 px-3 text-xs w-[445px] bg-zinc-800 rounded-sm focus:outline-none "
                        type="email"
                        name="email"
                        ref={emailRef}
                        required
                    />

                    <label className="text-xs tracking-widest mb-2 block" htmlFor="password"
                    >PASSWORD</label>
                    <input
                        className="mb-4 py-2 px-3 text-xs w-[445px] bg-zinc-800 rounded-sm focus:outline-none "
                        type="password"
                        name="password"
                        ref={passwordRef}
                        required
                    />
                    {alert && ( <span className="block text-left text-xs mr-14 my-1 text-red-600">{alert}</span> )}
                    <button
                        className="rounded-sm mx-auto tracking-wider py-2 text-sm mt-3 bg-zinc-800 w-[445px] no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 p-px font-semibold leading-6 text-white inline-block"
                    >
                        <span className="absolute inset-0 overflow-hidden">
                            <span
                                className="absolute inset-0 bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            ></span>
                        </span>
                        CREATE ACCOUNT
                        <span
                            className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"
                        ></span>
                    </button>
                    <p className="mt-5 text-sm text-center">
                        ¿Do you already have an account? <a
                            className="text-gray-500 hover:text-gray-200 duration-300"
                            href="/auth/login">Log In</a>
                    </p>
                </form>
            </div>
        </section>
    )
} 
