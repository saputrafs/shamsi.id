'use client'

import Link from 'next/link'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'


export default function About() {
    return (
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-white to-blue-50">
            {/* Background */}
            <svg
                aria-hidden="true"
                className="absolute inset-0 -z-10 h-full w-full stroke-blue-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
            >
                <defs>
                    <pattern
                        id="grid-pattern"
                        width={200}
                        height={200}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M0 200V0H200" fill="none" />
                    </pattern>
                </defs>
                <rect
                    width="100%"
                    height="100%"
                    fill="url(#grid-pattern)"
                    strokeWidth={0}
                />
            </svg>

            {/* Decorative gradient blob */}
            <div
                aria-hidden="true"
                className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[60rem] rounded-full bg-gradient-to-tr from-sky-300 via-indigo-300 to-blue-400 opacity-40 blur-3xl"
            />

            {/* Content */}
            <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Tentang Kami
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        <strong>ShaMSI Indonesia</strong> is an Islamic School Management Learning Platform.
                    </p>
                </div>

                {/* Two-column layout */}
                <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
                    {/* Left Text */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Membangun Sekolah Islam yang Unggul
                        </h2>
                        <p className="mt-4 text-base text-gray-600 leading-relaxed">
                            Founded in <strong>2024</strong>, Shamsi hadir sebagai ruang belajar bagi para pengelola dan pengurus sekolah Islam untuk tumbuh dengan manajemen yang lebih terarah.
                        </p>
                        <p className="mt-4 text-base text-gray-600 leading-relaxed">
                            Lebih dari <strong>2.000 pendidik, pemimpin, dan pengurus sekolah Islam</strong> telah
                            bergabung dalam ekosistem pembelajaran ShaMSI untuk bersama-sama menuju tata
                            kelola sekolah yang lebih baik.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1726754497130-da4d8a3f5a56?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
                            alt="ShaMSI Academy illustration"
                            className="w-full rounded-2xl shadow-md ring-1 ring-blue-200 object-cover"
                        />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20" />
                    </div>
                </div>
            </div>
        </div>
    );
}

