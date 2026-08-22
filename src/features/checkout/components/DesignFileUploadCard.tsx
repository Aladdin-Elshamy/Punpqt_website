"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Paperclip, Trash2, Upload } from "lucide-react";
import { useId, useState } from "react";
import type { CheckoutProduct } from "./CheckoutOrderSummary";

interface DesignFileUploadCardProps {
  product: CheckoutProduct;
  specification: string;
  printer: string;
  onFileChange: (productId: string, filesCount: number) => void;
}

export default function DesignFileUploadCard({
  product,
  specification,
  printer,
  onFileChange,
}: DesignFileUploadCardProps) {
  const inputId = useId();
  const [filesName, setFilesName] = useState<string[] | null>(null);
  const [notes, setNotes] = useState("");

  const handleFileChange = (files: FileList | null) => {
    const file = files?.item(0);

    setFilesName((prev) => [...(prev ?? []), file?.name ?? ""]);
    onFileChange(product.id, product.filesCount + 1);
  };

  const removeFile = (index: number) => {
    setFilesName((prev) => prev?.filter((_, i) => i !== index) ?? []);
    onFileChange(product.id, product.filesCount - 1);
  };

  return (
    <Card className="gap-0 rounded-2xl border-border/80 py-0 shadow-none">
      <CardContent className="p-0">
        <CardHeader className="flex items-center gap-3 border-b border-border/80 p-4 bg-[#FAFAFA]">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <FileText className="size-5 text-primary" />
          </div>
          <div className="min-w-0 font-semibold">
            <h2 className="text-sm text-foreground">{product.title}</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              {specification} · {product.quantity} ·{" "}
              <span className="font-semibold text-primary">{printer}</span>
            </p>
          </div>
        </CardHeader>

        <div className="p-4">
          <input
            id={inputId}
            type="file"
            accept=".pdf,.ai,.eps,.psd,.png,.jpg,.jpeg,.tiff"
            className="sr-only"
            onChange={(event) => handleFileChange(event.target.files)}
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

          {filesName && (
            filesName.map((fileName, index) => (
              <div className="mt-3 flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2">
                <Paperclip className="size-3.5 shrink-0 text-primary" />
                <p className="min-w-0 flex-1 truncate text-xs font-medium text-foreground">
                  {fileName}
                </p>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => removeFile(index)}
                  aria-label={`Remove ${fileName}`}
                  className="size-6 text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="size-3.5" />
                </Button>
              </div>
            ))
          )}

          <label
            htmlFor={`${inputId}-notes`}
            className="mt-3 block text-xs font-semibold text-foreground"
          >
            Notes for printer{" "}
            <span className="text-muted-foreground">(optional)</span>
          </label>
          <Textarea
            id={`${inputId}-notes`}
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            placeholder="Bleed settings, special instructions, color references..."
            className="mt-2 min-h-20 resize-none rounded-xl bg-[#F4F4F6] text-sm shadow-none font-semibold"
          />
        </div>
      </CardContent>
    </Card>
  );
}