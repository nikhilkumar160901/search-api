const express = require('express');
const searchController = require('../controllers/searchController');
const generalLimiter = require('../utils/rateLimit');
const router = express.Router();

router.get('/suggestions', generalLimiter, searchController.getSuggestions);
router.post('/log-search', searchController.logSearch);


/**
 * @swagger
 * /suggestions:
 *   get:
 *     summary: Get auto-completion suggestions
 *     description: Returns a list of search terms that match the given prefix, sorted by frequency.
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         required: true
 *         description: The prefix to search for
 *     responses:
 *       200:
 *         description: A list of suggestions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   term:
 *                     type: string
 *                     example: apple
 *                   count:
 *                     type: number
 *                     example: 10
 *       400:
 *         description: Missing or invalid query parameter
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /log-search:
 *   post:
 *     summary: Log a search term
 *     description: Logs a search term and increments its count in the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               term:
 *                 type: string
 *                 example: apple
 *             required:
 *               - term
 *     responses:
 *       200:
 *         description: Search term logged successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Search logged successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     term:
 *                       type: string
 *                       example: apple
 *                     count:
 *                       type: number
 *                       example: 11
 *       400:
 *         description: Missing or invalid request body
 *       500:
 *         description: Internal server error
 */

module.exports = router;