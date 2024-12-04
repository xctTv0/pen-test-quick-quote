import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface SecurityFocusSectionProps {
  focusAreas: string;
  ddosRequired: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onDdosChange: (value: string) => void;
}

export const SecurityFocusSection = ({
  focusAreas,
  ddosRequired,
  onChange,
  onDdosChange,
}: SecurityFocusSectionProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="focusAreas">Areas Requiring Special Attention</Label>
        <Textarea
          id="focusAreas"
          name="focusAreas"
          value={focusAreas}
          onChange={onChange}
          placeholder="Please specify any particular areas, components, or functionalities that require special attention during the penetration test..."
          className="min-h-[100px]"
        />
      </div>

      <div className="space-y-2">
        <Label>Do you want us to perform DOS or DDOS attacks? *</Label>
        <RadioGroup value={ddosRequired} onValueChange={onDdosChange} className="grid grid-cols-2 gap-4 mt-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="ddos-yes" />
            <label htmlFor="ddos-yes" className="text-sm">Yes</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="ddos-no" />
            <label htmlFor="ddos-no" className="text-sm">No</label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};