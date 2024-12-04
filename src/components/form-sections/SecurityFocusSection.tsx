import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface SecurityFocusSectionProps {
  focusAreas: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const SecurityFocusSection = ({
  focusAreas,
  onChange,
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
    </div>
  );
};