'use client';

import React from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Flower, Heart, User, Sun } from 'lucide-react';
import { SectionContainer } from '@/components/ui/SectionContainer';

const services = [
    {
        icon: <Sparkles size={24} />,
        title: 'Epilação Humanizada',
        description: 'Técnica exclusiva com cera hidrossolúvel e laser, focada no seu conforto e bem-estar.',
        image: '/images/services/epilacao.png' // Placeholder for user image
    },
    {
        icon: <Flower size={24} />,
        title: 'Estética Facial',
        description: 'Limpeza de pele profunda e peelings para renovar sua autoestima.',
        image: '/images/services/estetica_facial.png' // Generated
    },
    {
        icon: <User size={24} />,
        title: 'Micropigmentação',
        description: 'Sobrancelhas e lábios definidos com naturalidade e elegância.',
        image: '/images/services/sobrancelha.png' // Placeholder
    },
    {
        icon: <Heart size={24} />,
        title: 'Maquiagem & Penteados',
        description: 'Beleza para momentos especiais, realçando o que você tem de melhor.',
        image: '/images/services/maquiagem.png' // Placeholder
    },
    {
        icon: <Sun size={24} />,
        title: 'Hidra Gloss',
        description: 'Hidratação profunda e revitalização para lábios irresistíveis.',
        image: '/images/services/hidra_gloss.png' // Generated
    },
];

export const ServicesSection = () => {
    return (
        <SectionContainer id="services" sx={{ position: 'relative' }}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography variant="overline" color="secondary" sx={{ letterSpacing: '0.15em', fontWeight: 600 }}>
                        NOSSAS ESPECIALIDADES
                    </Typography>
                    <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
                        Cuidado Completo Para Você
                    </Typography>
                    <Box sx={{ width: '60px', height: '3px', bgcolor: 'secondary.main', mx: 'auto' }} />
                </motion.div>
            </Box>

            <Grid container spacing={4} justifyContent="center">
                {services.map((service, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: 'flex' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{ width: '100%', display: 'flex' }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    height: '100%',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    textAlign: 'left',
                                    border: '1px solid rgba(0,0,0,0.08)',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                                        borderColor: 'secondary.main',
                                        '& .service-image': {
                                            transform: 'scale(1.05)',
                                        }
                                    }
                                }}
                            >
                                {/* Service Image Container */}
                                <Box sx={{ position: 'relative', height: 220, overflow: 'hidden' }}>
                                    <Box
                                        className="service-image"
                                        sx={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '100%',
                                            transition: 'transform 0.6s ease',
                                            bgcolor: 'grey.100'
                                        }}
                                    >
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            onError={(e: any) => {
                                                // Fallback if image doesn't exist
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />
                                    </Box>
                                    {/* Icon Overlay (Optional for style) */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 16,
                                            right: 16,
                                            width: 40,
                                            height: 40,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            bgcolor: 'rgba(255, 255, 255, 0.9)',
                                            color: 'secondary.main',
                                            backdropFilter: 'blur(4px)',
                                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                                            zIndex: 2
                                        }}
                                    >
                                        {service.icon}
                                    </Box>
                                </Box>

                                <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 700, fontSize: '1.25rem' }}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                                        {service.description}
                                    </Typography>

                                    <Box sx={{ mt: 'auto', pt: 1 }}>
                                        <Typography
                                            variant="button"
                                            sx={{
                                                fontSize: '0.75rem',
                                                fontWeight: 600,
                                                color: 'secondary.main',
                                                letterSpacing: '0.1em',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    textDecoration: 'underline'
                                                }
                                            }}
                                        >
                                            Saiba Mais
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </SectionContainer>
    );
};
