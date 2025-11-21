# 🔐 PassGate — Password Security Lab

PassGate is a hands-on security lab designed to demonstrate how weak authentication mechanisms can lead to full system compromise. Perfect for students, CTF beginners, and cybersecurity awareness workshops.

## 🎯 Overview

This lab walks you through common real-world password vulnerabilities, including:

- Weak & predictable passwords
- Information leakage  
- Poor server-side validation
- Hardcoded secrets
- Missing rate-limits

**Your goal?**  
👉 Break into the system and retrieve the hidden flag from the dashboard.

## 📂 Included Files

| File | Description |
|------|-------------|
| `index.html` | Login page UI |
| `dashboard.html` | Dashboard containing the hidden flag |
| `server.js` | Intentionally vulnerable Express server |
| `package.json` | Dependencies & scripts |

## ⚙️ Quick Start

1. **Download or clone the repo**
   ```bash
   git clone https://github.com/AyedAA/PassGate-lab
   cd PassGate-lab
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the lab**
   ```bash
   node server.js
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🎯 Objective

Exploit the authentication vulnerabilities → Access the dashboard → Capture the flag.

This lab is intentionally built for:
- Cybersecurity students
- CTF training sessions  
- Classroom awareness demonstrations
- Red/Blue team basics
- Password security workshops

## ⚠️ Disclaimer

This project is for educational purposes only.  
Do NOT use these techniques on systems you do not own or have explicit permission to test.

## 👤 Author

**Ayed A. Areda**  
GitHub: [AyedAA](https://github.com/AyedAA)
