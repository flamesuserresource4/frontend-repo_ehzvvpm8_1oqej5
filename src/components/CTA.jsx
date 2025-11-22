function CTA() {
  return (
    <section id="pesan" className="py-16">
      <div className="mx-auto max-w-3xl text-center px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 backdrop-blur shadow-2xl p-8 sm:p-12">
          <div className="absolute -inset-x-10 -top-10 h-40 bg-gradient-to-r from-fuchsia-400 via-rose-400 to-amber-300 blur-2xl opacity-40" />
          <h3 className="relative text-3xl sm:text-4xl font-extrabold text-slate-900">Siap Checkout?</h3>
          <p className="relative mt-3 text-slate-700">Klaim diskon 15% untuk pembelian pertama. Tinggal isi form singkat, kami siapkan oleh-oleh pilihanmu.</p>
          <form className="relative mt-8 grid sm:grid-cols-3 gap-3">
            <input placeholder="Nama" className="col-span-1 sm:col-span-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-400" />
            <input placeholder="Nomor WhatsApp" className="col-span-1 sm:col-span-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-400" />
            <button className="col-span-1 px-4 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-rose-500 text-white font-semibold shadow-lg hover:shadow-rose-300/50 transition-all">Dapatkan Diskon</button>
          </form>
          <p className="relative mt-3 text-xs text-slate-500">Dengan klik tombol, kamu setuju dihubungi via WhatsApp untuk konfirmasi pesanan.</p>
        </div>
      </div>
    </section>
  )
}

export default CTA
