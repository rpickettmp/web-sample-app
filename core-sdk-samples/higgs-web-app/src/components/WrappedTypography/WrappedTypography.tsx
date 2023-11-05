import React from 'react';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import Markdown from 'react-markdown';

interface WrappedTypographyProps {
    text: string;
    variant: 'body1' | 'body2';
    sx?: SxProps<Theme>;
}

const WrappedTypography: React.FC<WrappedTypographyProps> = ({
    text,
    variant,
    sx,
}) => {
    return (
        <Box sx={sx}>
            {text
                .trim()
                .split('\n')
                .map((b: string) => (
                    <Typography variant={variant} key={b}>
                        <Markdown>{b}</Markdown>
                    </Typography>
                ))}
        </Box>
    );
};

WrappedTypography.defaultProps = {
    sx: {},
};

export default WrappedTypography;
