import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import Cities from './components/Cities'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-fuchsia-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Cities />
        <Testimonials />
        <CTA />
      </main>
      <footer className="py-10 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Oleh Oleh Sombong • Viral Dessert • Estetik & Instagramable
      </footer>
    </div>
  )
}

export default App
