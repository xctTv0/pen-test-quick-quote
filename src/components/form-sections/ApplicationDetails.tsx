import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ApplicationDetailsProps {
  appCount: string;
  webAppCount: string;
  webAppUrls: string;
  technologies: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const ApplicationDetails = ({ appCount, webAppCount, webAppUrls, technologies, onChange }: ApplicationDetailsProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="appCount">Total Number of Applications *</Label>
        <Input
          id="appCount"
          name="appCount"
          type="number"
          required
          min="1"
          value={appCount}
          onChange={onChange}
          placeholder="e.g., 3"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="webAppCount">Number of Web-based Applications *</Label>
        <Input
          id="webAppCount"
          name="webAppCount"
          type="number"
          required
          min="0"
          value={webAppCount}
          onChange={onChange}
          placeholder="e.g., 2"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="webAppUrls">Web Application URLs</Label>
        <Textarea
          id="webAppUrls"
          name="webAppUrls"
          value={webAppUrls}
          onChange={onChange}
          placeholder="Please provide the URLs of your web applications (one per line)"
          className="min-h-[80px]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="technologies">Technologies and Architecture</Label>
        <Textarea
          id="technologies"
          name="technologies"
          value={technologies}
          onChange={onChange}
          placeholder="Please describe the technologies, programming languages, frameworks, and architecture used for each application..."
          className="min-h-[100px]"
        />
      </div>
    </div>
  );
};