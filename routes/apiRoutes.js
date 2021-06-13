const express=require('express');

const router=express.Router();

const blogController=require('../controller/apiController');

router.get('/api/v1/:user_id/blogs',blogController.getBlogsForUser);

module.exports=router;