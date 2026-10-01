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
            <ul className="flex gap-4 text-xs font-semibold">
              <li className="cursor-pointer">GitHub</li>
              <li className="cursor-pointer">Twitter</li>
              <li className="cursor-pointer">LinkedIn</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase mb-3">PRODUCT</h4>
            <ul className="space-y-1 text-slate-600 text-xs">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Technologies</li>
              <li className="cursor-pointer">Projects</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase mb-3">COMPANY</h4>
            <ul className="space-y-1 text-slate-600 text-xs">
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li>
              <li className="cursor-pointer">Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase mb-3">LEGAL</h4>
            <ul className="space-y-1 text-slate-600 text-xs">
              <li className="cursor-pointer">Privacy Policy</li>
              <li className="cursor-pointer">Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-4 flex justify-between text-xs text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <ul className="flex gap-4">
            <li className="cursor-pointer">Privacy</li>
            <li className="cursor-pointer">Terms</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;