/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  }
}

module.exports = nextConfig
