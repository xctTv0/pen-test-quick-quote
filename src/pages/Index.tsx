
import { LeadForm } from "@/components/LeadForm";
import { TrustBadges } from "@/components/TrustBadges";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <img
            src="/lovable-uploads/4d82b6be-b36b-452f-ba07-bd20936a717f.png"
            alt="Safetech Innovations Global Services"
            className="h-20 md:h-28 w-auto object-contain"
            onError={(e) => {
              console.error('Error loading logo:', e);
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="flex items-center">
            <Separator orientation="vertical" className="h-12 mx-4 hidden md:block" />
            <span className="text-gray-500 mx-2 md:hidden">×</span>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-safetech-navy">in partnership with</span>
              <img
                src="/lovable-uploads/03e39637-2dce-4dde-b9d6-58b358854a84.png"
                alt="Cibernetica.io"
                className="h-16 md:h-20 w-auto object-contain"
                onError={(e) => {
                  console.error('Error loading Cibernetica logo:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
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
