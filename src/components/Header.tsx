'use client';

import React, { useState, useEffect } from 'react';
import { AppBar, Box, Container, IconButton, Toolbar, Typography, useScrollTrigger, Slide, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Menu as MenuIcon, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { CustomButton } from '@/components/ui/CustomButton';

const navItems = [
    { label: 'Início', href: '#' },
    { label: 'Serviços', href: '#services' },
    { label: 'Sobre', href: '#about' },
    { label: 'Depoimentos', href: '#testimonials' },
];

function HideOnScroll(props: { children: React.ReactElement }) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    // Use useScrollTrigger for meaningful scroll detection
    const scrolled = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
    });

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height: '100%', bgcolor: '#FAF9F6', pt: 4 }}>
            <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ position: 'relative', width: 100, height: 100 }}>
                    <Image src="/images/logocomfundo.webp" alt="Logo" fill style={{ objectFit: 'contain' }} />
                </Box>
            </Box>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} component="a" href={item.href}>
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{
                                    fontFamily: 'Inter',
                                    fontWeight: 500,
                                    color: 'text.primary'
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <HideOnScroll>
                <AppBar
                    component="nav"
                    elevation={scrolled ? 4 : 0}
                    sx={{
                        bgcolor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                        backdropFilter: scrolled ? 'blur(10px)' : 'none',
                        transition: 'all 0.3s ease',
                        py: 1
                    }}
                >
                    <Container maxWidth="lg">
                        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>

                            {/* Logo Area */}
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ position: 'relative', width: { xs: 50, md: 60 }, height: { xs: 50, md: 60 } }}>
                                    {/* Assuming logosemfundo is better for header */}
                                    <Image
                                        src="/images/header-logo.webp"
                                        alt="LA Clinic Studio"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        priority
                                    />
                                </Box>
                                <Box sx={{ ml: 1, display: { xs: 'none', sm: 'block' } }}>
                                    <Typography variant="h6" color="primary" sx={{ lineHeight: 1.2, letterSpacing: '0.05em' }}>
                                        LEILANE ANDREIA
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                                        Clinic Studio
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Desktop Nav */}
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
                                {navItems.map((item) => (
                                    <Typography
                                        key={item.label}
                                        component="a"
                                        href={item.href}
                                        sx={{
                                            color: 'text.primary',
                                            fontWeight: 500,
                                            fontSize: '0.95rem',
                                            position: 'relative',
                                            '&:hover': {
                                                color: 'secondary.main',
                                                '&::after': {
                                                    width: '100%',
                                                }
                                            },
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                bottom: -4,
                                                left: 0,
                                                width: 0,
                                                height: '2px',
                                                bgcolor: 'secondary.main',
                                                transition: 'width 0.3s ease'
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </Typography>
                                ))}
                                <CustomButton variant="outlined" size="small" href={`https://wa.me/5583999563338?text=${encodeURIComponent("Olá! Vim pelo seu site e gostaria de agendar um horário.")}`} target="_blank">
                                    Agendar
                                </CustomButton>
                            </Box>

                            {/* Mobile Menu Button */}
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                onClick={handleDrawerToggle}
                                sx={{ display: { md: 'none' }, color: 'primary.main' }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>

            <Box component="nav">
                <Drawer
                    anchor="right"
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    );
};
