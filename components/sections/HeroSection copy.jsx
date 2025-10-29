export default function HeroSection() {
    return (
        <div className="relative isolate pt-14">
            {/* Background atas */}
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

            {/* Konten utama */}
            <div className="relative isolate overflow-hidden pt-14">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=fff&sat=-100&exp=15&blend-mode=overlay"
                    className="absolute inset-0 -z-10 size-full object-cover opacity-10"
                />

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
                            Platform Belajar
                        </h1>
                        <h1 className="text-5xl font-bold tracking-tight text-indigo-600 sm:text-7xl">
                            Pengelola Sekolah Islam
                        </h1>

                        <p className="mt-8 text-lg text-gray-600 sm:text-xl/8">
                            Temani langkah para pemimpin sekolah Islam tumbuh dengan manajemen yang lebih terarah.
                        </p>

                        <p className="mt-10 text-lg font-semibold italic text-gray-700 sm:text-xl/8 relative inline-block">
                            📊 <strong>Dipercaya</strong> <em>2.000+ pengelola & pendidik</em> di seluruh Indonesia.
                            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full"></span>
                        </p>

                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 transition"
                            >
                                Learn more
                            </a>
                            <a href="#" className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
                                Our Program <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>

                    <div
                        className="absolute bottom-0 left-0 right-0 h-100 bg-white"
                        style={{ clipPath: "ellipse(100% 80% at 50% 100%)" }}
                    ></div>

                    <div className="mt-8 flow-root">
                        <div className="scale-90 origin-center">
                            <img
                                alt="App screenshot"
                                src="cover.png"
                                className="mx-auto rounded-2xl bg-gray-50 shadow-2xl ring-1 ring-gray-900/10"
                            />
                        </div>
                    </div>
                </div>


            </div>

            {/* Background bawah */}
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
