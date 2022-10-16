const Profile = require ('../models/ProfileModel')
const express = require('express')
const router =  express.Router();


router.get('/profiles',async (req,res)=>{
    const profiles = await Profile.find();
    res.send(profiles)
})
router.get('/profiles/:id',async (req,res)=>{
    const profile = await Profile.findById(req.params.id);
    res.send(profile)
})
router.post('/profiles', async (req,res)=>{
    const newProfile = new Profile(req.body);
    const saveP = await newProfile.save();
    res.send(saveP)
})
router.delete('/profiles/:id', async(req,res)=>{
    const deletedProfile= await Profile.findByIdAndDelete(req.params.id);

    res.send(deletedProfile)
})


router.patch('/profiles/:id', async (req, res, next) => {
    const id = req.params.id;
    const body = req.body;
    const update = (id, body) => Profile.updateOne({ _id: id }, body);
    update(id, body)
        .then((doc) => res.json({ message: "profile was edited ", profile: body }))
        .catch((e) => next(e));
})

module.exports= router;