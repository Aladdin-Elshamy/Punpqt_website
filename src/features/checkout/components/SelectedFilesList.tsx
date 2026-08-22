import { Button } from "@/components/ui/button";
import { Paperclip, Trash2 } from "lucide-react";

interface SelectedFilesListProps {
  fileNames: string[];
  onRemove: (index: number) => void;
}

export default function SelectedFilesList({
  fileNames,
  onRemove,
}: SelectedFilesListProps) {
  if (fileNames.length === 0) {
    return null;
  }

  return (
    <ul className="mt-3 grid gap-2">
      {fileNames.map((fileName, index) => (
        <li
          key={`${fileName}-${index}`}
          className="flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2"
        >
          <Paperclip className="size-3.5 shrink-0 text-primary" />
          <p className="flex-1 max-w-45 sm:max-w-96 truncate text-xs font-medium text-foreground">
            {fileName}
          </p>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={() => onRemove(index)}
            aria-label={`Remove ${fileName}`}
            className="ms-auto size-6 text-muted-foreground hover:text-destructive"
          >
            <Trash2 className="size-3.5" />
          </Button>
        </li>
      ))}
    </ul>
  );
}