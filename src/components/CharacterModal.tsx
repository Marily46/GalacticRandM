import React from 'react';
import { Character } from '../types';
import '../styles/characterModal.scss';

const CharacterModal: React.FC<{ character: Character, onClose: () => void }> = ({ character, onClose }) => {
    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <img src={character.image} alt={character.name} />
                <h2>{character.name}</h2>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
                <p>Origin: {character.origin.name}</p>
            </div>
        </div>
    );
};

export default CharacterModal;
