import React, { useState } from 'react';

const VideoPlayer = ({ videoSrc }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const [playbackRate, setPlaybackRate] = useState(1);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
    };

    const handlePlaybackRateChange = (e) => {
        setPlaybackRate(e.target.value);
    };

    const shareVideo = () => {
        navigator.clipboard.writeText(videoSrc);
        alert('Video link copied to clipboard!');
    };

    return (
        <div className="video-player">
            <video 
                src={videoSrc} 
                controls 
                autoPlay={isPlaying} 
                volume={volume} 
                playbackRate={playbackRate}
            />
            <div className="controls">
                <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
                <input 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="0.1" 
                    value={volume} 
                    onChange={handleVolumeChange} 
                />
                <select onChange={handlePlaybackRateChange} value={playbackRate}>
                    <option value="0.5">0.5x</option>
                    <option value="1">1x</option>
                    <option value="1.5">1.5x</option>
                    <option value="2">2x</option>
                </select>
                <button onClick={shareVideo}>Share</button>
            </div>
        </div>
    );
};

export default VideoPlayer;