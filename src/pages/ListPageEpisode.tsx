import React, { useState } from 'react';
import useApi from '../hooks/useApi';
import { ApiResponse, Episode } from '../types';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import CardEpisode from '../components/CardEpisode';
import Search from '../components/Search';

const ListPageEpisode: React.FC = () => {
    const { data, loading, error } = useApi<ApiResponse<Episode>>('/episode');
    const [filteredEpisodes, setFilteredEpisodes] = useState<Episode[]>([]);

    const handleSearch = (query: string) => {
        if (data && data.results) {
            const results = data.results.filter(episode =>
                episode.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredEpisodes(results);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <Search onSearch={handleSearch} />
            <Box sx={{ flexGrow: 1, p: 2 }}>
                <Grid container spacing={2}>
                    {(filteredEpisodes.length > 0 ? filteredEpisodes : data?.results || []).map((episode) => (
                        <Grid key={episode.id}>
                            <CardEpisode episode={episode} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default ListPageEpisode;
