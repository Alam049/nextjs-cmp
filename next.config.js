/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "devops.cyberprimatama.co.id",
        port: "",
        pathname: "/cmp/assets/images/uploads/2022/desember/img-icon-opex.png",
      },
    ],
  },
};
