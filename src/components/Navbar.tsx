

const Navbar = () => {
    return (
        <div>
            <nav className="sticky top-0 z-50 justify-between bg-white border-b py-3">
                <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
                    <div className="flex items-center gap-2">
                        <img src="/logo-text.png" alt="Logo" className="h-8 object-contain" />
                    </div>

                    <ul className="flex items-center gap-6 text-sm font-semibold text-black">           
                        <li className="cursor-pointer hover:text-purple-600 transition-colors">Home</li>
                        <li className="cursor-pointer hover:text-purple-600 transition-colors">Technologies</li>
                        <li className="cursor-pointer hover:text-purple-600 transition-colors">Projects</li>
                        <li className="cursor-pointer hover:text-purple-600 transition-colors">About</li>
                        <li className="cursor-pointer hover:text-purple-600 transition-colors">Contact</li>
                    </ul>

                    <div className="flex items-center gap-3">
                        {/* Outlined Button */}
                        <button className="px-4 py-2 text-sm font-medium text-black border border-slate-300 rounded-lg hover:bg-slate-100 transition-all">
                            Sign In
                        </button>

                        {/* Solid Button with Border */}
                        <button className="px-4 py-2 text-sm font-medium text-white bg-black border border-black rounded-lg hover:bg-zinc-800 transition-all shadow-sm">
                            Sign Up
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;