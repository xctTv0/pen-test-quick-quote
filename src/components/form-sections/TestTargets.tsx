import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

interface TestTargetsProps {
  targets: {
    application: boolean;
    webPage: boolean;
    network: boolean;
    wireless: boolean;
    infrastructure: boolean;
    other: boolean;
  };
  otherTarget?: string;
  onTargetChange: (target: string) => void;
  onOtherTargetChange?: (value: string) => void;
}

export const TestTargets = ({ 
  targets, 
  otherTarget = "", 
  onTargetChange,
  onOtherTargetChange 
}: TestTargetsProps) => {
  return (
    <div className="space-y-2">
      <Label>Penetration Test Targets *</Label>
      <div className="grid grid-cols-2 gap-4 mt-2">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="application"
            checked={targets.application}
            onCheckedChange={() => onTargetChange("application")}
          />
          <label htmlFor="application" className="text-sm">Application</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="webPage"
            checked={targets.webPage}
            onCheckedChange={() => onTargetChange("webPage")}
          />
          <label htmlFor="webPage" className="text-sm">Web Page</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="network"
            checked={targets.network}
            onCheckedChange={() => onTargetChange("network")}
          />
          <label htmlFor="network" className="text-sm">Network</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="wireless"
            checked={targets.wireless}
            onCheckedChange={() => onTargetChange("wireless")}
          />
          <label htmlFor="wireless" className="text-sm">Wireless</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="infrastructure"
            checked={targets.infrastructure}
            onCheckedChange={() => onTargetChange("infrastructure")}
          />
          <label htmlFor="infrastructure" className="text-sm">Infrastructure</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="other"
            checked={targets.other}
            onCheckedChange={() => onTargetChange("other")}
          />
          <label htmlFor="other" className="text-sm">Other</label>
        </div>
      </div>
      {targets.other && (
        <div className="mt-2">
          <Input
            placeholder="Please specify other target"
            value={otherTarget}
            onChange={(e) => onOtherTargetChange?.(e.target.value)}
            className="max-w-md"
          />
        </div>
      )}
    </div>
  );
};