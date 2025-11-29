import { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // --- BAGIAN YANG PERLU DITAMBAHKAN/DIUBAH ---
  compiler: {
    // Menonaktifkan Turbopack untuk Development Server
    // Ini adalah solusi sementara untuk masalah error font yang Anda hadapi.
    turbo: false,
  },
  // ---------------------------------------------
};

export default nextConfig;