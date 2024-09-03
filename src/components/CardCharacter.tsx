import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CardCharacterProps } from '../types';
import '../styles/main.scss';

const CardCharacter: React.FC<CardCharacterProps> = ({ character }) => {
    return (
        <Card className="card">
            <CardMedia
                component="img"
                height="140"
                image={character.image}
                alt={character.name}
                loading="lazy"
            />
            <CardContent className="card-content">
                <Typography gutterBottom variant="h5" component="div">
                    {character.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Status: {character.status}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Species: {character.species}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Origin: {character.origin.name}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardCharacter;
