// babel.config.js (VERSIÓN DE PRUEBA SÚPER SIMPLIFICADA)
module.exports = function(api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],

    };
  };