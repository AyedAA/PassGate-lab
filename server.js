const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('.'));

// Hardcoded credentials - simple password
const CORRECT_USERNAME = 'YWRtaW4='; // base64('admin')
const CORRECT_PASSWORD = 'c2ltcGxlMXBhc3N3b3Jk'; // base64('simple1password')

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // PROGRAMMER ERROR: Accidentally leaking correct credentials in response!
    const response = {
        success: false,
        message: 'Invalid username or password',
        // DEBUG INFO LEAKED BY MISTAKE:
        debug_info: {
            received_username: username,
            received_password: password,
            expected_username: CORRECT_USERNAME.replace(/=/g, ''),
            expected_password: CORRECT_PASSWORD.replace(/=/g, ''),
            note: 'Debug: Remove this in production!'
        }
    };
    
    // Remove padding for comparison
    const cleanUsername = username.replace(/=/g, '');
    const cleanCorrectUsername = CORRECT_USERNAME.replace(/=/g, '');
    const cleanCorrectPassword = CORRECT_PASSWORD.replace(/=/g, '');
    
    if (cleanUsername === cleanCorrectUsername && password === cleanCorrectPassword) {
        response.success = true;
        response.message = 'Login successful!';
        response.redirect = '/dashboard.html';
        // Remove debug info on success
        delete response.debug_info;
    }
    
    res.json(response);
});

// Serve dashboard page
app.get('/dashboard.html', (req, res) => {
    res.sendFile(__dirname + '/dashboard.html');
});

app.listen(port, () => {
    console.log(`🔐 PassGate Lab running at http://localhost:${port}`);
    console.log('✅ Server started successfully');
    console.log('🚨 Vulnerable application ready for testing');
    console.log('📋 Objective: Find and exploit authentication vulnerabilities');
});