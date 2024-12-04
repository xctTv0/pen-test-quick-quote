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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Thank you! We'll get back to you within 24 hours.");
    resetForm();
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