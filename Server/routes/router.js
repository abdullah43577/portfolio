const { Router } = require('express');
const controller = require('../controller/controllers');

const router = Router();

router.get('/api', controller.test);
router.post('/api/send_mail', controller.send_mail);
router.post('/api/upload_image', controller.upload_image);
router.post('/api/upload_blog', controller.upload_blog_post);
router.get('/api/get_blogs', controller.get_all_blogs);
router.get('/api/:id', controller.get_blog_post);

module.exports = router;
