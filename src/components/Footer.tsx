import { Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from 'figma:asset/9bb62c518e31aa9f806ab4341886470dd2d122c6.png';

export function Footer() {
  const links = {
    Product: [
      { name: "Features", href: "/#features" },
      { name: "How It Works", href: "/#how-it-works" }
    ],
    Company: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" }
    ],
    Resources: [
      { name: "Blog", href: "/blog" },
      { name: "Podcast", href: "/podcast" },
      { name: "Links", href: "/resources?tab=links" }
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Data Security", href: "/security" }
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-slate-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/">
              <img src={logoImage} alt="NibbleIQ" className="h-10 mb-6 hover:opacity-80 transition-opacity cursor-pointer" />
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm">
              A unified restaurant intelligence platform that delivers real-time analytics and intelligent automation for better operational decisions.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/company/nibbleiq" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 rounded-lg flex items-center justify-center transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/NibbleIQ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 rounded-lg flex items-center justify-center transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:hello@nibbleiq.com" className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 rounded-lg flex items-center justify-center transition-all">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-slate-400 hover:text-[#3D5AFE] transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>&copy; 2025 NibbleIQ. All rights reserved.</p>
          <p>Made with care for hospitality operators everywhere.</p>
        </div>
      </div>
    </footer>
  );
}