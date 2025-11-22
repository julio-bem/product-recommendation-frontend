import React from 'react';
import SelectableCard from '../../shared/SelectableCard'; // Importação do novo componente

function Preferences({
  preferences = [],
  selectedPreferences = [],
  onPreferenceChange,
}) {
  const handleToggle = (preference) => {
    const newSelection = selectedPreferences.includes(preference)
      ? selectedPreferences.filter((p) => p !== preference)
      : [...selectedPreferences, preference];

    onPreferenceChange(newSelection);
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <span className="bg-blue-100 text-blue-600 p-1.5 rounded-lg text-sm">
            1
          </span>
          Preferências
        </h2>
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
          {selectedPreferences.length} selecionadas
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {preferences.map((preference, index) => (
          <SelectableCard
            key={preference}
            label={preference}
            isSelected={selectedPreferences.includes(preference)}
            onClick={() => handleToggle(preference)}
          />
        ))}
      </div>

      {preferences.length === 0 && (
        <p className="text-sm text-gray-500 italic p-4 text-center bg-gray-50 rounded-lg">
          Carregando preferências...
        </p>
      )}
    </div>
  );
}

export default Preferences;
