
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm py-4 sticky top-0 z-10 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-8 w-8 text-phish-blue animate-shield-pulse" />
          <Link to="/" className="text-2xl font-bold phish-gradient-text">
            PhishGuard
          </Link>
        </div>
        <nav>
          <ul className="flex gap-6 items-center">
            <li>
              <Link to="/" className="font-medium hover:text-phish-blue transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/phishing-simulator" className="font-medium hover:text-phish-blue transition-colors">
                Simulation
              </Link>
            </li>
            <li>
              <Link to="/email-analyzer" className="font-medium hover:text-phish-blue transition-colors">
                Analyzer
              </Link>
            </li>
            <li>
              <Link to="/resources" className="font-medium hover:text-phish-blue transition-colors">
                Resources
              </Link>
            </li>
            <li>
              <Button variant="default" asChild>
                <Link to="/phishing-simulator">Test Your Skills</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
