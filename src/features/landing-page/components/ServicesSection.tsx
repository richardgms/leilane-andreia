'use client';

import React from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Heart, Scissors, Eye, PenTool, Flower, GraduationCap } from 'lucide-react';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { ImageSlider } from './ImageSlider';
import { CustomButton } from '@/components/ui/CustomButton';

const services = [
    {
        icon: <Sparkles size={24} />,
        title: 'Epilação',
        description: 'Técnica delicada e humanizada para uma pele suave e bem cuidada.',
        image: '/images/services/epilacao.webp',
        sliderImages: [
            '/images/services/epilacao-antes.webp',
            '/images/services/epilacao-depois.webp'
        ],
        showBadges: true
    },
    {
        icon: <Heart size={24} />,
        title: 'Maquiagem',
        description: 'Realce sua beleza natural com produções elegantes para qualquer ocasião.',
        image: '/images/services/maquiagem.webp',
        sliderImages: [
            '/images/services/maquiagem-1.webp',
            '/images/services/maquiagem-2.webp',
            '/images/services/maquiagem-3.webp',
            '/images/services/maquiagem-4.webp',
            '/images/services/maquiagem-5.webp'
        ]
    },
    {
        icon: <Scissors size={24} />,
        title: 'Penteado',
        description: 'Penteados exclusivos para festas, casamentos e ocasiões especiais.',
        image: '/images/services/penteado.webp',
        sliderImages: [
            '/images/services/penteado-1.webp',
            '/images/services/penteado-2.webp'
        ]
    },
    {
        icon: <Eye size={24} />,
        title: 'Sobrancelhas',
        description: 'Design estratégico que harmoniza e valoriza o seu olhar.',
        image: '/images/services/sobrancelha.webp',
        sliderImages: [
            '/images/services/sobrancelha1antes.webp',
            '/images/services/sobrancelha1depois.webp',
            '/images/services/sobrancelha2antes.webp',
            '/images/services/sobrancelha2depois.webp',
            '/images/services/sobrancelha3antes.webp',
            '/images/services/sobrancelha3depois.webp'
        ],
        showBadges: true
    },
    {
        icon: <PenTool size={24} />,
        title: 'Micropigmentação',
        description: 'Procedimentos semi-permanentes para sobrancelhas e lábios perfeitos.',
        image: '/images/services/micropigmentacao.webp',
        sliderImages: [
            '/images/services/sobrancelhas-1.webp',
            '/images/services/sobrancelhas-2.webp',
            '/images/services/sobrancelhas-3.webp',
            '/images/services/sobrancelhas-4.webp'
        ]
    },
    {
        icon: <Flower size={24} />,
        title: 'Limpeza de Pele',
        description: 'Renovação e purificação profunda para uma pele saudável, radiante e livre de impurezas.',
        image: '/images/services/limpeza_pele.webp',
        sliderImages: [
            '/images/services/limpeza-pele-1.webp',
            '/images/services/limpeza-pele-1-extra.webp',
            '/images/services/limpeza-pele-2.webp',
            '/images/services/limpeza-pele-antes.webp',
            '/images/services/limpeza-pele-depois.webp'
        ],
        showBadges: true
    },
    {
        icon: <GraduationCap size={24} />,
        title: 'Cursos VIP',
        description: 'Treinamentos exclusivos para profissionais que buscam excelência e novas técnicas.',
        image: '/images/services/cursos_vip.webp',
        sliderImages: [
            '/images/services/curso-vip-1.webp',
            '/images/services/cursos_vip.webp'
        ]
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
                                        {/* @ts-ignore - dynamic property check */}
                                        {service.sliderImages ? (
                                            <ImageSlider
                                                // @ts-ignore
                                                images={service.sliderImages}
                                                alt={service.title}
                                                // @ts-ignore
                                                showBadges={service.showBadges}
                                            />
                                        ) : (
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
                                        )}
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

            <Box sx={{ mt: 8, textAlign: 'center' }}>
                <CustomButton
                    href="https://wa.me/5583999563338?text=Olá! Gostaria de saber mais sobre os serviços."
                    target="_blank"
                    variant="outlined"
                    sx={{
                        borderColor: 'secondary.main',
                        color: 'primary.main',
                        '&:hover': {
                            borderColor: 'primary.main',
                            bgcolor: 'rgba(212,175,55,0.05)'
                        }
                    }}
                >
                    Agendar meu Momento de Autocuidado
                </CustomButton>
            </Box>
        </SectionContainer>
    );
};
