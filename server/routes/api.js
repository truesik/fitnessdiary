const express = require('express');
const models = require('../models');
const router = express.Router();
const passport = require('passport');

/* DIARIES */
router.get('/diaries', ensureAuthenticated, (req, res) => {
  models.diary.findAll({
    where: {
      user_id: req.user.id
    }
  })
    .then(diaries => res.json(diaries))
    .catch(error => res.send(error));
});

router.post('/diaries', ensureAuthenticated, (req, res) => {
  models.diary.create({
    title: req.body.title,
    description: req.body.description,
    user_id: req.user.id
  }).then(diary => res.status(201).json(diary))
    .catch(error => res.json(error));
});

router.get('/diaries/:diaryId', ensureAuthenticated, (req, res) => {
  models.diary.findOne({
    include: [
      {
        all: true,
        nested: true
      }
    ],
    where: {
      id: req.params.diaryId,
      user_id: req.user.id
    }
  }).then(diary => res.json(diary))
    .catch(error => res.json(error));
});

router.delete('/diaries/:diaryId', ensureAuthenticated, (req, res) => {
  models.diary.destroy({
    where: {
      id: req.params.diaryId
    }
  }).then(() => res.send(req.params.diaryId))
    .catch(error => res.json(error))
});

/* EXERCISES */
router.post('/exercises', ensureAuthenticated, (req, res) => {
  models.exercise.findAll({
    where: {
      diary_id: req.body.id
    }
  }).then(exercises => res.json(exercises))
    .catch(error => res.json(error))
});

router.post('/exercises/add', ensureAuthenticated, (req, res) => {
  models.exercise.create({
    title: req.body.title,
    muscleGroup: req.body.muscleGroup,
    diaryId: req.body.diaryId
  }).then(exercise => res.status(201).json(exercise))
    .catch(error => res.json(error))
});

router.get('/exercises/:exerciseId', ensureAuthenticated, (req, res) => {
  models.exercise.findOne({
    include: [models.exerciseSet],
    where: {
      id: req.params.exerciseId
    }
  }).then(exercise => res.json(exercise))
    .catch(error => res.json(error))
});

router.delete('/exercises/:exerciseId', ensureAuthenticated, (req, res) => {
  models.exercise.destroy({
    where: {
      id: req.params.exerciseId
    }
  }).then(() => res.text(req.params.exerciseId))
    .catch(error => res.json(error))
});

/* SETS */
router.post('/sets/', ensureAuthenticated, (req, res) => {
  models.exerciseSet.findAll({
    where: {
      exercise_id: req.body.id
    }
  }).then(sets => res.json(sets))
    .catch(error => res.json(error))
});

router.post('/sets/add', ensureAuthenticated, (req, res) => {
  models.exerciseSet.create({
    weight: req.body.weight,
    reps: req.body.reps,
    warmUp: req.body.warmUp,
    exerciseId: req.body.exerciseId
  }).then(set => res.json(set))
    .catch(error => res.json(error))
});

router.get('/sets/:setId', ensureAuthenticated, (req, res) => {
  models.exerciseSet.findOne({
    where: {
      id: req.params.setId
    }
  }).then(set => res.json(set))
    .catch(error => res.json(error))
});

router.delete('/sets/:setId', ensureAuthenticated, (req, res) => {
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

router.get('/users/:userId', (req, res) => {
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

router.delete('/users/:userId', ensureAuthenticated, (req, res) => {
  models.user.destroy({
    where: {
      id: req.params.userId
    }
  }).then(() => res.text(req.params.userId))
    .catch(error => res.json(error))
});

/* AUTHENTICATION */
router.post('/login', (req, res, next) => {
  passport.authenticate('login', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json({error: 'user not found'});
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.json(user);
    });
  })(req, res, next);
});

router.post('/logout', (req, res) => {
  req.logOut();
  res.status(200).json({success: true});
});

router.get('/loggedIn', (req, res) => {
  if (req.isAuthenticated()) {
    return res.json({isLoggedIn: true});
  }
  return res.json({isLoggedIn: false});
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401);
}

module.exports = router;
