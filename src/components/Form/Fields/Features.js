import React from 'react';
import SelectableCard from '../../shared/SelectableCard';

function Features({ features = [], selectedFeatures = [], onFeatureChange }) {
  const handleToggle = (feature) => {
    const newSelection = selectedFeatures.includes(feature)
      ? selectedFeatures.filter((f) => f !== feature)
      : [...selectedFeatures, feature];

    onFeatureChange(newSelection);
  };

  return (
    <div className="mb-8 pt-6 border-t border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <span className="bg-purple-100 text-purple-600 p-1.5 rounded-lg text-sm">
            2
          </span>
          Funcionalidades
        </h2>
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
          {selectedFeatures.length} selecionadas
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {features.map((feature) => (
          <SelectableCard
            key={feature}
            label={feature}
            isSelected={selectedFeatures.includes(feature)}
            onClick={() => handleToggle(feature)}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
