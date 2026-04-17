/** @type {import('next').NextConfig} */
const config = {
  images: {
    unoptimized: true,
  },
  experimental: {
    outputFileTracingExcludes: {
      '*': ['img/**/*'],
    },
  },
}

export default config
