import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

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
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to your backend
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company Name</Label>
          <Input
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company Ltd"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div className="space-y-2">
          <Label>Penetration Test Targets *</Label>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="application"
                checked={formData.targets.application}
                onCheckedChange={() => handleCheckboxChange("application")}
              />
              <label htmlFor="application" className="text-sm">Application</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="webPage"
                checked={formData.targets.webPage}
                onCheckedChange={() => handleCheckboxChange("webPage")}
              />
              <label htmlFor="webPage" className="text-sm">Web Page</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="network"
                checked={formData.targets.network}
                onCheckedChange={() => handleCheckboxChange("network")}
              />
              <label htmlFor="network" className="text-sm">Network</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="wireless"
                checked={formData.targets.wireless}
                onCheckedChange={() => handleCheckboxChange("wireless")}
              />
              <label htmlFor="wireless" className="text-sm">Wireless</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="infrastructure"
                checked={formData.targets.infrastructure}
                onCheckedChange={() => handleCheckboxChange("infrastructure")}
              />
              <label htmlFor="infrastructure" className="text-sm">Infrastructure</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="other"
                checked={formData.targets.other}
                onCheckedChange={() => handleCheckboxChange("other")}
              />
              <label htmlFor="other" className="text-sm">Other</label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="projectDescription">Project Description</Label>
          <Textarea
            id="projectDescription"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            placeholder="Describe your project, its functionalities, how it was developed and who will benefit from it..."
            className="min-h-[100px]"
          />
        </div>
      </div>
      <Button type="submit" className="w-full bg-safetech-blue hover:bg-safetech-navy transition-colors">
        Sign In & Get Your Quotation
      </Button>
    </form>
  );
};