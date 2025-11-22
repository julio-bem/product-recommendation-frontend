import React, { useState, useEffect } from 'react';

function RecommendationType({ onRecommendationTypeChange }) {
  const [selectedType, setSelectedType] = useState('MultipleProducts');

  useEffect(() => {
    onRecommendationTypeChange(selectedType);
  }, [selectedType, onRecommendationTypeChange]);

  const handleSelect = (type) => {
    setSelectedType(type);
  };

  const buttonClass = (type) =>
    `w-1/2 py-3 text-center transition-all duration-300 font-semibold text-sm rounded-lg ${
      selectedType === type
        ? 'bg-blue-600 text-white shadow-md' // 💡 Estilo selecionado (Chic)
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }`;

  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold mb-3 text-gray-800">
        🎯 Tipo de Recomendação:
      </h2>

      <div className="flex bg-gray-100 p-1 rounded-xl shadow-inner">
        <button
          type="button"
          className={buttonClass('SingleProduct')}
          onClick={() => handleSelect('SingleProduct')}
        >
          Produto Único
          <p className="text-xs opacity-80 mt-0.5">
            Maior Score (ou último match)
          </p>
        </button>

        <button
          type="button"
          className={buttonClass('MultipleProducts')}
          onClick={() => handleSelect('MultipleProducts')}
        >
          Lista de Produtos
          <p className="text-xs opacity-80 mt-0.5">
            Todos os produtos com Match
          </p>
        </button>
      </div>
    </div>
  );
}

export default RecommendationType;
