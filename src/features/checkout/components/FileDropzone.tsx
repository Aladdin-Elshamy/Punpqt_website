import { Upload } from "lucide-react";
import { useId } from "react";

interface FileDropzoneProps {
  onFilesSelected: (files: FileList | null) => void;
}

export default function FileDropzone({ onFilesSelected }: FileDropzoneProps) {
  const inputId = useId();

  return (
    <>
      <input
        id={inputId}
        type="file"
        accept=".pdf,.ai,.eps,.psd,.png,.jpg,.jpeg,.tiff"
        multiple
        className="sr-only"
        onChange={(event) => {
          onFilesSelected(event.target.files);
          event.target.value = "";
        }}
      />

      <label
        htmlFor={inputId}
        className="flex min-h-32 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-[#FAFAFA] px-4 text-center transition-colors hover:border-primary/60 hover:bg-primary/5"
      >
        <span className="flex size-9 items-center justify-center rounded-xl! bg-primary/10">
          <Upload className="size-4 text-primary" />
        </span>
        <span className="mt-3 text-xs font-semibold text-foreground">
          Drop files here or <span className="text-primary">browse</span>
        </span>
        <span className="mt-2 text-[10px] font-semibold text-muted-foreground">
          PDF, AI, EPS, PSD, PNG, JPG, TIFF · 300 DPI minimum · CMYK preferred
        </span>
      </label>
    </>
  );
}