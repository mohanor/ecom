/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next'


const nextConfig = {
    reactStrictMode: false,
    images:{
        domains: ['https://fakestoreapi.com'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'fakestoreapi.com',
              port: '',
              pathname: '/img/**',
            },
          ],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        icon: true,
                    },
                },
            ],
        })
        return config
    }
}

export default withPlaiceholder(nextConfig)
