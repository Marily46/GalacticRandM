import React, { useState } from 'react';
import { Character } from '../types';
import CharacterModal from './CharacterModal';
import CardCharacter from './CardCharacter';
import Grid from '@mui/material/Grid2';

const GridCharacter: React.FC<{ characters: Character[] }> = ({ characters }) => {
    const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

    const handleSelectCharacter = (character: Character) => {
        setSelectedCharacter(character);
    };

    const handleCloseModal = () => {
        setSelectedCharacter(null);
    };

    return (
        <div>
            <Grid container spacing={2}  className="fade-in">
                {characters.map((character: Character) => (
                    <Grid
                        key={character.id}                        
                        onClick={() => handleSelectCharacter(character)}
                        className="fade-in"
                        sx={{
                            cursor: 'pointer',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                transition: 'transform 0.3s ease-in-out',
                            },
                        }}
                    >
                        <CardCharacter character={character} />
                    </Grid>
                ))}
            </Grid>
            {selectedCharacter && (
                <CharacterModal character={selectedCharacter} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default GridCharacter;
