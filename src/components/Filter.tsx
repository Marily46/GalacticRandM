import React, { useState } from 'react';

const Filter: React.FC<{ onFilterChange: (filters: any) => void }> = ({ onFilterChange }) => {
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');

  const applyFilters = () => {
    onFilterChange({ status, species });
  };

  return (
    <div className="filters">
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">All Status</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <select value={species} onChange={(e) => setSpecies(e.target.value)}>
        <option value="">All Species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>

      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filter;
