
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, Check, Info, MessageSquareWarning, Shield } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

interface AnalysisResult {
  riskScore: number;  // 0-100
  riskLevel: 'low' | 'medium' | 'high';
  redFlags: {
    type: string;
    description: string;
    severity: 'low' | 'medium' | 'high';
  }[];
  recommendations: string[];
}

const EmailAnalyzer = () => {
  const [emailContent, setEmailContent] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const { toast } = useToast();

  const analyzeEmail = () => {
    if (!emailContent.trim()) {
      toast({
        title: "Empty Content",
        description: "Please paste an email to analyze",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate analysis with a short delay
    setTimeout(() => {
      const result = performEmailAnalysis(emailContent);
      setAnalysisResult(result);
      setIsAnalyzing(false);
    }, 1500);
  };

  const performEmailAnalysis = (content: string): AnalysisResult => {
    // This is a simplified demo analysis - in a real app this would be more sophisticated
    const contentLower = content.toLowerCase();
    const redFlags = [];
    let riskScore = 0;
    
    // Check for urgency language
    if (/urgent|immediately|alert|warning|limited time|act now|expires|deadline|asap/i.test(contentLower)) {
      redFlags.push({
        type: "Urgency",
        description: "Contains urgent language designed to pressure you into acting quickly without thinking",
        severity: "high"
      });
      riskScore += 25;
    }
    
    // Check for suspicious links
    if (/click here|verify your account|login to view|sign in to continue/i.test(contentLower)) {
      redFlags.push({
        type: "Suspicious Links",
        description: "Contains text commonly used in phishing links that prompt immediate action",
        severity: "high"
      });
      riskScore += 30;
    }
    
    // Check for requests for personal information
    if (/password|credit card|social security|ssn|bank account|verify your details/i.test(contentLower)) {
      redFlags.push({
        type: "Information Request",
        description: "Requests sensitive personal or financial information",
        severity: "high"
      });
      riskScore += 35;
    }
    
    // Check for spelling/grammar mistakes (simplified check)
    if (/recieved|verrify|acount|graet opportunity|valuble customer/i.test(contentLower)) {
      redFlags.push({
        type: "Grammar/Spelling",
        description: "Contains spelling mistakes or poor grammar, common in phishing emails",
        severity: "medium"
      });
      riskScore += 15;
    }
    
    // Check for spoofed domains
    if (/paypa1\.com|amaz0n\.|g00gle\.|micros0ft\.|apple-id\.confirm/i.test(contentLower)) {
      redFlags.push({
        type: "Spoofed Domain",
        description: "Contains domain names that imitate legitimate companies but with subtle differences",
        severity: "high"
      });
      riskScore += 35;
    }
    
    // Check for generic greetings
    if (/dear customer|dear user|valued customer|account holder/i.test(contentLower)) {
      redFlags.push({
        type: "Generic Greeting",
        description: "Uses generic greeting instead of your name, suggesting mass-targeting",
        severity: "low"
      });
      riskScore += 10;
    }

    // Cap the risk score at 100
    riskScore = Math.min(riskScore, 100);
    
    // Determine risk level
    let riskLevel: 'low' | 'medium' | 'high';
    if (riskScore >= 60) {
      riskLevel = 'high';
    } else if (riskScore >= 30) {
      riskLevel = 'medium';
    } else {
      riskLevel = 'low';
    }
    
    // Generate recommendations
    const recommendations = [
      "Always verify the sender's email address carefully",
      "Never click on suspicious links - hover over them to see the real URL",
      "Don't provide personal or financial information via email",
      "Contact companies directly through official channels if you're unsure",
      "Enable two-factor authentication on your accounts when possible"
    ];
    
    return {
      riskScore,
      riskLevel,
      redFlags,
      recommendations
    };
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-amber-500';
      case 'low': return 'text-green-600';
      default: return 'text-blue-600';
    }
  };

  const getRiskProgressColor = (score: number) => {
    if (score >= 60) return 'bg-red-500';
    if (score >= 30) return 'bg-amber-500';
    return 'bg-green-500';
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high': 
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'medium':
        return <MessageSquareWarning className="h-5 w-5 text-amber-500" />;
      case 'low':
        return <Info className="h-5 w-5 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Email Analyzer</h1>
            <p className="text-lg text-gray-600">
              Paste a suspicious email to check for phishing indicators
            </p>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Analyze Your Email</CardTitle>
              <CardDescription>
                Paste the full email content including sender, subject, and body
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Paste email content here..."
                value={emailContent}
                onChange={(e) => setEmailContent(e.target.value)}
                className="min-h-[200px] font-mono"
              />
            </CardContent>
            <CardFooter>
              <Button 
                onClick={analyzeEmail} 
                disabled={isAnalyzing || !emailContent.trim()}
                className="w-full"
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze Email'}
              </Button>
            </CardFooter>
          </Card>
          
          {isAnalyzing && (
            <div className="text-center py-8">
              <Shield className="h-12 w-12 text-phish-blue mx-auto animate-pulse mb-4" />
              <p className="text-lg mb-2">Analyzing email content...</p>
              <div className="max-w-md mx-auto">
                <Progress value={45} className="h-2" />
              </div>
            </div>
          )}
          
          {!isAnalyzing && analysisResult && (
            <Card>
              <CardHeader>
                <CardTitle>Analysis Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Risk Score */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Risk Level:</span>
                    <span className={`font-bold uppercase ${getRiskColor(analysisResult.riskLevel)}`}>
                      {analysisResult.riskLevel}
                    </span>
                  </div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>0</span>
                    <span>{analysisResult.riskScore}%</span>
                    <span>100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${getRiskProgressColor(analysisResult.riskScore)}`}
                      style={{ width: `${analysisResult.riskScore}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Red Flags */}
                {analysisResult.redFlags.length > 0 ? (
                  <div>
                    <h3 className="font-medium mb-3 text-lg">Detected Red Flags</h3>
                    <div className="space-y-3">
                      {analysisResult.redFlags.map((flag, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border">
                          {getSeverityIcon(flag.severity)}
                          <div>
                            <p className="font-medium">{flag.type}</p>
                            <p className="text-sm text-gray-600">{flag.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="p-4 bg-green-50 rounded-lg border border-green-100 flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <p>No obvious phishing indicators were detected, but always remain vigilant.</p>
                  </div>
                )}
                
                {/* Recommendations */}
                <div>
                  <h3 className="font-medium mb-3 text-lg">Safety Recommendations</h3>
                  <ul className="space-y-2">
                    {analysisResult.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-phish-blue flex-shrink-0"></div>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <Button variant="outline" onClick={() => setAnalysisResult(null)}>
                  Analyze Another Email
                </Button>
                <Button asChild>
                  <a href="/resources">Learn More About Phishing</a>
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmailAnalyzer;
