module.exports = {
    // Reglas de estilo personalizadas
    rules: {
      'semi': ['error', 'always'], // Punto y coma obligatorio
      //'indent': ['error', 2],     // 2 espacios de indentación
      //'quotes': ['error', 'single'], // Comillas simples
    },
    // Configuración adicional
    env: {
      browser: true,
      node: true,
    },
    extends: 'eslint:recommended', // Utilizar reglas recomendadas
  };
  