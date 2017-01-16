var express = require('express');
var models = require('../models');

var router = express.Router();

/* DIARIES */
router.get('/diaries', (req, res) => {
  models.diary.findAll()
    .then(diaries => res.json(diaries))
    .catch(error => res.send(error));
});

router.post('/diaries', (req, res) => {
  models.diary.create({
    title: req.body.title,
    description: req.body.description
  }).then(diary => res.status(201).json(diary))
    .catch(error => res.json(error));
});

router.get('/diaries/:diaryId', (req, res) => {
  models.diary.findOne({
    include: [
      {
        all: true,
        nested: true
      }
    ],
    where: {
      id: req.params.diaryId
    }
  }).then(diary => res.json(diary))
    .catch(error => res.json(error));
});

router.delete('/diaries/:diaryId', (req, res) => {
  models.diary.destroy({
    where: {
      id: req.params.diaryId
    }
  }).then(() => res.send(req.params.diaryId))
    .catch(error => res.json(error))
});

/* EXERCISES */
router.post('/exercises', (req, res) => {
  models.exercise.findAll({
    where: {
      diary_id: req.body.id
    }
  }).then(exercises => res.json(exercises))
    .catch(error => res.json(error))
});

router.post('/exercises/add', (req, res) => {
  models.exercise.create({
    title: req.body.title,
    muscleGroup: req.body.muscleGroup,
    diaryId: req.body.diaryId
  }).then(exercise => res.status(201).json(exercise))
    .catch(error => res.json(error))
});

router.get('/exercises/:exerciseId', (req, res) => {
  models.exercise.findOne({
    include: [models.exerciseSet],
    where: {
      id: req.params.exerciseId
    }
  }).then(exercise => res.json(exercise))
    .catch(error => res.json(error))
});

router.delete('/exercises/:exerciseId', (req, res) => {
  models.exercise.destroy({
    where: {
      id: req.params.exerciseId
    }
  }).then(() => res.text(req.params.exerciseId))
    .catch(error => res.json(error))
});

/* SETS */
router.post('/sets/', (req, res) => {
  models.exerciseSet.findAll({
    where: {
      exercise_id: req.body.id
    }
  }).then(sets => res.json(sets))
    .catch(error => res.json(error))
});

router.post('/sets/add', (req, res) => {
  models.exerciseSet.create({
    weight: req.body.weight,
    reps: req.body.reps,
    warmUp: req.body.warmUp,
    exerciseId: req.body.exerciseId
  }).then(set => res.json(set))
    .catch(error => res.json(error))
});

router.get('/sets/:setId', (req, res) => {
  models.exerciseSet.findOne({
    where: {
      id: req.params.setId
    }
  }).then(set => res.json(set))
    .catch(error => res.json(error))
});

router.delete('/sets/:setId', (req, res) => {
  models.exerciseSet.destroy({
    where: {
      id: req.params.setId
    }
  }).then(() => res.text(req.params.setId))
    .catch(error => res.json(error))
});

/* USERS */

router.get('/users/', (req, res) => {
  models.user.findAll()
    .then(users => res.json(users))
    .catch(error => res.json(error))
});

router.post('/users/:userId', (req, res) => {
  models.user.findOne({
    include: [{
      all: true,
      nested: true
    }],
    where: {
      id: req.params.userId
    }
  }).then(user => res.json(user))
    .catch(error => res.json(error))
});

router.post('/users/', (req, res) => {
  models.user.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  }).then(user => res.status(201).json(user))
    .catch(error => res.json(error))
});

router.delete('/users/:userId', (req, res) => {
  models.user.destroy({
    where: {
      id: req.params.userId
    }
  }).then(() => res.text(req.params.userId))
    .catch(error => res.json(error))
});

router.post('/users/login', (req, res) => {

});

router.post('/users/logout', (req, res) => {

});

module.exports = router;
