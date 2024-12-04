import { LeadForm } from "@/components/LeadForm";
import { TrustBadges } from "@/components/TrustBadges";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-safetech-navy">
            Professional Penetration Testing Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Identify vulnerabilities before attackers do. Get a comprehensive security assessment from our certified experts.
          </p>
          <p className="text-lg text-safetech-blue font-semibold mt-4">
            Maximum security insights, exceptional value for your investment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-safetech-navy mb-4">
                Why Choose Our Pen Testing Service?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-safetech-blue mr-2">✓</span>
                  <span>Comprehensive vulnerability assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-safetech-blue mr-2">✓</span>
                  <span>Detailed reporting with actionable insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-safetech-blue mr-2">✓</span>
                  <span>Expert remediation guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-safetech-blue mr-2">✓</span>
                  <span>Quick turnaround time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-safetech-blue mr-2">✓</span>
                  <span>Best-in-class value for your security budget</span>
                </li>
              </ul>
            </div>
            <TrustBadges />
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-safetech-navy mb-6">
              Get Your Pen Testing Quote
            </h2>
            <LeadForm />
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <Button
            variant="outline"
            className="text-safetech-navy hover:text-safetech-blue"
            onClick={() => window.open('https://www.safetechinnovations.com/privacy-policy', '_blank')}
          >
            Privacy Policy
          </Button>
          <Button
            variant="outline"
            className="text-safetech-navy hover:text-safetech-blue"
            onClick={() => window.open('https://www.safetechinnovations.com/who-we-are', '_blank')}
          >
            About Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;