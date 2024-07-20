import Post from "../models/postModel"
import User from "../models/userModel";

const createPost = asyncHandler ( async (req, res) => {
    const user = await User.findOne({ username: req.body.user });
    if (!user) {
        res.status(404).json({ error: 'User not found' });
    }
  
    const post = new Post({
        user: user._id,
        content: req.body.content
    });
    await post.save();
    res.status(200).json(post);
})

export { createPost, }