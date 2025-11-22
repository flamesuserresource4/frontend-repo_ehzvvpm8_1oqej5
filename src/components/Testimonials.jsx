function Testimonials() {
  return (
    <section id="testi" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Apa Kata Mereka</h2>
          <p className="mt-3 text-slate-600">Review jujur dari pelanggan setia yang feed IG-nya auto estetik.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-3xl bg-white/70 border border-white/60 backdrop-blur shadow-xl p-6">
              <div className="flex items-center gap-3">
                <img src={`https://i.pravatar.cc/80?img=${i+10}`} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-slate-900">{i===1? 'Alya Putri' : i===2? 'Rizky Saputra' : 'Naya Anindya'}</p>
                  <p className="text-xs text-slate-500">Food Enthusiast</p>
                </div>
              </div>
              <p className="mt-4 text-slate-700">{i===1? 'TiramisuSu-nya creamy parah! Packaging gemes, foto jadi kece.' : i===2? 'Coklat Falala cocok buat gift, rasanya rich dan nggak enek.' : 'Bakpia Pathok legit dan fresh, nostalgia rasa Jogja!'}
              </p>
              <div className="mt-4 text-amber-500">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
