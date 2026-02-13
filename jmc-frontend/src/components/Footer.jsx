import { Play, Instagram, Facebook } from "lucide-react";

export default function Footer(){
  return (
    <footer className="bg-slate-900 text-slate-200 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-bold text-white mb-3">Jesus Manifestation Church</h4>
          <p className="text-sm">Address: P. O. Box 413-90200 Kitui</p>
          <p className="text-sm mt-2">Phone: +254 701 504 560</p>
          <p className="text-sm">Email: jmckitui@gmail.com</p>
        </div>

        <div>
          <h4 className="text-lg font-bold text-white mb-3">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li><a href="/give" className="hover:underline">Give Online</a></li>
            <li><a href="/live" className="hover:underline">Live Stream</a></li>
            <li><a href="/devotionals" className="hover:underline">Devotionals</a></li>
            <li><a href="/branches" className="hover:underline">Locate Branch</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-white mb-3">Connect</h4>
          <p className="text-sm">Follow us on social media for updates and live worship.</p>
          <div className="flex gap-3 mt-3">
            <a href="https://www.facebook.com/BishopElijahMutua" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-white/20 transition">
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a href="https://www.youtube.com/@JMCKITUI" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-white/20 transition">
              <Play className="w-5 h-5 text-white" />
            </a>
            <a href="https://www.instagram.com/jmc_kitui/" aria-label="Instagram" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-white/20 transition">
              <Instagram className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 mt-8 pt-6 text-center text-sm text-slate-400">
        © 2026 Jesus Manifestation Church. All rights reserved.
      </div>
    </footer>
  );
}
