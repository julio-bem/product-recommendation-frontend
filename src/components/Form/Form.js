import React from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import recommendationService from '../../services/recommendation.service';

function Form({ onSubmit }) {
  const { preferences, features, products } = useProducts();

  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: 'MultipleProducts',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataRecommendations = recommendationService.getRecommendations(
      formData,
      products
    );
    if (onSubmit) {
      onSubmit(dataRecommendations);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <form className="h-full flex flex-col" onSubmit={handleSubmit}>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
        <RecommendationType
          onRecommendationTypeChange={(selected) =>
            handleChange('selectedRecommendationType', selected)
          }
        />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-grow">
        <Preferences
          preferences={preferences}
          selectedPreferences={formData.selectedPreferences}
          onPreferenceChange={(selected) =>
            handleChange('selectedPreferences', selected)
          }
        />

        <Features
          features={features}
          selectedFeatures={formData.selectedFeatures}
          onFeatureChange={(selected) =>
            handleChange('selectedFeatures', selected)
          }
        />

        <div className="mt-8 pt-4 border-t border-gray-100 sticky bottom-0 bg-white pb-2 z-10">
          <SubmitButton text="Obter Recomendação Inteligente" />
        </div>
      </div>
    </form>
  );
}

export default Form;
