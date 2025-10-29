export default function HeroSection() {
    return (
        <div className="relative isolate pt-14">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg]
          bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
                />
            </div>
            <div className="relative isolate overflow-hidden pt-14">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=fff&sat=-100&exp=15&blend-mode=overlay"
                    className="absolute inset-0 -z-10 size-full object-cover opacity-10"
                />

                <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
                                Platform Belajar
                            </h1>
                            <h1 className="text-5xl font-bold tracking-tight text-blue-700 sm:text-7xl">
                                Pengelola Sekolah Islam
                            </h1>
                            <p className="mt-6 text-lg text-gray-600 sm:text-xl/8">
                                Temani langkah para pemimpin sekolah Islam tumbuh dengan manajemen yang lebih terarah.
                            </p>

                            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 transition"
                                >
                                    Learn more
                                </a>
                                <a href="#" className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
                                    Our Program →
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center lg:items-start">
                            <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-5 shadow-md border border-blue-100">
                                <div className="bg-gradient-to-br from-blue-200 to-green-200 p-2 rounded-full shadow-inner">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-blue-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
                                    </svg>
                                </div>
                                <p className="text-lg font-semibold italic text-gray-800">
                                    📊 Dipercaya <span className="text-blue-700 font-bold">2.000+</span> pengelola & pendidik di seluruh Indonesia.
                                </p>
                            </div>

                            <div className="mt-10 scale-90 origin-center">
                                <img
                                    src="cover.png"
                                    alt="App screenshot"
                                    className="mx-auto rounded-2xl bg-gray-50 shadow-2xl ring-1 ring-blue-100/50"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%+3rem)]"
                />
            </div>
        </div >
    )
}
