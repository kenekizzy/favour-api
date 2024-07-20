app.post('/user/:username/follow', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        const follower = await User.findOne({ username: req.body.follower });
        if (!user || !follower) {
            return res.status(404).json({ error: 'User not found' });
        }
        const follow = new Follow({ follower: follower._id, followee: user._id });
        await follow.save();
        res.json({ message: `${follower.username} followed ${user.username}` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Endpoint to like a post
app.post('/post/:postId/like', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        const user = await User.findOne({ username: req.body.user });
        if (!post || !user) {
            return res.status(404).json({ error: 'Post or user not found' });
        }
        const like = new Like({ user: user._id, post: post._id });
        await like.save();
        res.json({ message: `Post ${post._id} liked by ${user.username}` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to unlike a post
app.post('/post/:postId/unlike', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        const user = await User.findOne({ username: req.body.user });
        if (!post || !user) {
            return res.status(404).json({ error: 'Post or like not found' });
        }
        const like = await Like.findOne({ user: user._id, post: post._id });
        if (like) {
            await like.remove();
            res.json({ message: `Post ${post._id} unliked by ${user.username}` });
        } else {
            res.status(404).json({ error: 'Like not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to comment on a post
app.post('/post/:postId/comment', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        const user = await User.findOne({ username: req.body.user });
        if (!post || !user) {
            return res.status(404).json({ error: 'Post or user not found' });
        }
        const comment = new Comment({
            user: user._id,
            post: post._id,
            content: req.body.content
        });
        await comment.save();
        res.json({ message: `Comment added to post ${post._id}` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
