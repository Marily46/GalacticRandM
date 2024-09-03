import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Location } from '../types';
import { getLocationId } from '../services/api';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const DetailsPageLocation: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [location, setLocation] = useState<Location | null>(null);

    useEffect(() => {
        const fetchLocation = async () => {
            if (id) {
                const data = await getLocationId(id);
                setLocation(data);
            }
        };

        fetchLocation();
    }, [id]);

    if (!location) return <p>Loading...</p>;

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h4">{location.name}</Typography>
            <Typography variant="body1">Type: {location.type}</Typography>
            <Typography variant="body1">Dimension: {location.dimension}</Typography>
            <Typography variant="body1">Residents: {location.residents.length}</Typography>
        </Box>
    );
};

export default DetailsPageLocation;
