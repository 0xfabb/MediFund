import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyAgRdhRht2XFaH-rHJ5qTCM_C061X34v6w');

export interface Campaign {
  id: string;
  name: string;
  disease: string;
  cost: number;
  hospital: string;
  reason: string;
  story: string;
  createdAt: number;
}

export async function generateCampaignStory(
  name: string,
  disease: string,
  cost: number,
  hospital: string,
  reason: string
): Promise<string> {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  const prompt = `Create a compelling and well-structured medical crowdfunding campaign using Markdown formatting. Use the following details:

Patient Name: ${name}
Medical Condition: ${disease}
Treatment Cost: $${cost}
Hospital: ${hospital}
Reason for Help: ${reason}

Please structure the campaign with the following sections using Markdown:

# 🚨 Help ${name} Fight ${disease}! 🚨

## Patient Story
[Write 2-3 sentences introducing ${name} and their situation]

## The Challenge
[Explain the medical condition and its impact on ${name} and their family]

## Treatment Plan
- Hospital: ${hospital}
- Required Amount: $${cost}
[Add 2-3 sentences about the treatment plan]

## How You Can Help
[Write a compelling paragraph about how donations will make a difference]

## 🙏 Call to Action
[Write an urgent but hopeful call to action]

Make the content emotional, authentic, and compelling while maintaining a hopeful tone. Keep each section concise and impactful.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

export function saveCampaign(campaign: Omit<Campaign, 'id' | 'createdAt'>): Campaign {
  const campaigns = getCampaigns();
  const newCampaign = {
    ...campaign,
    id: crypto.randomUUID(),
    createdAt: Date.now(),
  };
  
  campaigns.unshift(newCampaign);
  localStorage.setItem('campaigns', JSON.stringify(campaigns));
  return newCampaign;
}

export function getCampaigns(): Campaign[] {
  const campaigns = localStorage.getItem('campaigns');
  return campaigns ? JSON.parse(campaigns) : [];
}