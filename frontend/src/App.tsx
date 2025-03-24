import  { useState } from 'react';
import { Heart, ListFilter, ArrowRight, Users, Sparkles, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { CampaignForm } from './components/CampaignForm';
import { Campaign } from './components/Campaign';
import { CampaignList } from './components/CampaignList';


function App() {
  const [campaignStory, setCampaignStory] = useState<string | null>(null);
  const [showList, setShowList] = useState(false);
  const [showMain, setShowMain] = useState(true);

  if (showMain) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-10 border-b border-rose-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Heart className="w-8 h-8 text-rose-500" />
               <h1 className="ml-2 text-2xl font-bold text-gray-900">MediFund</h1>
              </div>
              <button
                onClick={() => setShowList(!showList)}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <ListFilter className="w-5 h-5 mr-2" />
                View Campaigns
              </button>
            </div>
          </div>
        </nav>

        <main>
          {/* Hero Section */}
          <div className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Crowdfunding for
                  <span className="text-rose-500"> Medical Care</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                  Let AI help you create compelling campaigns to fund medical treatments.
                  Share your story and connect with donors who want to make a difference.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowMain(false)}
                  className="bg-rose-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-rose-600 transition-colors inline-flex items-center"
                >
                  Start Your Campaign
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </motion.div>

              {/* Feature Cards */}
              <div className="mt-24 grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-rose-100"
                >
                  <div className="bg-rose-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered Stories</h3>
                  <p className="text-gray-600">
                    Our AI helps craft compelling campaign stories that resonate with donors
                    and maximize your fundraising potential.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-rose-100"
                >
                  <div className="bg-rose-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Wide Reach</h3>
                  <p className="text-gray-600">
                    Share your campaign across social media platforms to reach potential
                    donors worldwide and increase support.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-rose-100"
                >
                  <div className="bg-rose-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Secure & Simple</h3>
                  <p className="text-gray-600">
                    Create your campaign in minutes with our easy-to-use platform and
                    secure donation processing.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
              <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>
          </div>
        </main>

        <footer className="bg-white border-t mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center text-gray-500">
              © 2024 MediFund. This is a demo application.
            </p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Heart className="w-8 h-8 text-rose-500" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">MediFund</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowMain(true)}
                className="text-gray-600 hover:text-gray-900"
              >
                Back to Home
              </button>
              <button
                onClick={() => setShowList(!showList)}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <ListFilter className="w-5 h-5 mr-2" />
                {showList ? 'Create Campaign' : 'View Campaigns'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!showList ? (
          <>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Create Your Medical Crowdfunding Campaign
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Let AI help you tell your story and reach donors who can make a difference.
                Fill in the details below to generate a compelling campaign.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-12">
              <CampaignForm onCampaignGenerated={setCampaignStory} />
              {campaignStory && <Campaign story={campaignStory} />}
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Active Campaigns
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Browse through our active medical crowdfunding campaigns and help make
                a difference in someone's life today.
              </p>
            </div>
            <CampaignList />
          </>
        )}
      </main>

      <footer className="bg-white border-t mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500">
            © 2024 MediFund. All  Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;