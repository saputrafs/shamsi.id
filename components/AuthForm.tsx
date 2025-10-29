'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from "@/components/layout/Navbar";

interface AuthFormProps {
    type?: 'login' | 'register'
    onSubmit?: (form: Record<string, string>) => void
}

export default function AuthForm({ type = 'login', onSubmit }: AuthFormProps) {
    const [form, setForm] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        password: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit?.(form)
    }

    return (
        <main className="flex flex-col w-full items-center min-h-screen bg-gray-50 pt-24">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
                <div className="flex flex-col items-center mb-8">
                    <div className="bg-indigo-50 rounded-full p-4 shadow-sm mb-3">
                        <img
                            alt="Logo"
                            src="/logo.png"
                            className="h-16 w-auto"
                        />
                    </div>
                    <h2 className="text-2xl font-extrabold text-gray-800 tracking-tight text-center">
                        {type === 'login' ? 'Selamat Datang Kembali 👋' : 'Buat Akun Baru ✨'}
                    </h2>
                    <p className="text-gray-500 text-sm mt-1 text-center">
                        {type === 'login'
                            ? 'Masuk untuk melanjutkan ke dashboard Anda'
                            : 'Isi data di bawah untuk mendaftar akun baru'}
                    </p>
                </div>


                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* hanya muncul saat register */}
                    {type === 'register' && (
                        <>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-gray-900">Nama Lengkap</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full border text-gray-900 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1 text-gray-900">Alamat</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={form.address}
                                    onChange={handleChange}
                                    className="w-full border text-gray-900 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1 text-gray-900">Nomor HP</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="w-full border text-gray-900 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                    required
                                />
                            </div>
                        </>
                    )}

                    {/* email & password dipakai di dua mode */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-900">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border text-gray-900 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-900">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full border text-gray-900 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition"
                    >
                        {type === 'login' ? 'Masuk' : 'Daftar'}
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-500">
                    {type === 'login' ? (
                        <>
                            Belum punya akun?{' '}
                            <Link href="/register" className="text-indigo-600 hover:underline">
                                Daftar
                            </Link>
                        </>
                    ) : (
                        <>
                            Sudah punya akun?{' '}
                            <Link href="/login" className="text-indigo-600 hover:underline">
                                Masuk
                            </Link>
                        </>
                    )}
                </p>
            </div>
        </main>
    )
}
