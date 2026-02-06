'use client';

import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { CustomButton } from '@/components/ui/CustomButton';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        text: "O melhor atendimento que já tive! A Leilane é super cuidadosa e o ambiente é maravilhoso. Indico de olhos fechados!",
        author: "Maria S.",
        treatment: "Epilação e Estética"
    },
    {
        text: "Epilação sem dor e sem tabu de verdade. Me senti muito acolhida desde o primeiro momento. Profissional excelente.",
        author: "Ana P.",
        treatment: "Epilação Humanizada"
    },
    {
        text: "Fiz minha micropigmentação e amei o resultado. Ficou super natural, exatamente como eu queria. Obrigada pelo carinho!",
        author: "Carla M.",
        treatment: "Micropigmentação"
    }
];

export const TestimonialsSection = () => {
    return (
        <Box sx={{ bgcolor: '#F5F5F0', position: 'relative', overflow: 'hidden' }}>
            {/* Decorative element inspired by Hero */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '-10%',
                    left: '-5%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, rgba(255,255,255,0) 70%)',
                    zIndex: 0,
                }}
            />

            <SectionContainer id="testimonials" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Typography
                            variant="overline"
                            sx={{
                                color: 'secondary.main',
                                letterSpacing: '0.2em',
                                fontWeight: 600,
                                display: 'block',
                                mb: 1
                            }}
                        >
                            DEPOIMENTOS
                        </Typography>
                        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                            O Que Dizem Nossas Clientes
                        </Typography>
                    </motion.div>
                </Box>

                <Grid container spacing={4}>
                    {testimonials.map((item, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        bgcolor: 'white',
                                        borderRadius: '16px',
                                        border: '1px solid rgba(212,175,55,0.15)',
                                        position: 'relative',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            borderColor: 'secondary.main',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                        }
                                    }}
                                >
                                    <Box sx={{ color: 'secondary.main', opacity: 0.4, mb: 3 }}>
                                        <Quote size={40} />
                                    </Box>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: 'text.primary',
                                            fontStyle: 'italic',
                                            lineHeight: 1.8,
                                            mb: 4,
                                            flexGrow: 1
                                        }}
                                    >
                                        "{item.text}"
                                    </Typography>

                                    <Box sx={{ mt: 'auto' }}>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                fontWeight: 600,
                                                color: 'primary.main',
                                                lineHeight: 1.2
                                            }}
                                        >
                                            {item.author}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: 'text.secondary',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.1em',
                                                fontWeight: 600
                                            }}
                                        >
                                            {item.treatment}
                                        </Typography>
                                    </Box>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ mt: 8, textAlign: 'center' }}>
                    <CustomButton
                        href={`https://wa.me/5583999563338?text=${encodeURIComponent("Olá! Vim pelo seu site e gostaria de ser a próxima transformação.")}`}
                        target="_blank"
                        sx={{
                            bgcolor: 'primary.main',
                            color: 'white',
                            '&:hover': {
                                bgcolor: 'primary.dark'
                            }
                        }}
                    >
                        Seja a Próxima Transformação
                    </CustomButton>
                </Box>
            </SectionContainer>
        </Box>
    );
};
