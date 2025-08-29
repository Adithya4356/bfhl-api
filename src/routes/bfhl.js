const express = require('express');
const router = express.Router();
const { parseDataArray } = require('../utils/parser');

function buildUserId(fullName, dob) {
  if (!fullName || !dob) return null;
  const cleaned = fullName
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '_');
  return `${cleaned}_${dob}`;
}

router.post('/', (req, res) => {
  try {
    const body = req.body;
    if (!body || !Array.isArray(body.data)) {
      return res.status(400).json({ is_success: false, message: 'Request must have a `data` array' });
    }

    const data = body.data;
    const parsed = parseDataArray(data);

    const userId = buildUserId(process.env.FULL_NAME, process.env.DOB_DDMMYYYY);

    const response = {
      is_success: true,
      user_id: userId || '',
      email: process.env.EMAIL || '',
      roll_number: process.env.ROLL_NUMBER || '',
      odd_numbers: parsed.odd_numbers,
      even_numbers: parsed.even_numbers,
      alphabets: parsed.alphabets,
      special_characters: parsed.special_characters,
      sum: parsed.sum,
      concat_string: parsed.concat_string
    };

    return res.json(response);
  } catch (err) {
    console.error('Error in /bfhl:', err);
    return res.status(500).json({ is_success: false, message: 'Internal server error' });
  }
});

module.exports = router;
