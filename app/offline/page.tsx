"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WifiOff, RefreshCw } from "lucide-react";

export default function OfflinePage() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleRetry = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (isOnline) {
      window.location.href = '/';
    }
  }, [isOnline]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        {/* Logo */}
        <div className="relative h-32 w-32 mx-auto mb-8">
          <Image
            src="/logo-no-text.png"
            alt="VibeBros Logo"
            fill
            className="object-contain opacity-50"
            sizes="128px"
          />
        </div>

        {/* WiFi Off Icon */}
        <div className="mb-6">
          <WifiOff className="h-16 w-16 mx-auto text-cerulean-400 opacity-70" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4">
          YOU'RE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean-400 to-yale-blue-500">OFFLINE</span>
        </h1>

        {/* Description */}
        <p className="text-lg text-baltic-blue-300 mb-8">
          Looks like you've lost your connection. Check your internet and try again.
        </p>

        {/* Retry Button */}
        <Button
          onClick={handleRetry}
          size="lg"
          className="bg-cerulean-500 hover:bg-cerulean-600 text-white shadow-lg shadow-cerulean-500/20"
        >
          <RefreshCw className="h-5 w-5 mr-2" />
          Retry Connection
        </Button>

        {/* Status */}
        <div className="mt-8 p-4 rounded-lg bg-baltic-blue-900/50 border border-baltic-blue-800">
          <p className="text-sm text-baltic-blue-300">
            Connection Status: <span className={isOnline ? "text-green-400" : "text-red-400"}>{isOnline ? "Online" : "Offline"}</span>
          </p>
        </div>

        {/* Tips */}
        <div className="mt-8 text-left">
          <p className="text-xs text-baltic-blue-400 mb-2">While you're offline, try:</p>
          <ul className="text-xs text-baltic-blue-400 space-y-1 list-disc list-inside">
            <li>Check your WiFi or mobile data</li>
            <li>Disable airplane mode</li>
            <li>Move to an area with better signal</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
