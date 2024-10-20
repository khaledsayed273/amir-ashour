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
            {
                protocol: "https",
                hostname: "dashboard.amir-ashour.com",
                port: "",
                pathname: "/**",
            },
        ],
        unoptimized: false
    },
};

export default  nextConfig;
