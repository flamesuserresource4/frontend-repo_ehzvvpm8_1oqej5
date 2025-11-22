const cities = [
  { name: "Bogor", img: "https://images.unsplash.com/photo-1498654077810-12f23b2ff0e5?q=80&w=1200&auto=format&fit=crop" },
  { name: "Bali", img: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop" },
  { name: "Yogyakarta", img: "https://images.unsplash.com/photo-1575321943520-488f49e60b9c?q=80&w=1200&auto=format&fit=crop" },
  { name: "Jakarta", img: "https://images.unsplash.com/photo-1560523159-81651c1f8f47?q=80&w=1200&auto=format&fit=crop" },
]

function Cities() {
  return (
    <section id="kota" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Asal Kota</h2>
          <a href="#pesan" className="text-rose-600 font-semibold">Pesan sekarang →</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cities.map((c, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden group">
              <img src={c.img} alt={c.name} className="h-36 sm:h-44 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute bottom-2 left-2 px-3 py-1 rounded-full text-white text-sm bg-black/40 backdrop-blur">
                {c.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cities
