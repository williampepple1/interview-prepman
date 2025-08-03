import React, { useEffect, useState } from 'react';
import { registerSW } from 'virtual:pwa-register';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const PWAInstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [showUpdatePrompt, setShowUpdatePrompt] = useState(false);

  useEffect(() => {
    // Handle PWA updates
    registerSW({
      onNeedRefresh() {
        setShowUpdatePrompt(true);
      },
      onOfflineReady() {
        console.log('App ready to work offline');
      },
    });

    // Handle install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
    };

    // Handle app installed
    const handleAppInstalled = () => {
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
      console.log('PWA was installed');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    
    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  const handleUpdateClick = () => {
    window.location.reload();
  };

  if (!showInstallPrompt && !showUpdatePrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50">
      {showInstallPrompt && (
        <div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg flex items-center justify-between">
          <div>
            <h3 className="font-semibold">Install Interview Prep</h3>
            <p className="text-sm opacity-90">Add to home screen for quick access</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowInstallPrompt(false)}
              className="px-3 py-1 text-sm bg-blue-700 hover:bg-blue-800 rounded"
            >
              Later
            </button>
            <button
              onClick={handleInstallClick}
              className="px-3 py-1 text-sm bg-white text-blue-600 hover:bg-gray-100 rounded"
            >
              Install
            </button>
          </div>
        </div>
      )}
      
      {showUpdatePrompt && (
        <div className="bg-green-600 text-white p-4 rounded-lg shadow-lg flex items-center justify-between">
          <div>
            <h3 className="font-semibold">Update Available</h3>
            <p className="text-sm opacity-90">A new version is ready to install</p>
          </div>
          <button
            onClick={handleUpdateClick}
            className="px-3 py-1 text-sm bg-white text-green-600 hover:bg-gray-100 rounded"
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default PWAInstallPrompt; 