'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { CustomButton } from '@/components/ui/CustomButton';
import { SectionContainer } from '@/components/ui/SectionContainer';

export const HeroSection = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: { xs: '100vh', md: '90vh' }, // Full screen on mobile
                width: '100%',
                bgcolor: '#F5F5F0', // Base color (visible on desktop)
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {/* Mobile Background Image & Overlay (Option B Style) */}
            <Box sx={{ position: 'absolute', inset: 0, zIndex: 0, display: { xs: 'block', md: 'none' } }}>
                <Image
                    src="/images/sobremim.webp"
                    alt="Background"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                    priority
                />
                {/* Dark Gradient for Text Readability */}
                <Box sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%)'
                }} />
            </Box>

            {/* Desktop Decorative Circle Background */}
            <Box
                component={motion.div}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                sx={{
                    position: 'absolute',
                    top: { xs: '-10%', md: '-20%' },
                    right: { xs: '-20%', md: '-10%' },
                    width: { xs: '300px', md: '600px' },
                    height: { xs: '300px', md: '600px' },
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(255,255,255,0) 70%)',
                    zIndex: 0,
                    display: { xs: 'none', md: 'block' } // Hide circle on mobile to keep BG clean
                }}
            />

            <SectionContainer sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', md: 'row' },
                    alignItems: 'center',
                    gap: 4,
                    width: '100%'
                }}>

                    {/* Text Content */}
                    <Box
                        sx={{
                            flex: 1,
                            textAlign: { xs: 'center', md: 'left' },
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            alignItems: { xs: 'center', md: 'flex-start' },
                            // Mobile Text Styling Override
                            color: { xs: 'common.white', md: 'inherit' }
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Box sx={{ position: 'relative', display: 'inline-block', mb: 1 }}>
                                <Typography variant="overline" sx={{ letterSpacing: '0.2em', color: 'secondary.main', fontWeight: 600 }}>
                                    ESTÉTICA & BELEZA
                                </Typography>
                            </Box>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Typography variant="h1" sx={{
                                fontSize: { xs: '2.5rem', md: '4rem' },
                                lineHeight: 1.1,
                                color: { xs: 'common.white', md: 'inherit' }, // Explicitly set white on mobile
                                // Text shadow on mobile for contrast
                                textShadow: { xs: '0px 2px 10px rgba(0,0,0,0.5)', md: 'none' }
                            }}>
                                Vem ter seu momento de <br />
                                <Box component="span" sx={{ color: 'secondary.main', fontStyle: 'italic' }}>autocuidado</Box>
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Typography variant="body1" sx={{
                                maxWidth: '500px',
                                fontSize: '1.1rem',
                                color: { xs: 'grey.300', md: 'text.secondary' }, // Light grey on mobile
                                mt: 2,
                                mb: 4,
                                textShadow: { xs: '0px 1px 4px rgba(0,0,0,0.5)', md: 'none' }
                            }}>
                                Especialista em epilação humanizada, estética facial e realce da sua beleza natural. Um ambiente acolhedor e sem tabus esperando por você.
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <CustomButton
                                size="large"
                                onClick={() => window.open(`https://wa.me/5583999563338?text=${encodeURIComponent("Olá! Vim pelo seu site e gostaria de agendar um horário de autocuidado.")}`, '_blank')}
                            // Optional: Outline style on mobile? Or stick to default gold/black?
                            // Default contained button matches the "Option B" look well.
                            >
                                Agendar Horário
                            </CustomButton>
                        </motion.div>
                    </Box>

                    {/* Desktop Hero Image (Original) - Hidden on Mobile */}
                    <Box
                        sx={{
                            flex: 1,
                            position: 'relative',
                            height: { xs: '400px', md: '750px' },
                            width: '100%',
                            display: { xs: 'none', md: 'flex' }, // HIDDEN ON MOBILE
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            sx={{
                                position: 'relative',
                                width: '100%',
                                height: '100%',
                                maxWidth: '650px',
                            }}
                        >
                            {/* Image backing/accent */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '90%',
                                    height: '75%',
                                    border: '2px solid #D4AF37',
                                    borderRadius: '200px 200px 0 0',
                                    opacity: 0.3,
                                    zIndex: -1
                                }}
                            />
                            <Image
                                src="/images/hero.webp"
                                alt="Leilane Andreia"
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'bottom' }}
                                priority
                            />
                        </Box>
                    </Box>

                </Box>
            </SectionContainer>

            {/* Scroll Indicator (Mobile only) */}
            <Box
                component={motion.div}
                initial={{ opacity: 0, y: -10 }}
                animate={{
                    opacity: 1,
                    y: [0, 10, 0],
                }}
                transition={{
                    opacity: { duration: 1, delay: 1.5 },
                    y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
                }}
                sx={{
                    position: 'absolute',
                    bottom: '12vh', // High enough to be between button and bottom
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: { xs: 'flex', md: 'none' },
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                    color: 'common.white',
                    zIndex: 2,
                    pointerEvents: 'none'
                }}
            >
                <ChevronDown size={32} strokeWidth={1.5} />
            </Box>
        </Box>
    );
};
