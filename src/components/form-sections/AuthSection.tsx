import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface AuthSectionProps {
  email: string;
  company: string;
  phone: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AuthSection = ({ email, company, phone, onChange }: AuthSectionProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={onChange}
          placeholder="john@company.com"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Company Name</Label>
        <Input
          id="company"
          name="company"
          required
          value={company}
          onChange={onChange}
          placeholder="Your Company Ltd"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={phone}
          onChange={onChange}
          placeholder="+1 (555) 000-0000"
        />
      </div>
    </div>
  );
};