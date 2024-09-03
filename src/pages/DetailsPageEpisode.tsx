import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Episode } from '../types';
import { getEpisodeId } from '../services/api';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const DetailsPageEpisode: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [episode, setEpisode] = useState<Episode | null>(null);

    useEffect(() => {
        const fetchEpisode = async () => {
            if (id) {
                const data = await getEpisodeId(id);
                setEpisode(data);
            }
        };

        fetchEpisode();
    }, [id]);

    if (!episode) return <p>Loading...</p>;

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h4">{episode.name}</Typography>
            <Typography variant="body1">Air Date: {episode.air_date}</Typography>
            <Typography variant="body1">Episode: {episode.episode}</Typography>
            <Typography variant="body1">Characters: {episode.characters.length}</Typography>
        </Box>
    );
};

export default DetailsPageEpisode;
