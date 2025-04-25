
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

interface EmailScenario {
  id: number;
  subject: string;
  sender: string;
  content: string;
  isPhishing: boolean;
  redFlags?: string[];
  safeFeatures?: string[];
}

const phishingScenarios: EmailScenario[] = [
  {
    id: 1,
    subject: "Urgent: Your Account Has Been Suspended",
    sender: "security@bankofamerica-secure.com",
    content: `Dear Valued Customer,

We have detected unusual activity on your account and have temporarily suspended your online banking access. You must verify your information immediately to restore access.

CLICK HERE to verify your account details within 24 hours or your account will be permanently suspended.

Bank of America Customer Service`,
    isPhishing: true,
    redFlags: [
      "Urgent language creating pressure",
      "Suspicious sender domain (bankofamerica-secure.com instead of bankofamerica.com)",
      "Vague 'unusual activity' without specifics",
      "Threatening consequences",
      "Generic greeting instead of using your name"
    ]
  },
  {
    id: 2,
    subject: "Your Amazon Order #203-7654321-1234567",
    sender: "auto-confirm@amazon.com",
    content: `Hello,

Thank you for your order with Amazon.com.

Your order #203-7654321-1234567 has been confirmed. We'll send a confirmation when your item ships.

Order Details:
- Echo Dot (4th Gen) - $49.99
- Estimated delivery: May 15-16, 2025

If you have any questions, visit Your Orders on Amazon.com or contact Customer Service.

Thanks for shopping with us!
Amazon Customer Service`,
    isPhishing: false,
    safeFeatures: [
      "Legitimate Amazon domain",
      "No urgent call to action",
      "Specific order number and details",
      "No suspicious links",
      "No request for personal or payment information"
    ]
  },
  {
    id: 3,
    subject: "You've received a secure document",
    sender: "secure.docs@office365.notification.net",
    content: `You have received a secure document via Microsoft Office 365.

The document has been shared with you by: hr@yourcompany.com

Document: Salary_Review_2025.pdf (28KB)

The document is secured and requires verification.

Click here to securely sign in with your Office 365 account and access this document.

Microsoft Office 365 Security Team`,
    isPhishing: true,
    redFlags: [
      "Suspicious sender domain (not official Microsoft domain)",
      "Generic document with enticing name (salary review)",
      "Vague message without specific details",
      "Prompts user to click a suspicious link",
      "No personalization in the message"
    ]
  },
  {
    id: 4,
    subject: "Your LinkedIn password reset request",
    sender: "security-noreply@linkedin.com",
    content: `Hi there,

We received a request to reset the password for your LinkedIn account.

To reset your password, please click the button below:

[Reset Password]

This link will expire in 24 hours.

If you didn't request this password reset, you can safely ignore this email.

Thanks,
The LinkedIn Team`,
    isPhishing: false,
    safeFeatures: [
      "Legitimate LinkedIn domain",
      "Only sent after a password reset request",
      "No urgent language or threats",
      "Option to ignore if not requested",
      "No request for current password or personal information"
    ]
  },
  {
    id: 5,
    subject: "Congratulations! You've won a $1,000 gift card",
    sender: "rewards@amazonshopper-prizes.com",
    content: `CONGRATULATIONS!

You've been selected as one of our lucky winners of a $1,000 Amazon Gift Card!

Due to your loyal customer history, we've selected your email in our monthly draw.

To claim your prize, click below and complete a short 1-minute survey:

[CLAIM YOUR $1,000 GIFT CARD NOW]

Note: Prize must be claimed within 24 hours or it will be offered to another customer.

Thank you for choosing Amazon!`,
    isPhishing: true,
    redFlags: [
      "Suspicious sender domain (not amazon.com)",
      "Too-good-to-be-true offer",
      "Urgency to claim within 24 hours",
      "Request to complete a survey",
      "Poor grammar and excessive capitalization"
    ]
  }
];

const PhishingSimulator = () => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showingSummary, setShowingSummary] = useState(false);
  
  const currentScenario = phishingScenarios[currentScenarioIndex];
  const hasMoreScenarios = currentScenarioIndex < phishingScenarios.length - 1;

  const handleAnswer = (isPhishing: boolean) => {
    setSelectedAnswer(isPhishing);
    const isCorrect = isPhishing === currentScenario.isPhishing;
    setScore({
      correct: isCorrect ? score.correct + 1 : score.correct,
      total: score.total + 1
    });
  };

  const handleNext = () => {
    if (hasMoreScenarios) {
      setCurrentScenarioIndex(currentScenarioIndex + 1);
      setSelectedAnswer(null);
    } else {
      setShowingSummary(true);
    }
  };

  const restartSimulation = () => {
    setCurrentScenarioIndex(0);
    setSelectedAnswer(null);
    setScore({ correct: 0, total: 0 });
    setShowingSummary(false);
  };

  const renderFeedback = () => {
    if (selectedAnswer === null) return null;
    
    const isCorrect = selectedAnswer === currentScenario.isPhishing;
    
    return (
      <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
        <div className="flex items-center gap-2 mb-2">
          {isCorrect ? (
            <CheckCircle className="h-5 w-5 text-green-600" />
          ) : (
            <XCircle className="h-5 w-5 text-red-600" />
          )}
          <p className={`font-medium ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
            {isCorrect ? 'Correct!' : 'Incorrect!'}
          </p>
        </div>
        
        <p className="mb-3">
          This email {currentScenario.isPhishing ? 'is' : 'is not'} a phishing attempt.
        </p>
        
        {currentScenario.isPhishing ? (
          <>
            <p className="font-medium mb-2">Red Flags:</p>
            <ul className="list-disc pl-5 space-y-1">
              {currentScenario.redFlags?.map((flag, index) => (
                <li key={index}>{flag}</li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <p className="font-medium mb-2">Safe Features:</p>
            <ul className="list-disc pl-5 space-y-1">
              {currentScenario.safeFeatures?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </>
        )}
        
        <div className="mt-4">
          <Button onClick={handleNext}>
            {hasMoreScenarios ? 'Next Email' : 'See Results'} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  };

  const renderSummary = () => {
    const percentage = Math.round((score.correct / score.total) * 100);
    let message, tips;
    
    if (percentage >= 80) {
      message = "Great job! You have excellent phishing detection skills.";
      tips = [
        "Continue being vigilant about unexpected emails",
        "Always verify sender addresses and domains carefully",
        "Never click suspicious links, even when the email looks legitimate"
      ];
    } else if (percentage >= 60) {
      message = "Good work! You caught most phishing attempts, but there's room for improvement.";
      tips = [
        "Be extra cautious with emails containing urgent requests",
        "Hover over links before clicking to verify the destination",
        "When in doubt, contact the company directly using official contact information"
      ];
    } else {
      message = "You might need more practice identifying phishing emails.";
      tips = [
        "Be skeptical of emails requesting personal information",
        "Check for grammar and spelling errors, which are common in phishing emails",
        "Never download attachments from unexpected emails",
        "Contact the sender through official channels if you're unsure about an email"
      ];
    }
    
    return (
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Your Results</CardTitle>
          <CardDescription>
            You correctly identified {score.correct} out of {score.total} emails
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span>Accuracy</span>
              <span className="font-bold">{percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className={`h-2.5 rounded-full ${percentage >= 80 ? 'bg-green-600' : percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`} 
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
          
          <p className="mb-4 font-medium">{message}</p>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-medium mb-2">Key Safety Tips:</p>
            <ul className="list-disc pl-5 space-y-1">
              {tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={restartSimulation} variant="secondary">
            Try Again
          </Button>
          <Button asChild>
            <a href="/email-analyzer">Try Email Analyzer</a>
          </Button>
        </CardFooter>
      </Card>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {!showingSummary ? (
            <>
              <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold mb-2">Phishing Email Simulator</h1>
                <p className="text-lg text-gray-600">
                  Review each email and determine if it's a phishing attempt or legitimate.
                </p>
              </div>
              
              <Card>
                <CardHeader className="border-b">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">From: {currentScenario.sender}</p>
                      <p className="font-medium">Subject: {currentScenario.subject}</p>
                    </div>
                    <div className="text-sm text-gray-500">
                      {currentScenarioIndex + 1} of {phishingScenarios.length}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="whitespace-pre-wrap font-mono text-sm">
                    {currentScenario.content}
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-stretch border-t">
                  <div className="py-4 text-center">
                    <p className="font-medium mb-3">Is this a phishing email?</p>
                    <div className="flex gap-4 justify-center">
                      {selectedAnswer === null ? (
                        <>
                          <Button 
                            onClick={() => handleAnswer(true)}
                            variant="outline" 
                            className="border-red-500 text-red-500 hover:bg-red-50"
                          >
                            <AlertTriangle className="mr-2 h-4 w-4" /> Yes, it's phishing
                          </Button>
                          <Button 
                            onClick={() => handleAnswer(false)}
                            variant="outline" 
                            className="border-green-500 text-green-500 hover:bg-green-50"
                          >
                            <CheckCircle className="mr-2 h-4 w-4" /> No, it's legitimate
                          </Button>
                        </>
                      ) : null}
                    </div>
                  </div>
                  {renderFeedback()}
                </CardFooter>
              </Card>
            </>
          ) : renderSummary()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PhishingSimulator;
