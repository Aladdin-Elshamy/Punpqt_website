import type { CartDesignOption } from "../shopping-cart.types";

interface CartDesignPreferenceProps {
  groupId: string;
  value: CartDesignOption;
  onValueChange: (value: CartDesignOption) => void;
}

export default function CartDesignPreference({
  groupId,
  value,
  onValueChange,
}: CartDesignPreferenceProps) {
  return (
    <fieldset className="mt-5 rounded-xl bg-primary/10 px-4 py-3 ps-4 font-semibold sm:ps-16">
      <legend className="sr-only">Design file preference</legend>
      <p className="text-xs text-foreground">
        Will you upload design files for this product after payment?
      </p>

      <label className="mt-2 flex cursor-pointer items-center gap-2 text-xs text-muted-foreground">
        <input
          type="radio"
          name={groupId}
          value="upload"
          checked={value === "upload"}
          onChange={() => onValueChange("upload")}
          className="size-3.5 border-4 border-primary accent-primary"
        />
        {"Yes, I'll upload my design files after payment."}
      </label>

      <label className="mt-4 flex cursor-pointer items-center gap-2 text-xs text-muted-foreground">
        <input
          type="radio"
          name={groupId}
          value="printer"
          checked={value === "printer"}
          onChange={() => onValueChange("printer")}
          className="size-3.5 accent-primary"
        />
        No, I need the printer to create the design for me.
      </label>
    </fieldset>
  );
}