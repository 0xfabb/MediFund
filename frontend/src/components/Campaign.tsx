import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Share2, Twitter, Facebook, Linkedin, Send } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { DonationModal } from './DonationModal';

interface CampaignProps {
  story: string;
  showShare?: boolean;
}

export function Campaign({ story, showShare = true }: CampaignProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Help support this medical campaign! ${url}`;
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text)}`,
    };

    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg"
      >
        <div className="prose max-w-none">
          <ReactMarkdown>{story}</ReactMarkdown>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-rose-500 text-white py-4 rounded-lg font-medium hover:bg-rose-600 transition-colors flex items-center justify-center text-lg mt-8"
        >
          <Heart className="w-5 h-5 mr-2" />
          Donate Now
        </motion.button>

        {showShare && (
          <div className="mt-6 border-t pt-6">
            <div className="flex items-center justify-center space-x-4">
              <Share2 className="w-5 h-5 text-gray-400" />
              <button
                onClick={() => handleShare('twitter')}
                className="text-gray-600 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="text-gray-600 hover:text-blue-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare('whatsapp')}
                className="text-gray-600 hover:text-green-500 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </motion.div>

      <AnimatePresence>
        {isModalOpen && <DonationModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
}