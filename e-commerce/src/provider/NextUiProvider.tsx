"use client";

import store from "@/redux/store";
import { HeroUIProvider } from "@heroui/react";
import { Provider } from "react-redux";
import { Toaster } from "sonner";

export function NextUiProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <HeroUIProvider>
        {children}
        <Toaster />
      </HeroUIProvider>
    </Provider>
  );
}
