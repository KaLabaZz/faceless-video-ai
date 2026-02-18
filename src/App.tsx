// Updated App.tsx with advanced features

import React from 'react';
import VideoGeneration from './components/VideoGeneration';
import AIProcessing from './components/AIProcessing';
import SocialSharing from './components/SocialSharing';
import Analytics from './components/Analytics';
import PremiumSubscription from './components/PremiumSubscription';

const App: React.FC = () => {
    return (
        <div>
            <h1>Faceless Video AI</h1>
            <VideoGeneration />
            <AIProcessing />
            <SocialSharing />
            <Analytics />
            <PremiumSubscription />
        </div>
    );
};

export default App;