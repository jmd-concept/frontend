import { useState } from 'react'
import Link from 'next/link'


const posts = [
    {
        id: 1,
        post: "Post Site"
    },
    {
        id: 2,
        post: "Visibilité"
    },
    {
        id: 3,
        post: "Contenu digital"
    },
]

export default async function Post({ post }) {
    const [active, setActive] = useState(false)

    return (
        <ul>
            {/*  {posts.map((post) => (
                <li key={post.slug}>
                    <Link
                        href={`/blog/${post.slug}`}
                        prefetch={active ? null : false}
                        onMouseEnter={() => setActive(true)}
                    >
                        {post.title}
                    </Link>
                </li>
            ))} */}
        </ul>
    )
}


const Services = ({ services, loading }) => {
    if (loading) {
        return (
            <section id="services" className="py-12 px-4 md:px-0">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Nos Services</h2>
                    <div className="text-center">Chargement...</div>
                </div>
            </section>
        );
    }

    return (
        <section id="services" className="py-12 px-4 md:px-0">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Card Simple</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.length > 0 ? (
                        services.map((service) => (
                            <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-3 text-center py-8">
                            <p>Aucun service disponible pour le moment.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Services;