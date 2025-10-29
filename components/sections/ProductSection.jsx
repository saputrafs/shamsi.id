const products = [
    {
        id: 1,
        name: 'Leather Long Wallet',
        color: 'Natural',
        price: 'Rp150.000',
        href: '#',
        imageSrc: 'c1.webp',
        imageAlt: 'Hand stitched, orange leather long wallet.',
    },
    {
        id: 2,
        name: 'Machined Pencil and Pen Set',
        color: 'Black',
        price: '$70',
        href: '#',
        imageSrc: 'c2.webp',
        imageAlt: '12-sided, machined black pencil and pen.',
    },
    {
        id: 3,
        name: 'Mini-Sketchbooks',
        color: 'Light Brown',
        price: '$27',
        href: '#',
        imageSrc: 'c1.webp',
        imageAlt: 'Set of three light and dark brown mini sketch books.',
    },
    {
        id: 4,
        name: 'Organizer Set',
        color: 'Walnut',
        price: '$149',
        href: '#',
        imageSrc: 'c2.webp',
        imageAlt: 'Beautiful walnut organizer set with multiple white compartments',
    },
]

export default function ProductSection() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Kelas yang Akan Datang
                    </h2>
                    <a href="#" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
                        Lihat Semua Produk
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                    Ikuti berbagai kelas terbaru yang dirancang untuk membantu pengelola sekolah Islam meningkatkan kualitas manajemen dan kepemimpinan.
                </p>
                <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group relative rounded-2xl bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            {/* Gambar Produk */}
                            <div
                                className="relative w-full overflow-hidden rounded-xl bg-gray-100"
                                style={{ aspectRatio: "16/9" }}
                            >
                                <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Nama & Harga */}
                            <div className="mt-4 text-left">
                                <h3 className="text-base font-semibold text-gray-900 hover:text-indigo-600 transition-colors duration-200">
                                    <a href={product.href}>
                                        <span className="absolute inset-0" />
                                        {product.name}
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm font-medium text-gray-600">{product.price}</p>
                            </div>

                            {/* Tombol */}
                            <div className="mt-5">
                                <a
                                    href={product.href}
                                    className="relative flex w-full items-center justify-center gap-2 rounded-lg border border-transparent bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:from-indigo-500 hover:to-indigo-400 hover:shadow-md"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                    Beli Produk
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
