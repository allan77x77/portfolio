const fs = require('fs');
const path = require('path');

// Le chemin vers ton fichier index.html dans le dossier build
const indexPath = path.join(__dirname, 'build', 'index.html');

fs.readFile(indexPath, 'utf8', (err, data) => {
  if (err) throw err;

  // On ajoute la balise <base href="/portfolio/"> juste avant la fermeture de la balise </head>
  const updatedData = data.replace(
    '</head>',
    '  <base href="/portfolio/">\n</head>'
  );

  // On réécrit le fichier index.html avec la balise ajoutée
  fs.writeFile(indexPath, updatedData, 'utf8', (err) => {
    if (err) throw err;
    console.log('La balise <base> a été ajoutée avec succès à index.html');
  });
});
