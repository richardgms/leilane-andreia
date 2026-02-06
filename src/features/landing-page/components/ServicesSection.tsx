'use client';

import React from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Scissors, Eye, PenTool, Flower, GraduationCap } from 'lucide-react';
import { SectionContainer } from '@/components/ui/SectionContainer';

const services = [
    {
        icon: <Sparkles size={32} />,
        title: 'Epilação',
        description: 'Técnica delicada e humanizada para uma pele suave e bem cuidada.',
    },
    {
        icon: <Heart size={32} />,
        title: 'Maquiagem',
        description: 'Realce sua beleza natural com produções elegantes para qualquer ocasião.',
    },
    {
        icon: <Scissors size={32} />,
        title: 'Penteado',
        description: 'Design capilar sofisticado para transformar seu visual em momentos especiais.',
    },
    {
        icon: <Eye size={32} />,
        title: 'Sobrancelhas',
        description: 'Design estratégico que harmoniza e valoriza o seu olhar.',
    },
    {
        icon: <PenTool size={32} />,
        title: 'Micropigmentação',
        description: 'Procedimentos semi-permanentes para sobrancelhas e lábios perfeitos.',
    },
    {
        icon: <Flower size={32} />,
        title: 'Limpeza de pele',
        description: 'Tratamentos faciais profundos para uma pele renovada e saudável.',
    },
    {
        icon: <GraduationCap size={32} />,
        title: 'Cursos VIP',
        description: 'Treinamentos exclusivos para profissionais que buscam excelência e novas técnicas.',
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
                        Cuidado Especializado
                    </Typography>
                    <Box sx={{ width: '60px', height: '3px', bgcolor: 'secondary.main', mx: 'auto' }} />
                </motion.div>
            </Box>

            <Grid container spacing={4} justifyContent="center">
                {services.map((service, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: 'flex' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{ width: '100%', display: 'flex' }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    borderRadius: '16px',
                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    bgcolor: '#fafafa',
                                    '&:hover': {
                                        transform: 'translateY(-12px)',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                                        borderColor: 'secondary.main',
                                        bgcolor: '#ffffff',
                                        '& .icon-box': {
                                            bgcolor: 'secondary.main',
                                            color: 'white',
                                            transform: 'rotate(5deg) scale(1.1)',
                                        }
                                    }
                                }}
                            >
                                <Box
                                    className="icon-box"
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        bgcolor: 'rgba(212, 175, 55, 0.1)',
                                        color: 'secondary.main',
                                        mb: 3,
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    {service.icon}
                                </Box>
                                <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, color: 'text.primary' }}>
                                    {service.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                    {service.description}
                                </Typography>

                                <Box sx={{ mt: 'auto', pt: 3 }}>
                                    <Box sx={{ width: '20px', height: '2px', bgcolor: 'secondary.main', mx: 'auto', display: 'none' }} />
                                </Box>
                            </Paper>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </SectionContainer>
    );
};
