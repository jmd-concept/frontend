/** @type {import('next').NextConfig} */

const nextConfig = {
    /*output: "export",
     basePath: '/jmd-vitrine-frontend', //repo Github 
     */
    compress: true, // Compression
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'example.com',
            },
        ],
        // domains: ['localhost', '192.168.1.67', 'img.youtube.com'],
        unoptimized: true // si des problèmes avec les images
    },
    experimental: {
        optimizeCss: true,
    },
    async headers() {
        return [
            {
                source: '/videos/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ]
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:5000/api/:path*',
            }
        ];
    },
    async rewrites() {
        return [
            {
                source: '/services',
                destination: '/',
                has: [{ type: 'header', key: 'next-action' }]
            }
        ];
    },
    env: {
        API_URL: process.env.API_URL || 'http://localhost:5000/api',
    },
}

export default nextConfig;
