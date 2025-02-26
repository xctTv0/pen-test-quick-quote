import { LeadForm } from "@/components/LeadForm";
import { TrustBadges } from "@/components/TrustBadges";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-center mb-8">
          <img
            src="/lovable-uploads/4d82b6be-b36b-452f-ba07-bd20936a717f.png"
            alt="Safetech Innovations Global Services"
            className="h-24 md:h-32 w-auto object-contain"
            onError={(e) => {
              console.error('Error loading logo:', e);
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        <div className="text-center space-y-4 mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-safetech-navy">
            Get Your Instant Penetration Testing Quote
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quick, hassle-free quotes for professional penetration testing services. Fill out our simple form and get your customized quote instantly from Safetech Innovations.
          </p>
          <p className="text-lg text-safetech-blue font-semibold mt-4">
            Fast quotes, professional service, competitive pricing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-safetech-navy mb-4">
                Why Choose Safetech's Quick Quote Service?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-safetech-blue mr-2">✓</span>
                  <span>Instant quote generation</span>
                </li>
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
                  <span>Best-in-class value for your security budget</span>
                </li>
              </ul>
            </div>
            <TrustBadges />
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-safetech-navy mb-6">
              Get Your Instant Quote Now
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