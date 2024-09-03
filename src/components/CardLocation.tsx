import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Location } from '../types';

const CardLocation: React.FC<{ location: Location }> = ({ location }) => {
    return (
        <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {location.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Type: {location.type}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Dimension: {location.dimension}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardLocation;