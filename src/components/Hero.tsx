

const Hero = () => {
  return (
    <div>
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-12">
          <div className="w-1/2">
            <h1 className="text-5xl font-black leading-tight text-black">
              Build Your Ideal{' '}
              <span className="bg-gradient-to-r from-violet-900 via-teal-500 to-rose-500 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-4 text-black text-sm leading-relaxed font-normal">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits your
              next project.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-gradient-to-r from-violet-900 via-teal-500 to-rose-500 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition-all">
                Explore Technologies
              </button>

              <button className="border-2 border-teal-600 text-teal-800 font-medium hover:bg-teal-600 hover:text-white px-6 py-3 rounded-lg transition-all">
                Learn More
              </button>
            </div>
          </div>

          <div className="w-1/2 flex justify-center max-w-md drop-shadow-2xl">
            <img 
              src="/src/assets/banner-stack.png" 
              alt="Development Stack" 
              className="rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;