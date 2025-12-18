
import React, { useState } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

/**
 * DATA LAYER - Single source of truth for games
 */
const GAMES = [
  {
    id: 'paper-io-2',
    title: 'Paper.io 2',
    url: 'https://unblocked-games.s3.amazonaws.com/paper-io-2.html',
    thumbnail: 'https://picsum.photos/seed/paperio/400/300',
    description: 'The addictive multiplayer territory game. Conquer the map and become the largest area owner!',
    tags: ['IO', 'Multiplayer', 'Strategy']
  },
  {
    id: 'paper-io-classic',
    title: 'Paper.io Classic',
    url: 'https://unblocked-games.s3.amazonaws.com/paper-io.html',
    thumbnail: 'https://picsum.photos/seed/paperioclassic/400/300',
    description: 'The original version that started it all. Simple, clean, and extremely competitive.',
    tags: ['IO', 'Classic']
  },
  {
    id: 'slither-io',
    title: 'Slither.io',
    url: 'https://slither.io',
    thumbnail: 'https://picsum.photos/seed/slither/400/300',
    description: 'Grow your snake by eating glowing orbs while avoiding other players.',
    tags: ['IO', 'Snake']
  }
];

/**
 * AD BANNER COMPONENT - Safe placeholder
 */
const AdBanner = () => (
  <div className="w-full bg-gray-800/50 border border-dashed border-gray-700 rounded-lg h-28 flex flex-col items-center justify-center my-6">
    <span className="text-gray-500 font-mono text-xs uppercase tracking-widest">Advertisement Space</span>
    <span className="text-gray-600 text-[10px] mt-1 italic">Content Filtered for School Safety</span>
  </div>
);

/**
 * HEADER COMPONENT - No Icons as requested
 */
const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Simplified search logic
    console.log("Searching for:", searchTerm);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="text-2xl font-black text-blue-500 hover:text-blue-400 transition-colors uppercase tracking-tighter">
          PAPER.IO <span className="text-white">UNBLOCKED</span>
        </Link>
        
        <form onSubmit={handleSearch} className="flex w-full md:w-auto gap-2">
          <input 
            type="text" 
            placeholder="Search games..." 
            className="bg-gray-800 border border-gray-700 rounded px-4 py-2 w-full md:w-64 focus:outline-none focus:border-blue-500 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded text-xs font-bold uppercase transition-all">
            SEARCH
          </button>
        </form>

        <nav className="flex gap-4">
          <Link to="/" className="text-xs font-bold uppercase hover:text-blue-500 transition-colors">HOME</Link>
          <button onClick={() => window.open('https://github.com', '_blank')} className="text-xs font-bold uppercase hover:text-blue-500 transition-colors">CONTACT</button>
        </nav>
      </div>
    </header>
  );
};

/**
 * HOME PAGE COMPONENT
 */
const Home = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 md:px-8">
      <section className="mb-12">
        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-800/50 rounded-2xl p-8 md:p-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">Paper.io 2025 Edition</h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            The #1 unblocked territory conquest game optimized for school networks. 
            No lag, no crashes, pure competition.
          </p>
          <Link to="/game/paper-io-2" className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-12 py-4 rounded-full font-black text-lg shadow-lg shadow-blue-900/20 transform hover:-translate-y-1 transition-all uppercase">
            PLAY PAPER.IO NOW
          </Link>
        </div>
      </section>

      <AdBanner />

      <h2 className="text-2xl font-black mb-6 uppercase tracking-wider text-gray-300">Featured Games</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GAMES.map(game => (
          <div key={game.id} className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500 transition-all group">
            <Link to={`/game/${game.id}`}>
              <div className="relative h-48 overflow-hidden">
                <img src={game.thumbnail} alt={game.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-black px-4 py-2 font-bold uppercase text-xs rounded">PLAY NOW</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2 mb-4">{game.description}</p>
                <div className="flex gap-2">
                  {game.tags.map(tag => (
                    <span key={tag} className="bg-gray-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gray-900/50 p-8 rounded-xl border border-gray-800">
        <h2 className="text-xl font-bold mb-4 uppercase text-blue-500">About Paper.io Unblocked 2025</h2>
        <div className="prose prose-invert max-w-none text-gray-400 text-sm leading-relaxed">
          <p className="mb-4">
            Welcome to the definitive source for <strong>Paper.io unblocked</strong>. We know that schools often block gaming websites, 
            which is why we have engineered this single-file application architecture to be as lightweight and stable as possible. 
            By utilizing direct AWS S3 hosting for the game engine, we ensure that you get the fastest possible connection without 
            unnecessary middleware.
          </p>
          <p>
            <strong>How to play:</strong> Use your mouse or arrow keys to control your block. Move outside your territory to create a trail. 
            Return to your color to claim the area. If someone hits your trail while you are outside, you lose! 
            Similarly, hit other players' trails to eliminate them.
          </p>
        </div>
      </div>
    </main>
  );
};

/**
 * GAME PLAYER COMPONENT
 */
const GamePlayer = () => {
  const { id } = useParams();
  const game = GAMES.find(g => g.id === id);

  if (!game) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-4xl font-black text-red-500 mb-4 uppercase">Game Not Found</h1>
        <p className="text-gray-400 mb-8">The requested game ID does not exist in our system.</p>
        <Link to="/" className="bg-gray-700 px-6 py-2 rounded font-bold uppercase">BACK TO HOME</Link>
      </div>
    );
  }

  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`flex flex-col ${isFullscreen ? 'fixed inset-0 z-[100] bg-black' : 'max-w-6xl mx-auto p-4 md:p-8'}`}>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-black uppercase tracking-tighter">
          PLAYING: <span className="text-blue-500">{game.title}</span>
        </h1>
        <div className="flex gap-2">
          <button 
            onClick={toggleFullscreen} 
            className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded text-[10px] font-black uppercase border border-gray-700"
          >
            {isFullscreen ? 'EXIT FULLSCREEN' : 'GO FULLSCREEN'}
          </button>
          {!isFullscreen && (
             <Link to="/" className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded text-[10px] font-black uppercase border border-gray-700">
               BACK
             </Link>
          )}
        </div>
      </div>

      <div className={`relative bg-black rounded-lg overflow-hidden shadow-2xl ${isFullscreen ? 'flex-grow h-full' : 'aspect-video'}`}>
        <iframe 
          src={game.url} 
          title={game.title} 
          allowFullScreen 
          className="w-full h-full"
        />
      </div>

      {!isFullscreen && (
        <>
          <AdBanner />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold mb-4 uppercase text-gray-300">Description</h2>
              <p className="text-gray-400 leading-relaxed mb-6">{game.description}</p>
              
              <h2 className="text-xl font-bold mb-4 uppercase text-gray-300">Game Controls</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li><strong>Mouse:</strong> Drag to steer your block</li>
                <li><strong>Arrow Keys:</strong> Change direction (Up, Down, Left, Right)</li>
                <li><strong>WASD:</strong> Alternative movement keys</li>
                <li><strong>P:</strong> Pause game</li>
              </ul>
            </div>
            <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-800">
              <h2 className="text-lg font-bold mb-4 uppercase text-blue-500">Pro Tips</h2>
              <div className="text-xs text-gray-400 space-y-4">
                <p>1. Don't be too greedy early on. Build a solid base first.</p>
                <p>2. Watch the corners! Other players love to surprise you from the edges.</p>
                <p>3. Killing someone yields more territory than just drawing circles.</p>
                <p>4. Always keep your tail short when an enemy is nearby.</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

/**
 * FOOTER COMPONENT
 */
const Footer = () => (
  <footer className="mt-20 border-t border-gray-800 bg-gray-950 py-12 px-4 text-center">
    <div className="max-w-7xl mx-auto">
      <div className="text-3xl font-black text-gray-700 mb-6 uppercase tracking-tighter">PAPER.IO 2025</div>
      <div className="flex flex-wrap justify-center gap-6 mb-8 text-xs font-bold text-gray-500 uppercase">
        <Link to="/" className="hover:text-white">GAMES</Link>
        <button className="hover:text-white uppercase">TERMS</button>
        <button className="hover:text-white uppercase">PRIVACY</button>
        <button className="hover:text-white uppercase">COOKIES</button>
        <button className="hover:text-white uppercase">DMCA</button>
      </div>
      <p className="text-gray-600 text-[10px] uppercase tracking-widest max-w-2xl mx-auto leading-loose">
        &copy; 2025 PAPER.IO UNBLOCKED SCHOOL NETWORK. THIS SITE IS PROVIDED "AS IS" FOR EDUCATIONAL AND ENTERTAINMENT PURPOSES. 
        ALL TRADEMARKS BELONG TO THEIR RESPECTIVE OWNERS.
      </p>
    </div>
  </footer>
);

/**
 * MAIN APP COMPONENT - Orchestrator
 */
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<GamePlayer />} />
          <Route path="*" element={<div className="p-20 text-center"><h1 className="text-4xl">404 - LOST IN THE GRID</h1><Link to="/" className="mt-4 inline-block text-blue-500 underline">RETURN HOME</Link></div>} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
