
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Info, AlertTriangle, Shield, CheckCircle } from "lucide-react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Resources = () => {
  const [activeTab, setActiveTab] = useState("guides");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Security Resources</h1>
            <p className="text-lg text-gray-600">
              Expand your knowledge about phishing attacks and online security
            </p>
          </div>
          
          <Tabs defaultValue="guides" className="mb-12" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-6">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="guides">Guides</TabsTrigger>
                <TabsTrigger value="tips">Quick Tips</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="guides">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-phish-blue" />
                      Common Types of Phishing Attacks
                    </CardTitle>
                    <CardDescription>Learn to identify different phishing methods</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-1">Email Phishing</h3>
                        <p className="text-sm text-gray-600">
                          The most common form where attackers send fraudulent emails impersonating trusted entities to trick recipients into revealing sensitive information or installing malware.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-1">Spear Phishing</h3>
                        <p className="text-sm text-gray-600">
                          Targeted attacks against specific individuals or organizations, typically using personalized information to appear more legitimate and convincing.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-1">Clone Phishing</h3>
                        <p className="text-sm text-gray-600">
                          Attackers create nearly identical copies of legitimate messages but replace links or attachments with malicious ones.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-1">Whaling</h3>
                        <p className="text-sm text-gray-600">
                          Targeted phishing attempts aimed at senior executives and other high-profile targets within organizations.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-1">Smishing & Vishing</h3>
                        <p className="text-sm text-gray-600">
                          Phishing conducted via SMS text messages (smishing) or voice calls (vishing) instead of email.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-phish-blue" />
                      How to Spot Phishing Red Flags
                    </CardTitle>
                    <CardDescription>Key warning signs of fraudulent messages</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-red-600 text-sm font-medium">1</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Suspicious Sender Address</h3>
                          <p className="text-sm text-gray-600">
                            Check the email address carefully, not just the display name. Look for misspellings or additional characters in the domain (e.g., amazom.com vs amazon.com).
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-red-600 text-sm font-medium">2</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Poor Grammar and Spelling</h3>
                          <p className="text-sm text-gray-600">
                            Legitimate companies typically proofread communications. Phishing emails often contain obvious spelling or grammatical errors.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-red-600 text-sm font-medium">3</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Urgent or Threatening Language</h3>
                          <p className="text-sm text-gray-600">
                            Phishing attempts often create a sense of urgency or fear to prompt immediate action without careful consideration.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-red-600 text-sm font-medium">4</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Suspicious Links and Attachments</h3>
                          <p className="text-sm text-gray-600">
                            Hover over links to see the actual URL destination. Be cautious of unexpected attachments or shortened URLs.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-red-600 text-sm font-medium">5</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Requests for Sensitive Information</h3>
                          <p className="text-sm text-gray-600">
                            Legitimate organizations rarely ask for passwords, credit card details, or other sensitive information via email.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-phish-blue" />
                      Steps to Take After a Phishing Encounter
                    </CardTitle>
                    <CardDescription>What to do if you suspect you've been phished</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3 list-decimal pl-5">
                      <li>
                        <span className="font-medium">Don't panic, but act quickly</span>
                        <p className="text-sm text-gray-600 mt-1">
                          If you've clicked a link or shared information, time is critical but panicking can lead to mistakes.
                        </p>
                      </li>
                      <li>
                        <span className="font-medium">Change compromised passwords immediately</span>
                        <p className="text-sm text-gray-600 mt-1">
                          Update passwords on any accounts that may have been compromised, starting with your email and financial accounts.
                        </p>
                      </li>
                      <li>
                        <span className="font-medium">Contact your financial institutions</span>
                        <p className="text-sm text-gray-600 mt-1">
                          If financial information was compromised, contact your bank, credit card companies, and other financial institutions.
                        </p>
                      </li>
                      <li>
                        <span className="font-medium">Enable two-factor authentication</span>
                        <p className="text-sm text-gray-600 mt-1">
                          Add this extra layer of security to prevent unauthorized access even if passwords are compromised.
                        </p>
                      </li>
                      <li>
                        <span className="font-medium">Report the phishing attempt</span>
                        <p className="text-sm text-gray-600 mt-1">
                          Forward phishing emails to the impersonated organization and to reportphishing@apwg.org or the FTC at reportfraud.ftc.gov.
                        </p>
                      </li>
                      <li>
                        <span className="font-medium">Scan your device for malware</span>
                        <p className="text-sm text-gray-600 mt-1">
                          Run a comprehensive malware scan to identify and remove any malicious software.
                        </p>
                      </li>
                      <li>
                        <span className="font-medium">Monitor your accounts</span>
                        <p className="text-sm text-gray-600 mt-1">
                          Keep a close eye on your financial statements and credit reports for any suspicious activity.
                        </p>
                      </li>
                    </ol>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="tips">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="security-card">
                  <CardHeader>
                    <CardTitle>Strengthen Your Passwords</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-phish-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span>Use a unique password for each account</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-phish-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span>Create passwords with at least 12 characters</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-phish-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span>Mix uppercase, lowercase, numbers, and symbols</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-phish-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span>Use a reputable password manager</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="security-card">
                  <CardHeader>
                    <CardTitle>Secure Your Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-phish-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span>Enable two-factor authentication</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-phish-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span>Be cautious with attachments and links</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-phish-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span>Check sender email addresses carefully</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-phish-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span>Use email filtering and anti-spam tools</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="security-card">
                  <CardHeader>
                    <CardTitle>Safe Online Shopping</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-phish-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span>Only shop on secure websites (https://)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-phish-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span>Use credit cards for better fraud protection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-phish-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span>Verify site reviews and reputation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-phish-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span>Be wary of deals that seem too good to be true</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="security-card">
                  <CardHeader>
                    <CardTitle>Protect Your Devices</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-phish-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span>Keep software and operating systems updated</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-phish-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span>Use reputable antivirus and anti-malware software</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-phish-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span>Enable automatic updates for security patches</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-phish-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span>Use screen locks and device encryption</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="faq">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>Common questions about phishing and cybersecurity</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What exactly is phishing?</AccordionTrigger>
                      <AccordionContent>
                        Phishing is a cybercrime where attackers disguise themselves as trustworthy entities to trick victims into revealing sensitive information such as passwords, credit card numbers, or personal data. It typically occurs via fraudulent emails, websites, or messages that mimic legitimate organizations.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How can I tell if an email is a phishing attempt?</AccordionTrigger>
                      <AccordionContent>
                        Look for warning signs like unexpected emails, urgent language, generic greetings, spelling errors, suspicious sender addresses, strange links, and requests for sensitive information. When in doubt, verify the message by contacting the organization directly through official channels, not using contact information in the suspicious email.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger>What should I do if I clicked on a phishing link?</AccordionTrigger>
                      <AccordionContent>
                        First, disconnect from the internet to prevent further data transmission. Change passwords for any accounts that may have been compromised, starting with your email. Run a malware scan on your device. Monitor your accounts for suspicious activity, and report the phishing attempt to your IT department if it occurred at work.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Why do phishers target me specifically?</AccordionTrigger>
                      <AccordionContent>
                        Most phishing attempts are mass campaigns rather than targeting you personally. Attackers send thousands or millions of messages hoping that a small percentage of recipients will fall for the scam. However, more sophisticated spear-phishing attacks may target specific individuals or organizations based on their position, access to valuable information, or potential financial gain.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-5">
                      <AccordionTrigger>Can phishing attacks affect my mobile phone?</AccordionTrigger>
                      <AccordionContent>
                        Yes, mobile phones are increasingly targeted through SMS phishing (smishing) and malicious apps. Be cautious about clicking links in text messages, downloading apps from unofficial sources, and granting excessive permissions to applications. Keep your phone's operating system and apps updated to protect against security vulnerabilities.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-6">
                      <AccordionTrigger>How effective is two-factor authentication against phishing?</AccordionTrigger>
                      <AccordionContent>
                        Two-factor authentication (2FA) significantly reduces the risk of account compromise, even if attackers obtain your password. While not foolproof, it adds an important layer of security by requiring something you know (password) and something you have (authentication code). The most secure forms are app-based authenticators and physical security keys, rather than SMS-based codes.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-7">
                      <AccordionTrigger>Where can I report phishing attempts?</AccordionTrigger>
                      <AccordionContent>
                        You can forward phishing emails to the organization being impersonated, your email provider, and to reportphishing@apwg.org. For financial scams in the US, report to the FTC at reportfraud.ftc.gov. If you've experienced financial loss, contact your financial institution immediately and consider filing a report with local law enforcement.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
