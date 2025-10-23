const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/participantController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.get('/', ctrl.list);
router.get('/:id', ctrl.get);
router.post('/', authenticateToken, ctrl.create);
router.put('/:id', authenticateToken, ctrl.update);
router.delete('/:id', authenticateToken, ctrl.remove);

module.exports = router;