const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newContact = new Contact({
      name,
      email,
      subject,
      message
    });

    await newContact.save();

    res.status(201).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

// GET /api/contact
router.get('/', async (req, res) => {
  try {
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    const providedPassword = req.headers['x-admin-password'];

    if (providedPassword !== adminPassword) {
      return res.status(401).json({ error: 'Unauthorized: Incorrect password' });
    }

    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

module.exports = router;
