import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-8 text-black text-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-2">
              <span className="bg-pink-500 text-white px-2 py-0.5 rounded text-xs">DS</span>
              <span>Dev <span className="text-pink-500">Stack</span></span>
            </div>
            <p className="text-slate-500 text-xs max-w-xs mb-4">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-4 text-xs font-semibold">
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase mb-3">PRODUCT</h4>
            <ul className="space-y-1 text-slate-600 text-xs">
              <li><a href="#">Home</a></li>
              <li><a href="#">Technologies</a></li>
              <li><a href="#">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase mb-3">COMPANY</h4>
            <ul className="space-y-1 text-slate-600 text-xs">
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase mb-3">LEGAL</h4>
            <ul className="space-y-1 text-slate-600 text-xs">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-4 flex justify-between text-xs text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;