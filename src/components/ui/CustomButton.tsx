'use client';

import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
    children: React.ReactNode;
    variant?: 'contained' | 'outlined' | 'text';
    color?: 'primary' | 'secondary' | 'inherit' | 'error' | 'info' | 'success' | 'warning';
    href?: string;
    target?: string;
}

/**
 * CustomButton Wraps MUI Button to enforce design system consistency.
 * 
 * - Primary (Contained): Black Background, Gold Text (Luxury)
 * - Secondary (Contained): Gold Background, Black Text (High Visibility)
 * - Outlined: Thin Black Border, Black Text (Elegant)
 */
export const CustomButton: React.FC<CustomButtonProps> = ({
    children,
    variant = 'contained',
    color = 'primary',
    sx,
    ...props
}) => {
    return (
        <Button
            variant={variant}
            color={color}
            disableElevation
            sx={{
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                borderRadius: '2px', // Slightly sharper for elegance
                px: 4,
                py: 1.5,
                ...sx,
            }}
            {...props}
        >
            {children}
        </Button>
    );
};
