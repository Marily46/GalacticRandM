import React, { useState } from 'react';
import useApi from '../hooks/useApi';
import { ApiResponse, Location } from '../types';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import CardLocation from '../components/CardLocation';
import Search from '../components/Search';

const ListPageLocations: React.FC = () => {
    const { data, loading, error } = useApi<ApiResponse<Location>>('/location');
    const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);

    const handleSearch = (query: string) => {
        if (data && data.results) {
            const results = data.results.filter(location =>
                location.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredLocations(results);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <Search onSearch={handleSearch} />
            <Box sx={{ flexGrow: 1, p: 2 }}>
                <Grid container spacing={2}>
                    {(filteredLocations.length > 0 ? filteredLocations : data?.results || []).map((location) => (
                        <Grid key={location.id}>
                            <CardLocation location={location} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default ListPageLocations;
