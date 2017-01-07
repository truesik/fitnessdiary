var express = require('express');
var models = require('../models');

var router = express.Router();

/* DIARIES */
router.get('/diaries', (req, res) => {
  models.Diary.findAll()
    .then(diaries => res.json(diaries))
    .catch(error => res.send(error));
});

router.post('/diaries', (req, res) => {
  models.Diary.create({
    title: req.body.title,
    startDate: req.body.startDate,
    description: req.body.description
  }).then(diary => res.status(201).json(diary))
    .catch(error => res.json(error));
});

router.get('/diaries/:diaryId', (req, res) => {
  models.Diary.findOne({
    include: [models.Exercise],
    where: {
      id: req.params.diaryId
    }
  }).then(diary => res.json(diary))
    .catch(error => res.json(error));
});

router.delete('/diaries/:diaryId', (req, res) => {
  models.Diary.destroy({
    where: {
      id: req.params.diaryId
    }
  }).then(diary => res.json(diary))
    .catch(error => res.json(error))
});

/* EXERCISES */
router.post('/exercises', (req, res) => {
  models.Exercise.findAll({
    where: {
      diary_id: req.body.id
    }
  }).then(exercises => res.json(exercises))
    .catch(error => res.json(error))
});

router.post('/exercises', (req, res) => {
  models.Exercise.create({
    title: req.body.title,
    muscleGroup: req.body.muscleGroup,
    date: req.body.date,
    diary_id: req.body.diary_id
  })
});

router.get('/exercises/:exerciseId', (req, res) => {
  models.Exercise.findOne({
    include: [models.ExerciseSet],
    where: {
      id: req.params.exerciseId
    }
  }).then(exercise => res.json(exercise))
    .catch(error => res.json(error))
});

router.delete('/execises/:exerciseId', (req, res) => {
  models.Exercise.destroy({
    where: {
      id: req.params.exerciseId
    }
  }).then(exercise => res.json(exercise))
    .catch(error => res.json(error))
});

module.exports = router;
