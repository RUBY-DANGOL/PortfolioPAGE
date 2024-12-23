const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors'); // Import CORS
const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

app.post('/saveData', (req, res) => {
    const data = req.body;
    console.log("Received data:", data); // Debugging line to confirm data is received

    // Read existing data from file
    fs.readFile('formData.json', 'utf8', (err, fileData) => {
        let jsonData = [];
        if (!err && fileData) {
            jsonData = JSON.parse(fileData);
        }

        // Add new form data
        jsonData.push(data);

        // Write updated data to file
        fs.writeFile('formData.json', JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                console.error("Error writing to file:", err);
                return res.status(500).json({ message: "Failed to save data" });
            }
            res.json({ message: "Data saved successfully" });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
