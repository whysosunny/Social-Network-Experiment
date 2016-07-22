var Post = require('../../models/post');
var router = require('express').Router();


router.get('/api/posts', function(req,res) {
    Post.find().sort('-date').exec(function(err,posts) {
        if(err) {
            return next(err);
        } else {
            res.json(posts);
        }
    });
});

router.post('/api/posts', function(req,res,next) {
    var post = new Post({
        username: req.body.username,
        body: req.body.body
    });

    post.save(function(err,post) {
        if(err) {
            return next(err);
        } else {
            res.status(201).json(post);
        }

    });
});

module.exports = router;