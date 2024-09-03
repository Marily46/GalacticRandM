import Grid from '@mui/material/Grid2';
import CardCharacter from './CardCharacter';
import { Character } from '../types';

const ListCharacter: React.FC<{ characters: Character[] }> = ({ characters }) => (
    <Grid container spacing={2}>
        {characters.map((character) => (
            <Grid key={character.id} >
                <CardCharacter character={character} />
            </Grid>
        ))}
    </Grid>
);

export default ListCharacter;
