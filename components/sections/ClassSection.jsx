const products = [
    {
        id: 1,
        name: 'Leather Long Wallet',
        color: 'Natural',
        price: '$75',
        href: '#',
        imageSrc: 'a1.webp',
        imageAlt: 'Hand stitched, orange leather long wallet.',
    },
    {
        id: 2,
        name: 'Machined Pencil and Pen Set',
        color: 'Black',
        price: '$70',
        href: '#',
        imageSrc: 'a1.webp',
        imageAlt: '12-sided, machined black pencil and pen.',
    },
    {
        id: 3,
        name: 'Mini-Sketchbooks',
        color: 'Light Brown',
        price: '$27',
        href: '#',
        imageSrc: 'a1.webp',
        imageAlt: 'Set of three light and dark brown mini sketch books.',
    },
    {
        id: 4,
        name: 'Organizer Set',
        color: 'Walnut',
        price: '$149',
        href: '#',
        imageSrc: 'a1.webp',
        imageAlt: 'Beautiful walnut organizer set with multiple white compartments',
    },
]

export default function ClassSection() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Rekaman Kelas Terbaru
                    </h2>
                    <a href="#" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
                        Lihat Semua Produk
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                    Tonton kembali sesi pembelajaran terbaru bersama para ahli dan praktisi pendidikan Islam, kapan pun dan di mana pun Anda berada.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group relative rounded-xl bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            {/* Gambar Produk */}
                            <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 lg:h-72 xl:h-90">
                                <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="h-full w-full object-cover transition-transform duration-500"
                                />
                            </div>

                            {/* Nama & Harga */}
                            <div className="mt-4 text-left">
                                <h3 className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-colors duration-200">
                                    <a href={product.href}>
                                        <span className="absolute inset-0" />
                                        {product.name}
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm font-medium text-gray-600">{product.price}</p>
                            </div>

                            {/* Tombol Beli */}
                            <div className="mt-4">
                                <a
                                    href={product.href}
                                    className="relative flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-2 text-sm font-bold text-white transition-all duration-300 hover:from-indigo-500 hover:to-indigo-400 hover:shadow-md"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>

                                    Beli Rekaman
                                    <span className="sr-only">, {product.name}</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        </div>
    )
}
