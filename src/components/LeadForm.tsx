import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { AuthSection } from "./form-sections/AuthSection";
import { TestTargets } from "./form-sections/TestTargets";
import { TestDetails } from "./form-sections/TestDetails";
import { ApplicationDetails } from "./form-sections/ApplicationDetails";
import { SecurityFocusSection } from "./form-sections/SecurityFocusSection";

export const LeadForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    company: "",
    phone: "",
    targets: {
      application: false,
      webPage: false,
      network: false,
      wireless: false,
      infrastructure: false,
      other: false,
    },
    projectDescription: "",
    testType: "black",
    ipAddressCount: "",
    appCount: "",
    webAppCount: "",
    webAppUrls: "",
    technologies: "",
    focusAreas: "",
    ddosRequired: "no",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Thank you! We'll get back to you within 24 hours.");
    setFormData({
      email: "",
      password: "",
      company: "",
      phone: "",
      targets: {
        application: false,
        webPage: false,
        network: false,
        wireless: false,
        infrastructure: false,
        other: false,
      },
      projectDescription: "",
      testType: "black",
      ipAddressCount: "",
      appCount: "",
      webAppCount: "",
      webAppUrls: "",
      technologies: "",
      focusAreas: "",
      ddosRequired: "no",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (target: string) => {
    setFormData({
      ...formData,
      targets: {
        ...formData.targets,
        [target]: !formData.targets[target as keyof typeof formData.targets],
      },
    });
  };

  const handleTestTypeChange = (value: string) => {
    setFormData({ ...formData, testType: value });
  };

  const handleDdosChange = (value: string) => {
    setFormData({ ...formData, ddosRequired: value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
      <div className="space-y-6">
        <AuthSection
          email={formData.email}
          password={formData.password}
          company={formData.company}
          phone={formData.phone}
          onChange={handleChange}
        />

        <TestTargets
          targets={formData.targets}
          onTargetChange={handleCheckboxChange}
        />

        <TestDetails
          testType={formData.testType}
          ipAddressCount={formData.ipAddressCount}
          projectDescription={formData.projectDescription}
          onTestTypeChange={handleTestTypeChange}
          onChange={handleChange}
        />

        <ApplicationDetails
          appCount={formData.appCount}
          webAppCount={formData.webAppCount}
          webAppUrls={formData.webAppUrls}
          technologies={formData.technologies}
          onChange={handleChange}
        />

        <SecurityFocusSection
          focusAreas={formData.focusAreas}
          ddosRequired={formData.ddosRequired}
          onChange={handleChange}
          onDdosChange={handleDdosChange}
        />
      </div>

      <Button type="submit" className="w-full bg-safetech-blue hover:bg-safetech-navy transition-colors">
        Sign In & Get Your Quotation
      </Button>
    </form>
  );
};