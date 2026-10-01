import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import TechCard from './components/TechCard';
import Footer from './components/Footer';

export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/technologies.json');
      const data = await res.json();
      setTechnologies(data);
    };

    fetchData();
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const isAlreadySelected = selectedTechs.some((item) => item.id === tech.id);
    if (!isAlreadySelected) {
      setSelectedTechs([...selectedTechs, tech]);
    }
  };

  const handleRemoveFromStack = (id: string) => {
    setSelectedTechs(selectedTechs.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <Hero />
          <h1 className="bg-gradient-to-r from-violet-900 via-teal-500 to-rose-500 bg-clip-text text-3xl font-bold text-transparent">
            Explore The Technologies
          </h1>
        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-3 grid grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <TechCard key={tech.id} tech={tech} onSelect={handleAddToStack} />
              ))}
            </div>

            <div className="col-span-1 bg-white p-6 rounded-xl border border-slate-100 shadow-md h-fit">
              <h2 className="text-xl font-bold text-black mb-4">Selected Stack</h2>
              <p className="text-sm text-zinc-600 mb-4">Total Selected: {selectedTechs.length}</p>

              {selectedTechs.length === 0 ? (
                <p className="text-sm text-zinc-400">No technology added yet.</p>
              ) : (
                <div className="space-y-3">
                  {selectedTechs.map((item) => (
                    <div key={item.id} className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div className="flex items-center gap-2">
                        <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                        <p className="text-sm font-semibold text-black">{item.name}</p>
                      </div>
                      <button
                        onClick={() => handleRemoveFromStack(item.id)}
                        className="text-xs text-red-500 hover:text-red-700 font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;