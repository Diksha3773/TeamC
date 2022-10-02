

const express = require('express');
const router = express.Router();
const achievement = require('../models/achievements.js');
const Alumni=require('../models/Alumni.js');
const acadmicCordinator=require('../models/AcadmicCordinator.js');
const Student = require('../models/Student.js');


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

/* acadmic cordinator starts*/

router.get('/Acadcord',async (req,res)=>{
   try {
       const cordinators=await acadmicCordinator.find();
       res.status(200).json(cordinators);
   } catch (error) {
    console.log(error);
   } 
})
/* acadmic ccordinator ends */
/* Alumini starts*/
router.get('/Alumni',async(req,res)=>{
    try {
        const alumnis=await Alumni.find();
        res.status(200).json(alumnis);
    } catch (error) {
     console.log(error);
    } 
})
/* Alumini ends */

/*Faculty Starts*/
router.get('/Students',async(req,res)=>{
    try {
        const Student=await Student.find();
        res.status(200).json(Student);
    } catch (error) {
     console.log(error);
    } 
})

/* Faculty Ends*/
module.exports = router;