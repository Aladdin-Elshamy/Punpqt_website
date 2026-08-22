import { Badge } from "@/components/ui/badge";
import Check from "@/shared/icons/Check";
import { FileText } from "lucide-react";

interface UploadProductHeaderProps {
    title: string;
    quantity: string;
    specification: string;
    printer: string;
    filesCount: number;
}

export default function UploadProductHeader({
    title,
    quantity,
    specification,
    printer,
    filesCount,
}: UploadProductHeaderProps) {
    return (
        <div className="flex items-start sm:items-center gap-3 border-b border-border/80 bg-[#FAFAFA] p-4 flex-col sm:flex-row">
            <div className="contents">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <FileText className="size-5 text-primary" />
                </div>
                <div className="min-w-0 font-semibold">
                    <h2 className="text-sm text-foreground">{title}</h2>
                    <p className="mt-1 text-xs text-muted-foreground">
                        {specification} · {quantity} ·{" "}
                        <span className="font-semibold text-primary">{printer}</span>
                    </p>
                </div>
            </div>
            {filesCount > 0 && (
                <Badge className="h-8 sm:ms-auto gap-2 font-semibold px-4 bg-primary/10">
                    <Check className="size-4 stroke-2" />
                    <span className="trim">{filesCount} {filesCount === 1 ? "file" : "files"}</span>
                </Badge>
            )}
        </div>
    );
}