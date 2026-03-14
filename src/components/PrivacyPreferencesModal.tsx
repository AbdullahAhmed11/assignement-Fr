import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const preferences = [
  {
    id: "necessary",
    title: "Strictly necessary",
    description:
      "These tools are required for the basic functionality of the site and cannot be disabled.",
    required: true,
    defaultOn: true,
  },
  {
    id: "measurement",
    title: "Measurement",
    description:
      "They allow us to measure traffic and analyze your behavior to improve the service.",
    required: false,
    defaultOn: false,
  },
  {
    id: "marketing",
    title: "Marketing and Profiling",
    description:
      "Used to send you personalized marketing communications based on your interests.",
    required: false,
    defaultOn: false,
  },
] as const;

export function PrivacyPreferencesModal({ isOpen, onClose }: Props) {
  const [measurement, setMeasurement] = useState<boolean>(preferences[1].defaultOn);
  const [marketing, setMarketing] = useState<boolean>(preferences[2].defaultOn);

  const handleRefuseAll = () => {
    setMeasurement(false);
    setMarketing(false);
    onClose();
  };

  const handleAcceptAll = () => {
    setMeasurement(true);
    setMarketing(true);
    onClose();
  };

  const handleSave = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden
          />
          <div className="fixed inset-0 z-[101] flex items-end sm:items-center justify-center p-0 sm:p-4 pointer-events-none">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="privacy-modal-title"
              className="bg-[#f5f5f5] dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 rounded-t-2xl sm:rounded-2xl shadow-xl max-w-lg w-full max-h-[92vh] sm:max-h-[90vh] overflow-y-auto pointer-events-auto overscroll-contain"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 sm:p-6 lg:p-8 pb-[env(safe-area-inset-bottom)] sm:pb-6">
                <div className="relative pr-8">
                  <h2
                    id="privacy-modal-title"
                    className="text-xl font-bold text-zinc-900 dark:text-zinc-100"
                  >
                    Privacy Preferences
                  </h2>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Customize how we process your data
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-0 right-0 p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors touch-manipulation"
                    aria-label="Close"
                  >
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  This panel allows you to express certain preferences regarding the processing of your personal information. You can review and modify your choices at any time. To refuse your consent to the processing activities described below, disable the individual controls or use the &quot;Refuse all&quot; button.
                </p>

                <div className="mt-6 space-y-5">
                  {preferences.map((pref) => {
                    const isRequired = pref.required;
                    const isOn = isRequired ? true : pref.id === "measurement" ? measurement : marketing;
                    const setOn: (v: boolean) => void = pref.id === "measurement" ? setMeasurement : setMarketing;
                    return (
                      <div
                        key={pref.id}
                        className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4"
                      >
                        <div className="min-w-0">
                          <p className="font-medium text-zinc-900 dark:text-zinc-100 text-sm sm:text-base">
                            {pref.title}
                          </p>
                          <p className="mt-0.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                            {pref.description}
                          </p>
                        </div>
                        <button
                          type="button"
                          role="switch"
                          aria-checked={isOn}
                          disabled={isRequired}
                          onClick={() => !isRequired && setOn(!isOn)}
                          className={`shrink-0 w-11 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#f5f5f5] dark:focus:ring-offset-zinc-900 focus:ring-primary ${
                            isRequired
                              ? "bg-primary/80 cursor-not-allowed opacity-90"
                              : isOn
                                ? "bg-primary"
                                : "bg-zinc-300 dark:bg-zinc-600"
                          }`}
                        >
                          <span
                            className={`block w-5 h-5 mt-0.5 ml-0.5 rounded-full bg-white shadow transition-transform ${
                              isOn ? "translate-x-5" : "translate-x-0"
                            }`}
                          />
                        </button>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-700 text-xs text-zinc-500 dark:text-zinc-400 space-y-1">
                  <p>CONSENT ID: judhsvu/jzlh5j52j7s</p>
                  <p>CONSENT DATE: {new Date().toLocaleString()}</p>
                  <p className="mt-2">
                    You can withdraw or change your consent at any time. See our Privacy Policy for more.
                  </p>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handleRefuseAll}
                    className="flex-1 min-h-[44px] min-w-0 sm:min-w-[120px] py-2.5 px-4 rounded-lg bg-zinc-800 dark:bg-zinc-700 text-white text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-600 transition-colors touch-manipulation"
                  >
                    Refuse all
                  </button>
                  <button
                    type="button"
                    onClick={handleSave}
                    className="flex-1 min-h-[44px] min-w-0 sm:min-w-[120px] py-2.5 px-4 rounded-lg bg-zinc-800 dark:bg-zinc-700 text-white text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-600 transition-colors border border-zinc-600 touch-manipulation"
                  >
                    Save and continue
                  </button>
                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="flex-1 min-h-[44px] min-w-0 sm:min-w-[120px] py-2.5 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity touch-manipulation"
                  >
                    Accept all
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
