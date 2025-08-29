# BFHL API — Node.js + Express

A simple REST API built using **Node.js** and **Express** for the BFHL assignment.  
It parses input data, classifies tokens into categories, and returns structured JSON responses.

---

## 🚀 Live Deployment
Your API is live here:  
👉 [https://bfhl-api-i1de.onrender.com/bfhl](https://bfhl-api-i1de.onrender.com/bfhl)

---

## 📂 GitHub Repository
👉 [https://github.com/Adithya4356/bfhl-api](https://github.com/Adithya4356/bfhl-api)

---

## 🔹 Example Usage

### Request
```bash
curl -X POST https://bfhl-api-i1de.onrender.com/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data":["a","1","334","4","R","$"]}'
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}

