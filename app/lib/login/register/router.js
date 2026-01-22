import { NextResponse } from 'next/server'

export async function POST(request) {
    try {
        const body = await request.json()
        const { name, email, password } = body

        // Ici, tu devras :
        // 1. Vérifier si l'email existe déjà
        // 2. Hasher le mot de passe (avec bcrypt)
        // 3. Sauvegarder l'utilisateur dans ta base de données

        // Exemple de réponse
        return NextResponse.json(
            {
                message: 'Inscription réussie',
                user: { name, email }
            },
            { status: 201 }
        )
    } catch (error) {
        return NextResponse.json(
            { message: 'Erreur serveur' },
            { status: 500 }
        )
    }
}