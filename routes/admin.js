const express = require('express');
const router = express.Router();

const homework = require('../controllers/homework');
const member = require('../controllers/member');

router.post('/homework', homework.addHomework);
router.delete('/homework/id', homework.deleteHomeworkById);

router.get('/members', member.getAllMembers);
router.post('/member', member.addMember);
router.put('/member/id', member.updateMember);
router.delete('/member/id', member.deleteMember);

module.exports = router;