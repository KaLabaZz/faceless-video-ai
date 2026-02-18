import axios from 'axios';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

export const openAIService = {
    generateVideoScript: async (topic: string, style: string) => {
        try {
            const response = await axios.post(
                OPENAI_API_URL,
                {
                    model: 'gpt-4',
                    messages: [
                        { role: 'system', content: 'You are a professional video script writer. Write engaging video scripts in Arabic.' },
                        { role: 'user', content: `Write a ${style} video script about: ${topic}. The script should be engaging, clear, and suitable for a faceless video. Include timing instructions.` }
                    ],
                    temperature: 0.7,
                    max_tokens: 1500,
                },
                {
                    headers: {
                        Authorization: `Bearer ${OPENAI_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            return { success: true, script: response.data.choices[0].message.content };
        } catch (error) {
            console.error('Error generating script:', error);
            return { success: false, error: 'Failed to generate video script' };
        }
    },
    improveText: async (text: string) => {
        try {
            const response = await axios.post(
                OPENAI_API_URL,
                {
                    model: 'gpt-4',
                    messages: [
                        { role: 'system', content: 'You are an expert content editor. Improve the given text for clarity, engagement, and professionalism.' },
                        { role: 'user', content: `Improve this text: ${text}` }
                    ],
                    temperature: 0.7,
                    max_tokens: 1000,
                },
                {
                    headers: {
                        Authorization: `Bearer ${OPENAI_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            return { success: true, improvedText: response.data.choices[0].message.content };
        } catch (error) {
            console.error('Error improving text:', error);
            return { success: false, error: 'Failed to improve text' };
        }
    },
    generateVideoIdeas: async (niche: string, count: number = 5) => {
        try {
            const response = await axios.post(
                OPENAI_API_URL,
                {
                    model: 'gpt-4',
                    messages: [
                        { role: 'system', content: 'You are a creative video content strategist. Generate trending video ideas.' },
                        { role: 'user', content: `Generate ${count} trending video ideas for the niche: ${niche}. Format as a numbered list with brief descriptions.` }
                    ],
                    temperature: 0.8,
                    max_tokens: 1200,
                },
                {
                    headers: {
                        Authorization: `Bearer ${OPENAI_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            return { success: true, ideas: response.data.choices[0].message.content };
        } catch (error) {
            console.error('Error generating ideas:', error);
            return { success: false, error: 'Failed to generate video ideas' };
        }
    },
    getPerformanceTips: async (videoAnalytics: any) => {
        try {
            const response = await axios.post(
                OPENAI_API_URL,
                {
                    model: 'gpt-4',
                    messages: [
                        { role: 'system', content: 'You are a video marketing expert. Provide actionable tips to improve video performance.' },
                        { role: 'user', content: `Based on these video analytics: ${JSON.stringify(videoAnalytics)}, what are the top 5 tips to improve performance?` }
                    ],
                    temperature: 0.7,
                    max_tokens: 1000,
                },
                {
                    headers: {
                        Authorization: `Bearer ${OPENAI_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            return { success: true, tips: response.data.choices[0].message.content };
        } catch (error) {
            console.error('Error getting tips:', error);
            return { success: false, error: 'Failed to get performance tips' };
        }
    },
};

export default openAIService;