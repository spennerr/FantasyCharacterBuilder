// Importera express-paketet
const express = require('express');

// Skapa en express-app
const app = express();

// Bestäm vilken port servern ska lyssna på (använd 5000 eller en ledig port)
const PORT = 5000;

// Skapa en enkel route för att testa att servern fungerar
app.get('/', (req, res) => {
  res.send('FantasyCharacterBuilder API är igång!');
});

// Starta servern
app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});