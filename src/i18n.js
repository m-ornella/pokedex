import i18n from "i18next";

i18n.init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        // name: "name",
        type: "type",
        height: "Height",
        weight: "Weight",
        generation: "Generation",
        stats: "Statistics",
      },
    },
    fr: {
      translation: {
        // name: "nom",
        type: "type",
        height: "Taille",
        weight: "Poids",
        generation: "Génération",
        stats: "Statistiques",
      },
    },
  },
});

export default i18n;
