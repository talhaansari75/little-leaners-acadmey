import { useState } from "react";

/** The Academy is fully free. There is no paid ad-removal entitlement. */
export function useAdFree() {
  const [adFree] = useState(false);
  return adFree;
}
