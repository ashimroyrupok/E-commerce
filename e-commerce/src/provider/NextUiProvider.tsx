"use client";

import { HeroUIProvider } from "@heroui/react";

export function NextUiProvider({ children }: { children: React.ReactNode }) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
