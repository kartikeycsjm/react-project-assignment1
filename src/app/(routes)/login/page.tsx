"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // In a real app, you would handle authentication here
        // For now, just navigate to the account page
        router.push("/account")
    }

    return (
        <div className="flex justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white">
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Signin to your
                        <br />
                        PopX account
                    </h1>
                    <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-purple-600 
                                text-sm relative bg-white top-3
                                left-2 p-1 w-[110px]">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Enter email address"
                                required
                            />
                        </div>

                        <div>
                            <label className="block 
                              text-purple-600 text-sm
                                relative bg-white top-3 
                                left-2 w-[110px] p-1">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Enter password"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className={`w-full py-3 mt-4 
                            bg-gray-300 text-white 
                            cursor-not-allowed
                            text-center font-medium rounded-md
                            ${(email.length>0&&password.length>0)&&'bg-purple-600 cursor-pointer'}`}
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
