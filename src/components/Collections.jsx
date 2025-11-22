import { motion } from "framer-motion"

const items = [
  {
    name: "TiramisuSu Chocomory",
    city: "Bogor",
    desc: "Creamy tiramisu viral dengan lapisan mascarpone tebal.",
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200&auto=format&fit=crop",
    price: "Rp48.000"
  },
  {
    name: "Coklat Falala",
    city: "Bali",
    desc: "Coklat handmade premium, cocok jadi oleh-oleh hits.",
    img: "https://images.unsplash.com/photo-1497051788611-2c64812349a5?q=80&w=1200&auto=format&fit=crop",
    price: "Rp55.000"
  },
  {
    name: "Bakpia Pathok",
    city: "Yogyakarta",
    desc: "Legit isi kacang hijau, klasik tak pernah salah.",
    img: "https://images.unsplash.com/photo-1546549039-49bff3b4b397?q=80&w=1200&auto=format&fit=crop",
    price: "Rp38.000"
  },
  {
    name: "Kue Klepon Modern",
    city: "Jakarta",
    desc: "Klepon isi coklat lava, chewy dan manis legit.",
    img: "https://images.unsplash.com/photo-1541781784459-bb2af2f05b55?q=80&w=1200&auto=format&fit=crop",
    price: "Rp32.000"
  }
]

function Collections() {
  return (
    <section id="koleksi" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 via-rose-600 to-amber-500">Koleksi Viral</h2>
          <p className="mt-3 text-slate-600">Kurasi dessert paling diburu dari berbagai kota, siap bikin feed kamu makin estetik.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative rounded-3xl overflow-hidden bg-white/70 border border-white/60 backdrop-blur shadow-xl"
            >
              <div className="relative">
                <img src={item.img} alt={item.name} className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-sm px-3 py-1 rounded-full bg-black/40 backdrop-blur">
                  {item.city}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-slate-900">{item.name}</h3>
                <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold text-rose-600">{item.price}</span>
                  <button className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm hover:bg-slate-800">Tambah</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collections
