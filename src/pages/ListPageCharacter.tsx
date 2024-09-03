import React, { useState } from 'react';
import useApi from '../hooks/useApi';
import { ApiResponse, Character } from '../types';
import GridCharacter from '../components/GridCharacter';
import Search from '../components/Search';
import Filter from '../components/Filter';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import '../styles/filters.scss';


const ListPageCharacter: React.FC = () => {
    const { data, loading, error } = useApi<ApiResponse<Character>>('/character');
    const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const charactersPerPage = 6;

    const handleSearch = (query: string) => {
        if (data && data.results) {
            const results = data.results.filter(character =>
                character.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredCharacters(results);
            setCurrentPage(1);
        }
    };

    const handleFilterChange = (filters: any) => {
        if (data && data.results) {
            const filtered = data.results.filter(character => {
                return (
                    (filters.status ? character.status === filters.status : true) &&
                    (filters.species ? character.species === filters.species : true)
                );
            });
            setFilteredCharacters(filtered);
            setCurrentPage(1);
        }
    };

    const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const changeCharacters = filteredCharacters.length > 0 ? filteredCharacters : data?.results || [];
    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const currentCharacters = changeCharacters.slice(indexFirstCharacter, indexOfLastCharacter);

    return (
        <>
            <Filter onFilterChange={handleFilterChange} />
            <Search onSearch={handleSearch} />
            <GridCharacter characters={currentCharacters} />
            <Stack spacing={2} alignItems="center" sx={{ mt: 3 }}>
                <div className="pagination-container">
                    <Pagination
                        count={Math.ceil(changeCharacters.length / charactersPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                    />
                </div>

            </Stack>
        </>
    );
};

export default ListPageCharacter;
