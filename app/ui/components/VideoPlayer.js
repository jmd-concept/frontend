
'use client'

import React, { useState, useRef } from 'react';

export default function VideoPlayer({
    src,
    poster,
    className = '',
    autoPlay = false,
    controls = true,
    muted = false,
    loop = false
}) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handlePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className={`relative ${className}`}>
            {/* État de chargement */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-gray-300 h-12 w-12"></div>
                    </div>
                </div>
            )}

            {/* Lecteur vidéo */}
            <video
                ref={videoRef}
                className="w-full h-auto"
                controls={controls}
                autoPlay={autoPlay}
                muted={muted}
                loop={loop}
                preload="metadata"
                poster={poster}
                playsInline
                onLoadedData={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
            >
                <source src={`${src}.webm`} type="video/webm" />
                <source src={`${src}.mp4`} type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
            </video>

            {/* Contrôles personnalisés optionnels */}
            {!controls && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <button
                        onClick={handlePlay}
                        className="bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition"
                    >
                        {isPlaying ? '⏸️' : '▶️'}
                    </button>
                </div>
            )}
        </div>
    );
}