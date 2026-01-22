'use client'

import Link from 'next/link'

export default function Notfound() {
    return (
        <div className="h-screen flex flex-col gap-8 justify-center items-center text-white text-2xl bg-gray-900">
            <div className="">
                <h1 className="text-center text-4xl text-red-600 mb-12"> 404 </h1>
                <p>Oups Cette Page Est  Introuvable !</p>
            </div>
            <Link href="/" className='text-sky-400 underline'>Retour à la page d'acceuil</Link>
        </div>
    )
}