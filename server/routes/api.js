// const express = require('express');
import express from "express";
// import * as models from '../models';
var models = require('../models');

const router = express.Router();

/* GET api listing. */
router.get('/api/diaries', (req, res) => {
  // res.send('api works');
  models.Diary.findAll().then(diaries => console.log(diaries));
});

router.post('/api/diaries', (req, res) => {
  var title = req.body.title;
  var startDate = req.body.startDate;
  var description = req.body.description;
  models.Diary.create({
    title,
    startDate,
    description
  }).then(diary => console.log(diary))
    .catch(error => console.log(error));
});

router.post('/api/diaries/:diaryId', (req, res) => {
  var diaryId = req.params.diaryId;
  models.Diary.findById(diaryId)
    .then(diary => console.log(diary))
    .catch(error => console.log(error));
});

router.delete('/api/diaries/:diaryId', (req, res) => {
  var diaryId = req.params.diaryId;
  models.Diary.destroy({
    where: {
      id: diaryId
    }
  }).then(() => console.log('done'))
    .catch(error => console.log(error))
});

module.exports = router;
