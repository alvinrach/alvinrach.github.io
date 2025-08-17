/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Important for GitHub Pages subdirectory deployment
  basePath: '',
  assetPrefix: '',
}

export default nextConfig