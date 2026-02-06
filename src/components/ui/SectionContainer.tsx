'use client';

import React from 'react';
import { Box, Container, SxProps, Theme } from '@mui/material';

interface SectionContainerProps {
    children: React.ReactNode;
    id?: string;
    sx?: SxProps<Theme>;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    dark?: boolean; // If true, sets a dark background context (optional for future use)
}

/**
 * SectionContainer
 * 
 * Standard container for Landing Page sections.
 * Handles responsive padding and max-width constraint.
 */
export const SectionContainer: React.FC<SectionContainerProps> = ({
    children,
    id,
    sx,
    maxWidth = 'lg',
    dark = false,
}) => {
    return (
        <Box
            component="section"
            id={id}
            sx={{
                py: { xs: 6, md: 10 }, // Vertical spacing 48px mobile, 80px desktop
                width: '100%',
                backgroundColor: dark ? 'primary.main' : 'transparent',
                color: dark ? 'primary.contrastText' : 'inherit',
                ...sx,
            }}
        >
            <Container maxWidth={maxWidth}>
                {children}
            </Container>
        </Box>
    );
};
