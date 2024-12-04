import { Shield, CheckCircle, Award, ShieldCheck } from "lucide-react";

export const TrustBadges = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-8 animate-fadeIn">
      <div className="flex flex-col items-center text-center space-y-2">
        <Shield className="w-12 h-12 text-safetech-blue" />
        <h3 className="font-semibold">CREST Certified</h3>
        <p className="text-sm text-gray-600">Our pen testers hold CREST certifications</p>
      </div>
      <div className="flex flex-col items-center text-center space-y-2">
        <ShieldCheck className="w-12 h-12 text-safetech-blue" />
        <h3 className="font-semibold">Certified Experts</h3>
        <p className="text-sm text-gray-600">Industry-leading penetration testing methodology</p>
      </div>
      <div className="flex flex-col items-center text-center space-y-2">
        <CheckCircle className="w-12 h-12 text-safetech-blue" />
        <h3 className="font-semibold">Comprehensive Reports</h3>
        <p className="text-sm text-gray-600">Detailed findings and remediation guidance</p>
      </div>
      <div className="flex flex-col items-center text-center space-y-2">
        <Award className="w-12 h-12 text-safetech-blue" />
        <h3 className="font-semibold">Fast Turnaround</h3>
        <p className="text-sm text-gray-600">Quote within 24 hours, flexible scheduling</p>
      </div>
    </div>
  );
};