import { Menu, Instagram, ShoppingBag } from "lucide-react"

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/60 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-rose-500 to-amber-400 shadow-lg shadow-rose-200/50" />
          <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 via-rose-600 to-amber-500">Oleh Oleh Sombong</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <a href="#koleksi" className="hover:text-rose-600 transition-colors">Koleksi</a>
          <a href="#kota" className="hover:text-rose-600 transition-colors">Kota</a>
          <a href="#testi" className="hover:text-rose-600 transition-colors">Testimoni</a>
          <a href="#pesan" className="hover:text-rose-600 transition-colors">Pesan</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://instagram.com" target="_blank" className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-rose-500 text-white text-sm shadow-lg hover:shadow-xl transition-all">
            <Instagram size={18} /> <span>Follow</span>
          </a>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-900 text-white text-sm hover:bg-slate-800 transition-colors">
            <ShoppingBag size={18} /> <span>Cart</span>
          </button>
          <button className="md:hidden h-10 w-10 rounded-xl border border-slate-200 grid place-items-center">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
