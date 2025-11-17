import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const mapsUrl = encodeURI(
    'https://www.google.com/maps?q=1535+New+Dundee+Rd+Kitchener,+ON+N2P+2P5'
  )

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-emerald-600 flex items-center justify-center text-white font-bold">JR</div>
              <span className="font-semibold tracking-tight">Jim's Driving Range</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="hover:text-emerald-700 transition-colors">About</a>
              <a href="#pricing" className="hover:text-emerald-700 transition-colors">Pricing</a>
              <a href="#info" className="hover:text-emerald-700 transition-colors">Info</a>
              <a href="#location" className="hover:text-emerald-700 transition-colors">Location</a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 text-white px-4 py-2 font-medium hover:bg-emerald-700 transition-colors"
              >
                Get Directions
              </a>
            </nav>
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-300 text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                {menuOpen ? (
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M3.75 5.25A.75.75 0 0 1 4.5 4.5h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75zm0 7A.75.75 0 0 1 4.5 11.5h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75zm0 7a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75z" clipRule="evenodd" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 flex flex-col gap-4">
              <a href="#about" className="hover:text-emerald-700" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#pricing" className="hover:text-emerald-700" onClick={() => setMenuOpen(false)}>Pricing</a>
              <a href="#info" className="hover:text-emerald-700" onClick={() => setMenuOpen(false)}>Info</a>
              <a href="#location" className="hover:text-emerald-700" onClick={() => setMenuOpen(false)}>Location</a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 text-white px-4 py-2 font-medium hover:bg-emerald-700"
                onClick={() => setMenuOpen(false)}
              >
                Get Directions
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1969&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/30 to-white" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 sm:pb-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-gray-900 ring-1 ring-inset ring-white/60 backdrop-blur">Kitchener, Ontario • 15 years in the community</span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow">
              Hit the range today.
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-xl">
              Open daily 9am–8pm. Walk-in only. Two bucket sizes, 40 mats, friendly vibes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 text-white px-5 py-3 font-medium hover:bg-emerald-700"
              >
                Open in Maps
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-md bg-white/90 text-gray-900 px-5 py-3 font-medium ring-1 ring-inset ring-white/60 hover:bg-white"
              >
                See Prices
              </a>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="relative">
          <div className="max-w-6xl mx-auto -mt-8 sm:-mt-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Years Operating', value: '15+' },
                { label: 'Mats Available', value: '40' },
                { label: 'Walk-in', value: 'Only' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-5">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">A straightforward spot to groove your swing</h2>
            <p className="mt-4 text-gray-600">
              Jim's Driving Range has been a local staple in Kitchener for over 15 years. We keep things simple: show up, grab a bucket, and start hitting. Whether you’re
              sharpening fundamentals or just unwinding after work, you’ll find a clean setup and friendly faces.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm">✓</span>
                40 well-spaced mats
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm">✓</span>
                Open daily from 9am to 8pm (weather permitting)
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm">✓</span>
                Walk-in only — no reservations or online booking
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200">
            <img
              src="https://images.unsplash.com/photo-1516100882582-96c3a05fe590?q=80&w=1974&auto=format&fit=crop"
              alt="Driving range"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Simple pricing</h2>
            <p className="mt-3 text-gray-600">Two bucket sizes. Pay at the counter and you’re set.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-6 flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Medium Bucket</h3>
                <p className="mt-2 text-emerald-700 text-3xl font-bold">$10</p>
                <p className="mt-3 text-gray-600">Great for a quick session.</p>
              </div>
              <a href="#location" className="mt-6 inline-flex items-center justify-center rounded-md bg-emerald-600 text-white px-4 py-2 font-medium hover:bg-emerald-700">Swing by</a>
            </div>

            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-6 flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Large Bucket</h3>
                <p className="mt-2 text-emerald-700 text-3xl font-bold">$15</p>
                <p className="mt-3 text-gray-600">Settle in and groove the swing.</p>
              </div>
              <a href="#location" className="mt-6 inline-flex items-center justify-center rounded-md bg-emerald-600 text-white px-4 py-2 font-medium hover:bg-emerald-700">Swing by</a>
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section id="info" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-6">
              <h3 className="text-lg font-semibold">Hours</h3>
              <p className="mt-2 text-gray-700">Open daily</p>
              <p className="text-gray-900 font-medium">9:00 AM – 8:00 PM</p>
              <p className="mt-2 text-gray-500 text-sm">Weather permitting</p>
            </div>
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-6">
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="mt-2 text-gray-900 font-medium">1535 New Dundee Rd</p>
              <p className="text-gray-700">Kitchener, ON N2P 2P5</p>
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-emerald-700 hover:text-emerald-800 font-medium">Open in Maps →</a>
            </div>
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-6">
              <h3 className="text-lg font-semibold">Walk-in only</h3>
              <p className="mt-2 text-gray-700">No reservations or online booking. Just show up and swing.</p>
              <p className="mt-2 text-gray-500 text-sm">Plenty of space on 40 mats.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location / Map */}
      <section id="location" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Find us</h2>
            <p className="mt-3 text-gray-600">Preview the location below or open it in your maps app for directions.</p>
          </div>
          <div className="mt-8 rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200">
            <iframe
              title="Map preview"
              src="https://www.google.com/maps?q=1535+New+Dundee+Rd+Kitchener,+ON+N2P+2P5&output=embed"
              className="w-full h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="mt-6">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-emerald-600 text-white px-5 py-3 font-medium hover:bg-emerald-700"
            >
              Open Full Directions
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Jim's Driving Range • Kitchener, ON</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-gray-700">About</a>
            <a href="#pricing" className="hover:text-gray-700">Pricing</a>
            <a href="#location" className="hover:text-gray-700">Location</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
