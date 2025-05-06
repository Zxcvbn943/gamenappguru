
// Homepage for gamenappguru

import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-4">
      <div className="max-w-4xl mx-auto text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          GameNAppGuru
        </h1>
        <p className="text-lg md:text-xl mb-4">
          Best Reviews for Apps & Games — in Hindi & English
        </p>
        <p className="mb-8">
          "Honest reviews, direct download links, and smart tips — sab kuch ek jagah par."
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#games"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow"
          >
            Explore Games
          </a>
          <a
            href="#apps"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl shadow"
          >
            Discover Apps
          </a>
        </div>
      </div>
      <section id="games" className="max-w-4xl mx-auto text-left py-10">
        <h2 className="text-3xl font-bold mb-4">Latest Game Reviews</h2>
        <p>Coming soon...</p>
      </section>
      <section id="apps" className="max-w-4xl mx-auto text-left py-10">
        <h2 className="text-3xl font-bold mb-4">Top Apps Reviewed</h2>
        <p>Coming soon...</p>
      </section>
      <footer className="text-center mt-20 text-sm opacity-50">
        © 2025 GameNAppGuru — Built with love.
      </footer>
    </main>
  );
}
