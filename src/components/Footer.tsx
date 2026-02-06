'use client';

import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import { Instagram, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: '#0e0e0e', color: 'white', pt: { xs: 4, md: 8 }, pb: { xs: 3, md: 4 } }}>
            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 3, md: 8 }}>

                    {/* Brand & Info */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h4" sx={{ color: 'white', mb: 2, fontFamily: 'serif' }}>
                            LA Clinic Studio
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'grey.400', mb: 3 }}>
                            Cuidando da sua beleza e bem-estar com atendimento humanizado e personalizado.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <IconButton component="a" href="https://www.instagram.com/leilaneandreia.clinicstudio/" target="_blank" sx={{ color: 'white', '&:hover': { color: 'secondary.main' } }}>
                                <Instagram />
                            </IconButton>
                            {/* Add other socials */}
                        </Box>
                    </Grid>

                    {/* Contact */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h6" sx={{ color: 'white', mb: 3 }}>
                            Contato
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
                            <Phone size={20} color="#D4AF37" />
                            <Typography variant="body2" color="grey.400">
                                (83) 99956-3338
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2, gap: 2 }}>
                            <MapPin size={20} color="#D4AF37" />
                            <Typography variant="body2" color="grey.400">
                                Rua Bahia, 56<br />
                                Santa Rita - PB
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Map */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ width: '100%', height: '200px', bgcolor: 'grey.800', borderRadius: '4px', overflow: 'hidden' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1176.9923795175177!2d-34.97831477613884!3d-7.135863543170146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acef13e353ebed%3A0x1f5fb7e0df3a32f0!2sR.%20Bahia%2C%2056%20-%20Popular%2C%20Santa%20Rita%20-%20PB%2C%2058301-365!5e0!3m2!1sen!2sbr!4v1770398679151!5m2!1sen!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </Box>
                    </Grid>

                </Grid>

                {/* Copyright */}
                <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: { xs: 4, md: 8 }, pt: 4, textAlign: 'center' }}>
                    <Typography variant="caption" color="grey.600">
                        © {new Date().getFullYear()} Leilane Andreia Clinic Studio. Todos os direitos reservados.
                    </Typography>
                </Box>

            </Container>
        </Box>
    );
};
