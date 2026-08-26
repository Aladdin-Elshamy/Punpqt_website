import type { CustomRFQProductTypeId } from "@/features/custom-rfq/custom-rfq.data";

export type VendorId = "elite" | "premium" | "quality" | "quick";
export type VendorSelectionMode = "broadcast" | "specific" | null;
export type DeliveryAddressId = "home" | "work" | null;
export type FinishingKey =
  | "glossLamination"
  | "mattLamination"
  | "spotUv"
  | "foilStamping"
  | "embossing"
  | "dieCut"
  | "softTouch"
  | "binding";

export type CustomRFQDraft = {
  productType: CustomRFQProductTypeId;
  quantity: string;
  material: string;
  width: string;
  height: string;
  unit: string;
  printColors: string;
  printSides: string;
  finishing: FinishingKey[];
  notes: string;
  deliveryAddressId: DeliveryAddressId;
  deliveryCity: string;
  deliveryAddress: string;
  requiredBy: string;
  vendorMode: VendorSelectionMode;
  selectedVendors: VendorId[];
};

export const initialCustomRFQDraft: CustomRFQDraft = {
  productType: "businessCards",
  quantity: "",
  material: "",
  width: "",
  height: "",
  unit: "",
  printColors: "",
  printSides: "",
  finishing: [],
  notes: "",
  deliveryAddressId: "home",
  deliveryCity: "",
  deliveryAddress: "",
  requiredBy: "",
  vendorMode: null,
  selectedVendors: [],
};

export const deliveryAddressIds = ["home", "work"] as const;