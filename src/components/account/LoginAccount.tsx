import { useState, useRef, type FormEvent } from "react"

export const LoginAccount = () => {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const [alert, setAlert] = useState(null)

    const getApi = async () => {
        try {
        const res = await fetch("http://localhost:4321/api/login/data.json", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: emailRef.current?.value, password: passwordRef.current?.value })
        })
        const data = await res.json()

        if (res.status === 200) {
            location.href= "/"
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
            <p className="text-customGray">Log In</p>
        </div>

        <div className="flex flex-col ml-7">
            <h2 className="my-6 text-xl font-bold">Log In with your account</h2>
            <form onSubmit={sendFormReg}>
                <label className="text-xs tracking-widest mb-2 block" htmlFor="email"
                    >EMAIL</label>
                <input
                    className="mb-6 py-2 px-3 text-xs w-[445px] bg-zinc-800 rounded-sm focus:outline-none "
                    type="email"
                    name="email"
                    ref={emailRef}
                    required
                />
                <label className="text-xs tracking-widest mb-2 block" htmlFor="password"
                    >PASSWORD</label>
                <input
                    className="mb-2 py-2 px-3 text-xs w-[445px] bg-zinc-800 focus:outline-none rounded-sm"
                    type="password"
                    name="password"
                    ref={passwordRef}
                    required
                />
                <a
                    href=""
                    className="flex flex-row justify-end mr-7 text-xs text-left hover:text-gray-500 duration-300"
                    >¿Did you forget your password?</a>
                    {alert && ( <span className="block text-left text-xs mr-14 mt-3 -mb-2 text-red-600">{alert}</span> )}
                <button
                    className="rounded-sm mx-auto tracking-wider py-2 text-sm mt-7 bg-zinc-800 w-[445px] no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 p-px font-semibold leading-6 text-white inline-block"
                >
                    <span className="absolute inset-0 overflow-hidden">
                        <span
                            className="absolute inset-0 bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        ></span>
                    </span>
                    LOG IN
                    <span
                        className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"
                    ></span>
                </button>
                <p className="mt-5 text-sm text-center">
                    ¿Do you not have an account yet? <a
                        className="text-gray-500 hover:text-gray-200 duration-300"
                        href="/auth/register">Create account</a>
                </p>
            </form>
        </div>
    </section>
  )
  } 
