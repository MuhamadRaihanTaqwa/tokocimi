// app/page.tsx

import Image from "next/image";

// Data untuk Featured Categories
const categories = [
  { 
    name: "Outerwear", 
    description: "Jaket & Mantel", 
    image: "/images/cat-outerwear.jpg" 
  },
  { 
    name: "Knitwear", 
    description: "Rajutan & Kardigan", 
    image: "/images/cat-knitwear.jpg" 
  },
  { 
    name: "Essentials", 
    description: "Basic & Aksesori", 
    image: "/images/cat-essentials.jpg" 
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-tocimi-cream">

      {/* --- 1. Navigation Bar (Header) --- */}
      <nav className="flex justify-between items-center px-8 py-4 shadow-sm border-b border-tocimi-purple/20 sticky top-0 bg-white/90 backdrop-blur-sm z-20">
        {/* Logo/Nama Tocimi */}
        <h1 className="text-3xl font-serif font-extrabold text-tocimi-brown tracking-wider">
          TOCIMI
        </h1>
        {/* Navigasi Utama */}
        <div className="space-x-8 text-lg font-medium text-tocimi-purple hidden md:flex">
          <a href="#" className="hover:text-tocimi-pink transition duration-300">Shop</a>
          <a href="#" className="hover:text-tocimi-pink transition duration-300">New Arrivals</a>
          <a href="#" className="hover:text-tocimi-pink transition duration-300">Lookbook</a>
        </div>
        {/* Ikon (Keranjang dan User) */}
        <div className="flex items-center space-x-4">
          <span className="text-xl cursor-pointer hover:text-tocimi-pink transition">👤</span>
          <span className="text-xl cursor-pointer hover:text-tocimi-pink transition">🛒</span>
        </div>
      </nav>

      {/* --- 2. Hero Section (Pusat Perhatian) --- */}
      <section className="relative h-[85vh] flex items-center p-8 md:p-12">
        
        {/* Background Image */}
        <Image
          src="/images/hero-model.jpg" 
          alt="Model Tocimi wearing the new collection"
          fill 
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          className="z-0 opacity-80"
        />

        {/* Konten Utama */}
        <div className="relative z-10 text-tocimi-brown max-w-xl p-8 bg-white bg-opacity-95 shadow-2xl">
          <h2 className="text-5xl md:text-6xl font-serif font-extrabold leading-tight text-tocimi-purple">
            Redefine Your Style.
          </h2>
          <p className="mt-4 text-lg md:text-xl font-light text-tocimi-brown/80">
            Eksplorasi koleksi terbaru kami, memadukan keindahan minimalis dengan sentuhan kontras yang kuat.
          </p>
          <button className="mt-8 px-8 py-3 bg-tocimi-purple hover:bg-tocimi-brown text-white text-lg uppercase font-semibold tracking-wider transition duration-300 shadow-md">
            Shop New Arrivals
          </button>
        </div>
      </section>

      {/* --- 3. Featured Categories (Kategori Unggulan) --- */}
      <section className="py-16 px-4 md:px-8 bg-tocimi-cream">
        <h3 className="text-3xl md:text-4xl font-serif font-extrabold text-center mb-12 text-tocimi-brown">
          Discover Our Collections
        </h3>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">

          {categories.map((category) => (
            <div
              key={category.name}
              className="relative group overflow-hidden shadow-xl cursor-pointer h-96"
            >
              <Image
                src={category.image}
                alt={category.name + " collection"}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
                className="transition duration-500 group-hover:scale-105"
              />

              {/* Overlay dan Teks */}
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition duration-300 flex items-end p-6">
                <div className="relative text-white">
                  <h4 className="text-3xl font-serif font-bold">{category.name}</h4>
                  <p className="text-sm mt-1">{category.description}</p>
                  <span className="mt-2 block border-b-2 border-tocimi-pink w-1/4 group-hover:w-1/2 transition-all duration-300"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 4. Value Proposition (Fitur Unggulan) --- */}
      <section className="py-16 px-4 md:px-8 bg-tocimi-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          {/* Fitur 1: Free Shipping */}
          <div className="p-6 border border-tocimi-pink/20 shadow-sm transition hover:shadow-lg duration-300 bg-white/70 backdrop-blur-sm">
            <p className="text-5xl mb-4 text-tocimi-pink">🚚</p>
            <h4 className="text-xl font-bold text-tocimi-brown mb-2">
              Gratis Pengiriman Nasional
            </h4>
            <p className="text-tocimi-brown/70">
              Nikmati pengiriman gratis ke seluruh Indonesia untuk semua pesanan di atas Rp 500.000.
            </p>
          </div>

          {/* Fitur 2: 30-Day Return */}
          <div className="p-6 border border-tocimi-pink/20 shadow-sm transition hover:shadow-lg duration-300 bg-white/70 backdrop-blur-sm">
            <p className="text-5xl mb-4 text-tocimi-pink">🔄</p>
            <h4 className="text-xl font-bold text-tocimi-brown mb-2">
              Jaminan Pengembalian 30 Hari
            </h4>
            <p className="text-tocimi-brown/70">
              Tidak cocok? Kembalikan produk Anda dalam 30 hari untuk penukaran atau *refund* penuh.
            </p>
          </div>

          {/* Fitur 3: Sustainable Sourcing */}
          <div className="p-6 border border-tocimi-pink/20 shadow-sm transition hover:shadow-lg duration-300 bg-white/70 backdrop-blur-sm">
            <p className="text-5xl mb-4 text-tocimi-pink">🌿</p>
            <h4 className="text-xl font-bold text-tocimi-brown mb-2">
              Bahan Baku Berkelanjutan
            </h4>
            <p className="text-tocimi-brown/70">
              Kami berkomitmen pada proses produksi etis dan menggunakan bahan-bahan ramah lingkungan.
            </p>
          </div>

        </div>
      </section>

      {/* --- 5. Newsletter Sign-up (Ditambahkan sekarang) --- */}
      <section className="py-20 px-4 md:px-8 bg-tocimi-cream">
        <div className="max-w-4xl mx-auto text-center p-10 bg-white shadow-xl border border-tocimi-pink/20">
          <h3 className="text-3xl font-serif font-extrabold text-tocimi-brown mb-4">
            Dapatkan Akses Eksklusif
          </h3>
          <p className="text-lg text-tocimi-brown/70 mb-6">
            Jadilah yang pertama tahu tentang koleksi baru, diskon khusus, dan berita fashion Tocimi.
          </p>

          <form className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Masukkan alamat email Anda"
              className="p-3 border-2 border-tocimi-cream focus:border-tocimi-pink flex-grow text-lg bg-tocimi-cream/30"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-tocimi-purple hover:bg-tocimi-brown text-white text-lg uppercase font-semibold transition duration-300 shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* --- 6. Footer --- */}
      <footer className="py-8 bg-tocimi-brown text-white text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-2xl font-serif font-bold mb-4 text-tocimi-cream">TOCIMI</p>
          <div className="text-sm space-x-6 mb-4">
            <a href="#" className="hover:text-tocimi-pink transition duration-300">FAQ</a>
            <a href="#" className="hover:text-tocimi-pink transition duration-300">Kontak</a>
            <a href="#" className="hover:text-tocimi-pink transition duration-300">Kebijakan Privasi</a>
          </div>
          <div className="text-lg space-x-4">
            <a href="#" className="hover:text-tocimi-pink transition duration-300">📷</a> {/* Instagram */}
            <a href="#" className="hover:text-tocimi-pink transition duration-300">📘</a> {/* Facebook */}
          </div>
          <p className="mt-4 text-sm text-tocimi-cream/70">&copy; {new Date().getFullYear()} Tocimi. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
