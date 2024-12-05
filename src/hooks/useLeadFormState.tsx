import { useState } from "react";

export const useLeadFormState = () => {
  const [formData, setFormData] = useState({
    email: "",
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
    otherTarget: "",
    projectDescription: "",
    testType: "black",
    ipAddressCount: "",
    totalRoles: "",
    rolesToTest: "",
    appCount: "",
    webAppCount: "",
    webAppUrls: "",
    technologies: "",
    focusAreas: "",
  });

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
    setFormData({ 
      ...formData, 
      testType: value,
      // Reset role-related fields when switching to black box testing
      ...(value === "black" && { totalRoles: "", rolesToTest: "" })
    });
  };

  const handleOtherTargetChange = (value: string) => {
    setFormData({ ...formData, otherTarget: value });
  };

  const resetForm = () => {
    setFormData({
      email: "",
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
      otherTarget: "",
      projectDescription: "",
      testType: "black",
      ipAddressCount: "",
      totalRoles: "",
      rolesToTest: "",
      appCount: "",
      webAppCount: "",
      webAppUrls: "",
      technologies: "",
      focusAreas: "",
    });
  };

  return {
    formData,
    handleChange,
    handleCheckboxChange,
    handleTestTypeChange,
    handleOtherTargetChange,
    resetForm,
  };
};