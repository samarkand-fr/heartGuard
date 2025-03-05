/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["static01.nyt.com", "ichef.bbci.co.uk","res.cloudinary.com" ], // Ajoute ici tous les domaines autorisés
  },
};

module.exports = nextConfig;
