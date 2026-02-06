'use client';

import React from 'react';
import { Box, Fab, Tooltip, Zoom } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'framer-motion';

export const WhatsAppFloatingButton = () => {
    const whatsappUrl = "https://wa.me/5583999563338?text=" + encodeURIComponent("Olá! Vim pelo seu site e gostaria de agendar um horário.");

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: { xs: 16, md: 32 },
                right: { xs: 16, md: 32 },
                zIndex: 2000,
            }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                    type: 'spring',
                    damping: 20,
                    stiffness: 300,
                    delay: 0.5
                }}
            >
                <Tooltip title="Agendar via WhatsApp" placement="left" arrow>
                    <Fab
                        aria-label="WhatsApp"
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            bgcolor: '#1A1A1A',
                            color: '#FFFFFF',
                            width: { xs: 56, md: 64 },
                            height: { xs: 56, md: 64 },
                            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                            '&:hover': {
                                bgcolor: '#1A1A1A',
                                boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                            },
                        }}
                    >
                        <WhatsAppIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
                    </Fab>
                </Tooltip>
            </motion.div>
        </Box>
    );
};
