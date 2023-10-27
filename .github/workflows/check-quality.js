const fs = require('fs');

// Accede al argumento pasado en la línea de comandos (el informe de ESLint)
const eslintReportPath = process.argv[2];
const max_warnings = process.argv[3];

const eslintReport = JSON.parse(fs.readFileSync(eslintReportPath));

if (eslintReport.length === 0) {
    console.log('El código no tiene errores ni advertencias. Calidad del código aceptable.');
    process.exit(0); // Continuar con éxito
  } else if (eslintReport.length <= maximoAdvertencias) {
    console.log(`El código tiene ${eslintReport.length} advertencia(s). Calidad del código aceptable.`);
    process.exit(0); // Continuar con éxito
  } else {
    console.error(`El código tiene ${eslintReport.length} errores/advertencias. Calidad del código insatisfactoria.`);
    process.exit(1); // Detener la pipeline con un error
  }
