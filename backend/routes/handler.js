const express = require('express');
const router = express.Router();
const achievement = require('../models/achievements.js');




router.get('/get_achievements', async (req, res) => {
    const achievements = await achievement.find({}).exec((err, achievementData) => {
        if (err) throw err;
        if (achievementData) {
            res.end(JSON.stringify(achievementData));
        } else {
            res.end();
        }
    });
});

router.post('/addTweet', (req, res) => {
    res.end('NA');
});

module.exports = router;