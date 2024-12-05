import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

interface TestDetailsProps {
  testType: string;
  ipAddressCount: string;
  projectDescription: string;
  onTestTypeChange: (value: string) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const TestDetails = ({ 
  testType, 
  ipAddressCount, 
  projectDescription, 
  onTestTypeChange, 
  onChange 
}: TestDetailsProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Testing Type *</Label>
        <RadioGroup value={testType} onValueChange={onTestTypeChange} className="grid grid-cols-3 gap-4 mt-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="black" id="black" />
            <label htmlFor="black" className="text-sm">Black Box</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="white" id="white" />
            <label htmlFor="white" className="text-sm">White Box</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="grey" id="grey" />
            <label htmlFor="grey" className="text-sm">Grey Box</label>
          </div>
        </RadioGroup>
      </div>

      {(testType === "white" || testType === "grey") && (
        <div className="space-y-4 animate-fadeIn">
          <div className="space-y-2">
            <Label htmlFor="totalRoles">Total Number of Application Roles *</Label>
            <Input
              id="totalRoles"
              name="totalRoles"
              type="number"
              required
              min="1"
              onChange={onChange}
              placeholder="e.g., 5"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rolesToTest">Number of Roles to be Tested *</Label>
            <Input
              id="rolesToTest"
              name="rolesToTest"
              type="number"
              required
              min="1"
              onChange={onChange}
              placeholder="e.g., 3"
            />
          </div>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="ipAddressCount">Number of IP Addresses in Scope *</Label>
        <Input
          id="ipAddressCount"
          name="ipAddressCount"
          type="number"
          required
          min="1"
          value={ipAddressCount}
          onChange={onChange}
          placeholder="e.g., 5"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectDescription">Project Description</Label>
        <Textarea
          id="projectDescription"
          name="projectDescription"
          value={projectDescription}
          onChange={onChange}
          placeholder="Describe your project, its functionalities, how it was developed and who will benefit from it..."
          className="min-h-[100px]"
        />
      </div>
    </div>
  );
};