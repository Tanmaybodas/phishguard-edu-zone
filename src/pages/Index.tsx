
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Info, AlertTriangle, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-phish-navy to-blue-900 text-white py-20">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Stay <span className="text-phish-blue">Protected</span> from Phishing Attacks
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200 animate-fade-in">
              Learn to identify and avoid phishing attempts with PhishGuard's interactive tools and resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" asChild className="bg-phish-blue hover:bg-blue-600">
                <Link to="/phishing-simulator">Try Phishing Simulator</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-white border-white hover:bg-white/10">
                <Link to="/email-analyzer">Analyze Suspicious Email</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How PhishGuard <span className="phish-gradient-text">Protects You</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="security-card">
              <CardHeader className="flex flex-row items-center gap-3">
                <ShieldCheck className="h-8 w-8 text-phish-blue" />
                <div>
                  <CardTitle>Interactive Simulator</CardTitle>
                  <CardDescription>Test your phishing detection skills</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Practice identifying phishing attempts with our realistic simulation tool. Challenge yourself with various scam types and learn from immediate feedback.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to="/phishing-simulator">Start Simulation</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="security-card">
              <CardHeader className="flex flex-row items-center gap-3">
                <Mail className="h-8 w-8 text-phish-blue" />
                <div>
                  <CardTitle>Email Analyzer</CardTitle>
                  <CardDescription>Check suspicious messages</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Paste any suspicious email and our analyzer will scan for common phishing indicators, providing a risk assessment and personalized safety recommendations.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to="/email-analyzer">Analyze Email</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="security-card">
              <CardHeader className="flex flex-row items-center gap-3">
                <Info className="h-8 w-8 text-phish-blue" />
                <div>
                  <CardTitle>Security Resources</CardTitle>
                  <CardDescription>Expand your knowledge</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Access our comprehensive library of cybersecurity resources, including guides, articles, and best practices to keep you protected online.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to="/resources">View Resources</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Phishing <span className="phish-gradient-text">By The Numbers</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-4xl font-bold text-phish-blue mb-2">83%</p>
                <p className="text-gray-600">of organizations experienced phishing attacks in 2023</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-4xl font-bold text-phish-blue mb-2">$4.91M</p>
                <p className="text-gray-600">average cost of a data breach</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-4xl font-bold text-phish-blue mb-2">30%</p>
                <p className="text-gray-600">of phishing emails are opened by targets</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-4xl font-bold text-phish-blue mb-2">76%</p>
                <p className="text-gray-600">reduction in risk with security training</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to strengthen your security awareness?</h2>
            <p className="text-xl mb-8">Take the first step towards better protection with PhishGuard's interactive tools.</p>
            <Button size="lg" asChild>
              <Link to="/phishing-simulator">Get Started Now</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
