import { toast } from "sonner";
import { AuthSection } from "./form-sections/AuthSection";
import { TestTargets } from "./form-sections/TestTargets";
import { TestDetails } from "./form-sections/TestDetails";
import { ApplicationDetails } from "./form-sections/ApplicationDetails";
import { SecurityFocusSection } from "./form-sections/SecurityFocusSection";
import { SubmitButton } from "./form-sections/SubmitButton";
import { useLeadFormState } from "@/hooks/useLeadFormState";

export const LeadForm = () => {
  const {
    formData,
    handleChange,
    handleCheckboxChange,
    handleTestTypeChange,
    handleDdosChange,
    resetForm,
  } = useLeadFormState();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Create email content
      const emailContent = {
        to: ["astancu@safetechinnovations.com", "jkay@safetechinnovations.com"],
        subject: "New Penetration Testing Quote Request",
        formData: formData
      };

      // Send to your email handling service
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e2550906-ceef-41b6-bc44-fb048afd966a",
          subject: "New Penetration Testing Quote Request",
          from_name: formData.company,
          recipients: ["astancu@safetechinnovations.com", "jkay@safetechinnovations.com"],
          message: JSON.stringify(formData, null, 2),
        }),
      });

      if (response.ok) {
        toast.success("Thank you! We'll get back to you within 24 hours.");
        resetForm();
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting your request. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
      <div className="space-y-6">
        <AuthSection
          email={formData.email}
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

      <SubmitButton />
    </form>
  );
};