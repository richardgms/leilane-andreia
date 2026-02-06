'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface ImageSliderProps {
    images: string[];
    alt: string;
    showBadges?: boolean;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images, alt, showBadges = false }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
            {/* Sliding Container */}
            <Box
                sx={{
                    display: 'flex',
                    width: `${images.length * 100}%`,
                    height: '100%',
                    transition: 'transform 700ms cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
                }}
            >
                {images.map((image, index) => (
                    <Box key={index} sx={{ position: 'relative', width: `${100 / images.length}%`, height: '100%' }}>
                        <Image
                            src={image}
                            alt={`${alt} - ${index + 1}`}
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </Box>
                ))}
            </Box>

            {/* Badges (Optional) */}
            {showBadges && (
                (() => {
                    const currentPath = images[currentIndex].toLowerCase();
                    const label = currentPath.includes('antes') ? 'ANTES' : currentPath.includes('depois') ? 'DEPOIS' : null;

                    if (!label) return null;

                    return (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 16,
                                left: 16,
                                zIndex: 10,
                                bgcolor: 'rgba(255, 255, 255, 0.9)',
                                backdropFilter: 'blur(4px)',
                                px: 1.5,
                                py: 0.5,
                                borderRadius: 1,
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            }}
                        >
                            <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: '0.05em', color: 'secondary.main' }}>
                                {label}
                            </Typography>
                        </Box>
                    );
                })()
            )}
        </Box>
    );
};
