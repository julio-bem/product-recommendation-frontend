import React, { useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  const handleRecommendations = (results) => {
    setRecommendations(results);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />

      <div className="bg-blue-900 text-white py-12 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Recomendador de Produtos RD Station
          </h1>
          <p className="max-w-3xl text-lg md:text-xl text-blue-100 leading-relaxed">
            Bem-vindo ao Recomendador de Produtos RD Station. Use o formulário
            abaixo para selecionar suas preferências e funcionalidades desejadas
            e receba recomendações personalizadas de produtos que melhor atendam
            às suas necessidades.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                  Configure sua Busca
                </h2>
              </div>
              <Form onSubmit={handleRecommendations} />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">
                Produtos Recomendados
              </h2>
              {recommendations.length > 0 && (
                <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {recommendations.length} encontrados
                </span>
              )}
            </div>

            <RecommendationList recommendations={recommendations} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
