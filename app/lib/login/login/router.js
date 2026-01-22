// app/api/auth/login/route.js
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { connectDB } from '@/lib/db'
import User from '@/models/User'

export async function POST(request) {
    try {
        const body = await request.json()
        const { email, password } = body

        // Validation des données
        if (!email || !password) {
            return NextResponse.json(
                { message: 'Email et mot de passe requis' },
                { status: 400 }
            )
        }

        // Connexion à la base de données
        await connectDB()

        // Chercher l'utilisateur
        const user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json(
                { message: 'Email ou mot de passe incorrect' },
                { status: 401 }
            )
        }

        // Vérifier le mot de passe
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            return NextResponse.json(
                { message: 'Email ou mot de passe incorrect' },
                { status: 401 }
            )
        }

        // Vérifier si le compte est activé
        if (!user.isActive) {
            return NextResponse.json(
                { message: 'Compte désactivé. Contactez l\'administrateur.' },
                { status: 403 }
            )
        }

        // Créer le token JWT
        const token = jwt.sign(
            {
                userId: user._id,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        )

        // Mettre à jour la dernière connexion
        user.lastLogin = new Date()
        await user.save()

        // Retourner la réponse
        return NextResponse.json({
            message: 'Connexion réussie',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        })

    } catch (error) {
        console.error('Login error:', error)
        return NextResponse.json(
            { message: 'Erreur serveur' },
            { status: 500 }
        )
    }
}

/* import { NextResponse } from 'next/server'

export async function POST(request) {
    try {
        const body = await request.json()
        const { email, password } = body

        // Ici, tu devras :
        // 1. Chercher l'utilisateur par email
        // 2. Vérifier le mot de passe
        // 3. Générer un JWT token

        // Exemple de réponse
        return NextResponse.json(
            {
                message: 'Connexion réussie',
                token: 'jwt-token-exemple',
                user: { name: 'John Doe', email }
            }
        )
    } catch (error) {
        return NextResponse.json(
            { message: 'Erreur de connexion' },
            { status: 401 }
        )
    }
} */