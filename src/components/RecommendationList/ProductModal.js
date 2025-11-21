import React, { useEffect } from 'react';

function ProductModal({ product, onClose }) {
  const { name, category, preferences, features } = product;

  // 💡 UX: Fechar o modal com a tecla ESC
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  // Função para renderizar as listas de forma robusta
  const renderDetailList = (items, title) => (
    <div className="mb-4">
      <h4 className="text-lg font-bold text-gray-800 border-b pb-1 mb-2">
        {title}:
      </h4>
      <ul className="space-y-2 text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    // Backdrop Fixo (Fundo escuro e opaco)
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-75 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Container Principal do Modal */}
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-2xl transform transition-all overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Impede que o clique interno feche o modal
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-blue-500 rounded-t-xl">
          <div>
            <span className="text-sm font-medium text-white opacity-90">
              {category}
            </span>
            <h2 className="text-3xl font-extrabold text-white">{name}</h2>
          </div>
          <button
            className="text-white hover:text-gray-200 transition duration-150"
            onClick={onClose}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Conteúdo Detalhado (Scrollable) */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {renderDetailList(preferences, 'Preferências Atendidas')}
          {renderDetailList(features, 'Funcionalidades Detalhadas')}

          <p className="text-sm italic text-gray-500 mt-6">
            Este produto foi recomendado com base na sua seleção de critérios no
            formulário.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
