'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { CustomButton } from '@/components/ui/CustomButton';

export const AboutSection = () => {
    return (
        <SectionContainer id="about" maxWidth="lg">
            <Grid container spacing={6} alignItems="center">

                {/* Image Side */}
                <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 2, md: 1 } }}>
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        sx={{
                            position: 'relative',
                            height: { xs: '400px', md: '600px' },
                            width: '100%',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            bgcolor: '#F0F0F0' // Fallback
                        }}
                    >
                        {/* Background Accent */}
                        <Box sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(255,255,255,0) 100%)',
                            zIndex: 0
                        }} />

                        <Image
                            src="/images/sobremim.webp"
                            alt="Leilane Andreia"
                            fill
                            style={{ objectFit: 'cover', objectPosition: 'top center' }}
                        />
                    </Box>
                </Grid>

                {/* Text Side */}
                <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 2 } }}>
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography
                            variant="overline"
                            color="secondary"
                            sx={{
                                display: 'block',
                                textAlign: { xs: 'center', md: 'left' },
                                letterSpacing: '0.15em',
                                fontWeight: 600
                            }}
                        >
                            QUEM SOU EU
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{
                                mt: 1,
                                mb: 3,
                                textAlign: { xs: 'center', md: 'left' }
                            }}
                        >
                            Leilane Andreia
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 3,
                                fontWeight: 400,
                                color: 'text.primary',
                                fontStyle: 'italic',
                                textAlign: { xs: 'center', md: 'left' }
                            }}
                        >
                            "Transformar vidas através do <span style={{ color: '#D4AF37' }}>autocuidado</span>."
                        </Typography>

                        <Typography
                            variant="body1"
                            paragraph
                            color="text.secondary"
                            sx={{
                                lineHeight: 1.8,
                                textAlign: { xs: 'center', md: 'left' }
                            }}
                        >
                            Minha missão é proporcionar um atendimento humanizado e sem tabus. Acredito que a estética vai muito além da aparência; é sobre como você se sente consigo mesma.
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            color="text.secondary"
                            sx={{
                                lineHeight: 1.8,
                                textAlign: { xs: 'center', md: 'left' }
                            }}
                        >
                            Especialista em epilação e cuidados faciais, criei o Clinic Studio para ser um refúgio de bem-estar, onde cada detalhe foi pensado para o seu conforto.
                        </Typography>

                        <Box sx={{
                            mt: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: { xs: 'center', md: 'flex-start' },
                            gap: 4
                        }}>
                            <Box sx={{
                                display: 'flex',
                                gap: 4,
                                justifyContent: { xs: 'center', md: 'flex-start' }
                            }}>
                                <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                                    <Typography variant="h3" color="secondary">5+</Typography>
                                    <Typography variant="caption">Anos de Experiência</Typography>
                                </Box>
                                {/* Add more stats if known */}
                            </Box>

                            <CustomButton
                                href={`https://wa.me/5583999563338?text=${encodeURIComponent("Olá! Vim pelo seu site e gostaria de agendar uma avaliação com a Leilane.")}`}
                                target="_blank"
                                sx={{
                                    py: 2,
                                    px: 5,
                                    fontSize: '0.9rem'
                                }}
                            >
                                Quero Agendar uma Avaliação
                            </CustomButton>
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </SectionContainer>
    );
};
