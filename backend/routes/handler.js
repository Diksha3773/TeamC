const express = require('express');
const router = express.Router();
const achievement = require('../models/achievements.js');
const Alumni=require('../models/Alumni.js');
const acadmicCordinator=require('../models/AcadmicCordinator.js');
const Student = require('../models/Student.js');
const Faculty=require('../models/Faculty');
const PhdScholar=require('../models/PhdScholar');
const Staff=require('../models/Staff');
const Infrastructure = require('../models/Infrastructure.js');
const Activity = require('../models/Activity.js');
const NewsHighlight = require('../models/NewsHighlight.js');
const Placement = require('../models/Placement.js');
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
    res.end();
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
     res.end();
    } 
})
/* Alumini ends */


/* Student Starts */
router.get('/Students',async(req,res)=>{
    try {
        const student=await Student.find();
        res.status(200).json(student);
    } catch (error) {
        console.log(error);
        res.end();
    } 
})
/* Student ends */
/*Faculty Starts*/
router.get('/Faculty',async(req,res)=>{
    try {
        const faculty=await Faculty.find();
        res.status(200).json(faculty);
    } catch (error) {
        console.log(error);
        res.end();
    } 
})
/* Faculty Ends*/
/*Faculty Starts*/
router.get('/Profile/:id',async(req,res)=>{
    try {
        const faculty=await Faculty.find();
        res.status(200).json(faculty);
    } catch (error) {
        console.log(error);
        res.end();
    } 
})
/* Faculty Ends*/
/*PhdScholar Starts*/
router.get('/PhdScholar',async(req,res)=>{
    try {
        const phdScholars=await PhdScholar.find();
        res.status(200).json(phdScholars);
    } catch (error) {
        console.log(error);
        res.end();
    } 
})
/* PhdScholar Ends*/
/*Staff Starts*/
router.get('/Staff',async(req,res)=>{
    try {
        const staff=await Staff.find();
        res.status(200).json(staff);
    } catch (error) {
        console.log(error);
        res.end();
    } 
})
/* Staff Ends*/
/*Infrastructure Starts*/
router.get('/Infrastructure',async(req,res)=>{
    try {
        const infrastructures=await Infrastructure.find();
        res.status(200).json(infrastructures);
    } catch (error) {
        console.log(error);
        res.end();
    } 
})
/* Infrastructure Ends*/
/*Activity Starts*/
router.get('/Activity',async(req,res)=>{
    try {
        const activies=await Activity.find();
        res.status(200).json(activies);
    } catch (error) {
        console.log(error);
        res.end();
    } 
})
/* Activity Ends*/
/*News Highlights Starts*/
router.get('/News',async(req,res)=>{
    try {
        const newsHigh=await NewsHighlight.find();
        res.status(200).json(newsHigh);
    } catch (error) {
        console.log(error);
        res.end();
    } 
})
/* News Highlights Ends*/
/*Placements Starts*/
router.get('/placements',async(req,res)=>{
    try {
        const placement=await Placement.find().limit(req.query.limit);
        res.status(200).json(placement);
    } catch (error) {
        console.log(error);
        res.end();
    } 
})
/* Placements Ends*/
module.exports = router;