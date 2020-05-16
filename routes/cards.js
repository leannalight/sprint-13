const router = require('express').Router();
const path = require('path');
const fs = require('fs');

async function readCardsData() {
  const cardsPath = path.join(__dirname, '../data/cards.json');
  try {
    const data = await fs.promises
      .readFile(cardsPath, { encoding: 'utf-8' });
    return JSON.parse(data);
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(error);
  }
}

router.get('/cards', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  readCardsData().then((data) => {
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(500).json({ message: 'Запрашиваемый файл не найден' });
    }
  });
});

module.exports = router;
