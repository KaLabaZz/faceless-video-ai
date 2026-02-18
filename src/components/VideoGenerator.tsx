import React, { useState } from 'react';

const VideoGenerator = () => {
    const [script, setScript] = useState('');
    const [voiceType, setVoiceType] = useState('male');
    const [videoStyle, setVideoStyle] = useState('cinematic');
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedVideo, setGeneratedVideo] = useState(null);

    const handleGenerateVideo = async () => {
        setIsGenerating(true);
        try {
            const response = await fetch('/api/video/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ script, voiceType, videoStyle }),
            });
            const data = await response.json();
            setGeneratedVideo(data.videoUrl);
        } catch (error) {
            console.error('Error generating video:', error);
        } finally {
            setIsGenerating(false);
        }
    };

    const handleDownloadVideo = () => {
        if (generatedVideo) {
            const link = document.createElement('a');
            link.href = generatedVideo;
            link.download = 'video.mp4';
            link.click();
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>إنشاء فيديو احترافي</h2>
            <textarea placeholder='أدخل سكريبت الفيديو هنا...' value={script} onChange={(e) => setScript(e.target.value)} style={{ width: '100%', height: '100px', marginBottom: '10px' }} />
            <select value={voiceType} onChange={(e) => setVoiceType(e.target.value)}>
                <option value='male'>الذكر</option>
                <option value='female'>الأنثى</option>
                <option value='narrator'>الراوي</option>
            </select>
            <select value={videoStyle} onChange={(e) => setVideoStyle(e.target.value)} style={{ marginLeft: '10px' }}>
                <option value='cinematic'>سينمائي</option>
                <option value='professional'>احترافي</option>
                <option value='casual'>عادي</option>
            </select>
            <button onClick={handleGenerateVideo} disabled={isGenerating}> 
                {isGenerating ? 'جاري الإنشاء...' : 'إنشاء الفيديو'} 
            </button>
            {generatedVideo && (
                <> 
                    <video src={generatedVideo} controls style={{ width: '100%', marginTop: '20px' }} />
                    <button onClick={handleDownloadVideo} style={{ marginTop: '10px' }}>تحميل الفيديو</button>
                </>
            )}
        </div>
    );
};

export default VideoGenerator;