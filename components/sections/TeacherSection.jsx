const people = [
    {
        name: 'Nama Pemateri1',
        role: 'lain lain',
        imageUrl:
            'https://umrohsurabaya.nurramadhan.com/wp-content/uploads/2022/06/Ustadz-Ahmad-Anshori-Lc-1-204x300.png',
    },
    {
        name: 'Nama Pemateri2',
        role: 'lain lain',
        imageUrl:
            'https://umrohsurabaya.nurramadhan.com/wp-content/uploads/2022/06/Ustadz-Ahmad-Anshori-Lc-1-204x300.png',
    },
    {
        name: 'Nama Pemateri3',
        role: 'lain lain',
        imageUrl:
            'https://umrohsurabaya.nurramadhan.com/wp-content/uploads/2022/06/Ustadz-Ahmad-Anshori-Lc-1-204x300.png',
    },
    {
        name: 'Nama Pemateri4',
        role: 'lain lain',
        imageUrl:
            'https://umrohsurabaya.nurramadhan.com/wp-content/uploads/2022/06/Ustadz-Ahmad-Anshori-Lc-1-204x300.png',
    },

]

export default function TeacherSection() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl">Pemateri Profesional</h2>
                    <p className="mt-6 text-lg/8 text-gray-600">
                        Dilatih oleh pemateri perpengalaman di bidangnya dan profesioanl.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
                >
                    {people.map((person) => (
                        <li key={person.name}>
                            <img
                                alt=""
                                src={person.imageUrl}
                                className="aspect-14/13 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
                            />
                            <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                            <p className="text-base/7 text-gray-600">{person.role}</p>
                            <p className="text-sm/6 text-gray-500">{person.location}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
