
import { ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-phish-navy text-phish-light py-8 mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="h-6 w-6 text-phish-blue" />
              <h3 className="text-xl font-bold">PhishGuard</h3>
            </div>
            <p className="text-gray-300">
              Your trusted partner in email security education and phishing prevention.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-phish-blue transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/phishing-simulator" className="hover:text-phish-blue transition-colors">
                  Phishing Simulator
                </a>
              </li>
              <li>
                <a href="/email-analyzer" className="hover:text-phish-blue transition-colors">
                  Email Analyzer
                </a>
              </li>
              <li>
                <a href="/resources" className="hover:text-phish-blue transition-colors">
                  Security Resources
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Stay Updated</h4>
            <p className="mb-4">Get the latest security tips and updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 rounded-l-md focus:outline-none text-gray-800 w-full"
              />
              <button className="bg-phish-blue hover:bg-blue-600 px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} PhishGuard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
