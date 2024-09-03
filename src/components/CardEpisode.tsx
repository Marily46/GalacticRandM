import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Episode } from '../types';

const CardEpisode: React.FC<{ episode: Episode }> = ({ episode }) => {
    return (
        <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {episode.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Air Date: {episode.air_date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Episode: {episode.episode}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardEpisode;