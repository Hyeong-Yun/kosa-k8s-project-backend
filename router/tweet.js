import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import * as tweetController from '../controller/tweet.js';
// import { isAuth } from '../middleware/auth.js';
// import { validate } from '../middleware/validator.js';

const router = express.Router();

// const validateTweet = [
//   body('text')
//     .trim()
//     .isLength({ min: 3 })
//     .withMessage('text should be at least 3 characters'),
//   validate,
// ];

// GET /tweet
// GET /tweets?username=:username
router.get('/', tweetController.getTweets);
//isAuth

// GET /tweets/:id
router.get('/:id', tweetController.getTweet);
//isAuth

// POST /tweeets
router.post('/', tweetController.createTweet);
//isAuth, validateTweet

// PUT /tweets/:id
router.put('/:id', tweetController.updateTweet);
//isAuth, validateTweet

// DELETE /tweets/:id
router.delete('/:id', tweetController.deleteTweet);

export default router;
