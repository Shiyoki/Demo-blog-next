/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['1gr.cz', 'medias.leblogauto.com', 'vcdn1-sohoa.vnecdn.net', 'a57.foxnews.com', 
    'static.bangkokpost.com','images.drive.com.au', 'techcrunch.com'],
  }  

  
}

module.exports = nextConfig
