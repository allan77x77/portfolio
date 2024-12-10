const fs = require('fs');
const path = require('path');

// Chemin vers ton index.html dans le build
const buildPath = path.join(__dirname, 'build', 'index.html');

// Lit le fichier index.html
fs.readFile(buildPath, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  // Ajoute la balise <base> si elle n'existe pas déjà
  if (!data.includes('<base href="/portfolio/">')) {
    const updatedData = data.replace(
      '<head>',
      `<head>\n  <base href="/portfolio/">`
    );

    // Écris les modifications dans index.html
    fs.writeFile(buildPath, updatedData, 'utf8', (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Base tag added successfully!');
      }
    });
  }
});
