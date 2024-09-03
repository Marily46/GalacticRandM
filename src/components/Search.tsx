import { Box, TextField } from "@mui/material";
import { useState } from "react";

const Search: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
    const [searchQ, setSearchQ] = useState('');

    const handleSearch = () => {
        onSearch(searchQ);
    }

    return (
        <Box sx={{ my: 2 }}>
            <TextField
                fullWidth
                variant="outlined"
                label="Search Characters"
                value={searchQ}
                onChange={(e) => setSearchQ(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
        </Box>
    )
} 

export default Search;