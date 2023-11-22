const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

const juiceFlavors = ['Lemonade🍋', 'Orange🍊', 'Grape🍇', 'Strawberry🍓 & Banana🍌', 'Mango🥭', 'Nectarine😥','Peach🍑','Pineapple🍍','Blueberry🫐','Tomato🍅','Tropical🍹','Pear🍐','תפוח אגס סברס🎨','Watermelon🍉'];

app.use(cors());

app.get('/api/getRandomFlavor', (req, res) => {
  const randomIndex = Math.floor(Math.random() * juiceFlavors.length);
  const randomFlavor = juiceFlavors[randomIndex];
  res.json({ flavor: randomFlavor });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
