import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const PokemonSearchBar = ({ onSearch }) => {
  const { t } = useTranslation();

  const [generationFilter, setGenerationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleSearch = () => {
    // Call the onSearch function with the search filters and sorting options
    onSearch({
      generation: generationFilter,
      type: typeFilter,
      sort: sortOption,
    });
  };

  return (
    <div className="search-bar">
      <label>
        {t('Generation')}:
        <select onChange={(e) => setGenerationFilter(e.target.value)}>
          <option value="">{t('All generations')}</option>
          <option value="Gen1">{t('Gen 1')}</option>
          <option value="Gen2">{t('Gen 2')}</option>
          {/* Add other generations as needed */}
        </select>
      </label>

      <label>
        {t('Type')}:
        <select onChange={(e) => setTypeFilter(e.target.value)}>
          <option value="">{t('All types')}</option>
          <option value="Feu">{t('Fire')}</option>
          <option value="Eau">{t('Water')}</option>
          {/* Add other types as needed */}
        </select>
      </label>

      <label>
        {t('Sort')}:
        <select onChange={(e) => setSortOption(e.target.value)}>
          <option value="">{t('No sorting')}</option>
          <option value="Numero">{t('Number')}</option>
          <option value="Alphabetique">{t('Alphabetic')}</option>
          <option value="Poids">{t('Weight')}</option>
          <option value="Taille">{t('Size')}</option>
        </select>
      </label>

      <button onClick={handleSearch}>{t('Search')}</button>
    </div>
  );
};

export default PokemonSearchBar;
