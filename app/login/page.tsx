'use client'
import AuthForm from '@/components/AuthForm'

export default function LoginPage() {
    const handleLogin = (data: { email: string; password: string }) => {
        console.log('Login data:', data)
        // TODO: kirim ke API NestJS kamu
    }

    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-50">
            <AuthForm type="login" onSubmit={handleLogin} />
        </main>
    )
}
