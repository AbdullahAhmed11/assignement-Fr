import { useState } from "react";
import { motion } from "framer-motion";
import { PrivacyPreferencesModal } from "./PrivacyPreferencesModal";

export function PrivacyPreferencesTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed right-4 sm:right-6 z-50 flex h-12 w-12 min-h-[48px] min-w-[48px] items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-opacity touch-manipulation safe-area-bottom"
        aria-label="Open privacy preferences"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      </motion.button>
      <PrivacyPreferencesModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
