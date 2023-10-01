/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig
