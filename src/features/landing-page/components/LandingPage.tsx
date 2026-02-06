'use client';

import React from 'react';
import { Box } from '@mui/material';
import { HeroSection } from './HeroSection';
import { ServicesSection } from './ServicesSection';
import { AboutSection } from './AboutSection';
import { TestimonialsSection } from './TestimonialsSection';
import { Footer } from '@/components/Footer';

export const LandingPage = () => {
    return (
        <Box>
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <TestimonialsSection />
            <Footer />
        </Box>
    );
};
