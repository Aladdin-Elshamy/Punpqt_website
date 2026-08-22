"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import type { CheckoutProduct } from "../checkout.types";
import FileDropzone from "./FileDropzone";
import PrinterNotesField from "./PrinterNotesField";
import SelectedFilesList from "./SelectedFilesList";
import UploadProductHeader from "./UploadProductHeader";

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
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [notes, setNotes] = useState("");

  const handleFilesSelected = (files: FileList | null) => {
    if (!files?.length) {
      return;
    }

    const newFileNames = Array.from(files, (file) => file.name);

    setFileNames((currentFileNames) => {
      const updatedFileNames = [...currentFileNames, ...newFileNames];

      onFileChange(product.id, updatedFileNames.length);
      return updatedFileNames;
    });
  };

  const handleFileRemove = (fileIndex: number) => {
    setFileNames((currentFileNames) => {
      const updatedFileNames = currentFileNames.filter(
        (_, index) => index !== fileIndex,
      );

      onFileChange(product.id, updatedFileNames.length);
      return updatedFileNames;
    });
  };

  return (
    <Card className="gap-0 rounded-2xl border-border/80 py-0 shadow-none">
      <CardContent className="p-0">
        <UploadProductHeader
          title={product.title}
          quantity={product.quantity}
          specification={specification}
          printer={printer}
          filesCount={fileNames.length}
        />

        <div className="p-4">
          <FileDropzone onFilesSelected={handleFilesSelected} />
          <SelectedFilesList
            fileNames={fileNames}
            onRemove={handleFileRemove}
          />
          <PrinterNotesField value={notes} onChange={setNotes} />
        </div>
      </CardContent>
    </Card>
  );
}
