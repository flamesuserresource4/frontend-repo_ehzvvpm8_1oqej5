import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      {/* Gradient aurora background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-fuchsia-400/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-rose-400/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_-20%,rgba(255,255,255,0.8),transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600"
            >
              Oleh Oleh Sombong
              <span className="block text-slate-700">Viral Dessert dari Berbagai Kota</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg text-slate-700/80"
            >
              Nikmati seleksi dessert hits seperti TiramisuSu dari Chocomory, Coklat Falala dari Bali, hingga Bakpia Pathok asli Jogja. Estetik, premium, dan siap difoto!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#koleksi" className="px-5 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-rose-500 text-white font-semibold shadow-lg hover:shadow-rose-300/50 transition-all">Lihat Koleksi</a>
              <a href="#pesan" className="px-5 py-3 rounded-full border border-slate-300 bg-white/60 backdrop-blur text-slate-800 font-semibold hover:bg-white transition-colors">Pesan Sekarang</a>
            </motion.div>

            <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=96&auto=format&fit=crop" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=96&auto=format&fit=crop" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=96&auto=format&fit=crop" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
              </div>
              <p><span className="font-semibold">10k+</span> pelanggan puas • <span className="text-rose-600 font-medium">Instagramable</span></p>
            </div>
          </div>

          <div className="relative">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-6 bg-gradient-to-tr from-fuchsia-400 via-rose-400 to-amber-300 blur-2xl opacity-40 rounded-3xl" />
              <div className="relative rounded-3xl bg-white/60 backdrop-blur border border-white/60 shadow-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1200&auto=format&fit=crop" alt="Dessert Hero" className="h-80 w-full object-cover" />
                <div className="p-4 grid grid-cols-3 gap-3">
                  <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=300&auto=format&fit=crop" className="rounded-xl object-cover h-24 w-full" />
                  <img src="https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="rounded-xl object-cover h-24 w-full" />
                  <img src="https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="rounded-xl object-cover h-24 w-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
