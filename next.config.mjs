/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "amir.mixtesting.online",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default  nextConfig;
