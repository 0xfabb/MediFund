import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

interface DonationModalProps {
  onClose: () => void;
}

export function DonationModal({ onClose }: DonationModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Thank You for Your Support!
          </h3>
          <p className="text-gray-600 mb-6">
            This is a demo application. In a real crowdfunding platform, you would be
            redirected to a secure payment processor to complete your donation.
          </p>
          <button
            onClick={onClose}
            className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}