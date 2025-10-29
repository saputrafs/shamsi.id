'use client'
import AuthForm from '@/components/AuthForm'

export default function RegisterPage() {
    const handleRegister = (data: { email: string; password: string }) => {
        console.log('Register data:', data)
        // TODO: kirim ke API NestJS kamu
    }

    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-50">
            <AuthForm type="register" onSubmit={handleRegister} />
        </main>
    )
}
