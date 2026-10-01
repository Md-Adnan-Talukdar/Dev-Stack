
import type { Technology } from '../App';

interface TechCardProps {
  tech: Technology;
  onSelect: (tech: Technology) => void;
}

const TechCard = ({ tech, onSelect }: TechCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-xl border border-slate-100 p-6 transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <img 
              src={tech.icon} 
              alt={tech.name} 
              className="w-12 h-12 object-contain p-2 bg-slate-50 rounded-lg border border-slate-100"
            />
            <div>
              <h3 className="font-bold text-lg text-black">{tech.name}</h3>
            </div>
          </div>

          <div className="badge badge-secondary badge-sm font-semibold">
            {tech.badge}
          </div>
        </div>

        <p className="text-black text-sm mb-4 line-clamp-2 font-normal">
          {tech.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-medium">
          <div className="flex items-center gap-2 text-zinc-700">
            <p className="bg-slate-100 px-2 py-0.5 rounded font-medium text-black">
              {tech.category}
            </p>
            <span>•</span>
            <p className="text-zinc-600">
              {tech.difficulty}
            </p>
          </div>

          <div className="flex items-center gap-1 text-amber-500 font-bold">
            ★ {tech.rating}
          </div>
        </div>
      </div>

      <button
        onClick={() => onSelect(tech)}
        className="mt-4 w-full bg-black text-white text-sm font-medium py-2 rounded-lg hover:bg-zinc-800 transition-all"
      >
        Add to Stack
      </button>
    </div>
  );
};

export default TechCard;