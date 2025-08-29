require('dotenv').config();
const express = require('express');
const bfhlRouter = require('./routes/bfhl');

const app = express();
app.use(express.json());

app.use('/bfhl', bfhlRouter);

const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.json({ status: 'API is running' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});
app.listen(PORT, () => {
  console.log(`BFHL API running on port ${PORT}`);
});
