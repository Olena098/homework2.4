const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Обробка GET-запиту на головну сторінку
app.get('/', (req, res) => {
  res.send('Ласкаво просимо на сайт доставки!');
});

// Обробка GET-запиту на сторінку відстеження замовлення
app.get('/track', (req, res) => {
  const orderId = req.query.id; // Отримуємо ідентифікатор замовлення з параметрів запиту
  if (!orderId) {
    res.status(400).send('Помилка: не вказаний ідентифікатор замовлення');
  } else {
    // Відправляємо інформацію про відстеження замовлення користувачеві
    res.send(`Відстеження замовлення з ідентифікатором ${orderId}`);
  }
});

// Обробка всіх інших GET-запитів
app.get('*', (req, res) => {
  res.status(404).send('Помилка 404: Сторінка не знайдена');
});

// Обробка помилок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Помилка сервера!');
});

// Прослуховування порту
app.listen(PORT, () => {
  console.log(`Сервер запущено на порті ${PORT}`);
});
