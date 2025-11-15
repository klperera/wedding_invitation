"use client";

import { useState, useEffect } from "react";
import { SplashScreen } from "./splash-screen";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(() => {
    try {
      return sessionStorage.getItem("splashShown") ? false : true;
    } catch {
      // If sessionStorage is unavailable for any reason, default to showing the splash
      return true;
    }
  });

  const [hasShownSplash, setHasShownSplash] = useState(() => {
    try {
      return !!sessionStorage.getItem("splashShown");
    } catch {
      return false;
    }
  });

  const handleSplashComplete = () => {
    setShowSplash(false);
    setHasShownSplash(true);
    sessionStorage.setItem("splashShown", "true");
  };

  return (
    <>
      {showSplash && !hasShownSplash && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}
      <div
        className={
          showSplash
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }
      >
        {children}
      </div>
    </>
  );
}
