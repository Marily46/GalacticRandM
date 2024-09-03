import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Character } from "../types";
import { getCharacterId } from "../services/api";
import DetailsCharacter from "../components/DetailsCharacter";


const DetailsPageCharacter: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [character, setCharacter] = useState<Character | null>(null);

    useEffect(() => {
        const getCharacter = async () => {
            const data = await getCharacterId(id!)
            setCharacter(data)
        }

        getCharacter();
    }, [id]);

    if (!character) {
        return <div>Loading...</div>
    }

    return <DetailsCharacter character={character} />
}

export default DetailsPageCharacter;