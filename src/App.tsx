
import './index.css';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/thorne_veerika.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
        <div className="text-center px-4 z-10">
          <img src="/logo.png" alt="Darkened Light Logo" className="mx-auto mb-10 h-32 md:h-64 w-auto drop-shadow-xl" />
          <p className="text-xl italic">When Realm sleeps, the light must rebuild itself.</p>
        </div>
      </section>

      {/* Lore Section */}
      <section className="px-6 py-20 max-w-3xl mx-auto text-lg leading-relaxed">
        <p className="mb-6">
          <strong>The Rapture shattered the world.</strong><br/>
          From the ashes rose new powers — Falroth, Shadarael, and Droganthal — each vying for dominion in the absence of the Immortals.
        </p>
        <p className="mb-6">
          <strong>Realm, the Timeless One, sleeps still.</strong> Her sacrifice saved creation, yet left it rudderless.
        </p>
        <p className="mb-6">
          Across shattered kingdoms, war banners rise.
          Orcish mages, cursed Mora, exiled Magi — all march toward the sacred mountain where it all began.
        </p>
        <p>
          You are the last blood of prophecy.<br/>
          Lead your people. Build your stronghold. Rewrite the fate of the Realm.
        </p>
      </section>

      {/* Concept Art Section */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-10">Concept Art</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <img src="/thorne_veerika.png" alt="Thorne vs Veerika" className="rounded shadow-lg" />
            <img src="/nelik_concept.png" alt="Nelik the Goblin Demolitionist" className="rounded shadow-lg" />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 bg-gray-900 text-center">
        <h3 className="text-2xl font-bold mb-4">Stay Informed</h3>
        <p className="mb-6">Sign up to be the first to know when the Realm awakens.</p>
        <form className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input type="email" placeholder="Enter your email" className="p-3 rounded text-black w-full md:w-2/3" />
          <button className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 px-6 rounded">Notify Me</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-6 text-center text-sm text-gray-400">
        © 2025 Rider Games. All rights reserved. Darkened Light: Realm Wars™
      </footer>
    </div>
  );
}

export default App;
