export const CUSTOM_RFQ_STEP_KEYS = [
  "productType",
  "specifications",
  "delivery",
  "chooseVendors",
  "reviewSubmit",
  "confirmation",
] as const;

export const CUSTOM_RFQ_TOTAL_STEPS = CUSTOM_RFQ_STEP_KEYS.length;