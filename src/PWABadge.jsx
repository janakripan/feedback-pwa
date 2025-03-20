import './PWABadge.css';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { useState, useEffect } from 'react';

function PWABadge() {
  const [showMessage, setShowMessage] = useState(true);  // State to control visibility

  const {
    updateServiceWorker
  } = useRegisterSW({
    immediate: true,  // Auto-updates without prompts
    onRegisteredSW(swUrl, r) {
      console.log('Service Worker registered:', swUrl);

      if (r?.active?.state === 'activated') {
        console.log('Service worker activated.');
      }
    },
  });

  // ✅ Hide message after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 3000);  // 3 seconds

    return () => clearTimeout(timer);  // Cleanup the timer
  }, []);

  return (
    <>
      {showMessage && (
        <div className="PWABadge" role="alert" aria-labelledby="toast-message">
          <div className="PWABadge-toast">
            <div className="PWABadge-message">
              <span id="toast-message">App is up-to-date ✅</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PWABadge;
