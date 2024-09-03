import { Box, Typography } from "@mui/material";
import { Character } from "../types";

const DetailsCharacter:  React.FC<{ character: Character }> = ({ character }) => (
    <Box>
    <Typography variant="h4">{character.name}</Typography>
    <img src={character.image} alt={character.name} style={{ width: '100%', maxWidth: '300px' }} />
    <Typography variant="body1">Status: {character.status}</Typography>
    <Typography variant="body1">Species: {character.species}</Typography>
    <Typography variant="body1">Origin: {character.origin.name}</Typography>
    </Box>
  );

export default DetailsCharacter;
  
