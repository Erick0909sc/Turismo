// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["res.cloudinary.com"],
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https', // o 'http' si es necesario
        hostname: 'res.cloudinary.com',
        port: '', // opcional: si el puerto no es el estándar (80 o 443)
        pathname: '/**', // opcional:  permite cualquier ruta dentro del dominio
      },
    ],
  },
};

export default nextConfig;