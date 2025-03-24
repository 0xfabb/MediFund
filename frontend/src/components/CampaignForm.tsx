import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Guitar as Hospital, Loader } from 'lucide-react';
import { generateCampaignStory, saveCampaign } from '../lib/gemini';

interface FormData {
  name: string;
  disease: string;
  cost: string;
  hospital: string;
  reason: string;
}

interface CampaignFormProps {
  onCampaignGenerated: (story: string) => void;
}

export function CampaignForm({ onCampaignGenerated }: CampaignFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    disease: '',
    cost: '',
    hospital: '',
    reason: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const story = await generateCampaignStory(
        formData.name,
        formData.disease,
        parseFloat(formData.cost),
        formData.hospital,
        formData.reason
      );
      
      const campaign = saveCampaign({
        ...formData,
        cost: parseFloat(formData.cost),
        story,
      });
      
      onCampaignGenerated(story);
    } catch (error) {
      console.error('Error generating campaign:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center mb-8">
        <Heart className="w-6 h-6 text-rose-500 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Create Campaign</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Patient Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Medical Condition
          </label>
          <input
            type="text"
            name="disease"
            required
            value={formData.disease}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Treatment Cost ($)
          </label>
          <input
            type="number"
            name="cost"
            required
            value={formData.cost}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Hospital Name
          </label>
          <div className="relative">
            <Hospital className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="hospital"
              required
              value={formData.hospital}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Reason for Help
          </label>
          <textarea
            name="reason"
            required
            value={formData.reason}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isLoading}
          className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <Loader className="animate-spin mr-2" />
              Generating Campaign...
            </>
          ) : (
            'Generate Campaign'
          )}
        </motion.button>
      </div>
    </motion.form>
  );
}