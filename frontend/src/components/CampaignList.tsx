import React from 'react';
import { motion } from 'framer-motion';
import { Campaign } from './Campaign';
import { getCampaigns } from '../lib/gemini';

export function CampaignList() {
  const campaigns = getCampaigns();

  if (campaigns.length === 0) {
    return (
      <div className="text-center text-gray-500 py-12">
        No campaigns have been created yet.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {campaigns.map((campaign, index) => (
        <motion.div
          key={campaign.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Campaign story={campaign.story} showShare={true} />
        </motion.div>
      ))}
    </div>
  );
}