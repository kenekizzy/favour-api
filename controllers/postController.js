import Post from "../models/postModel"
import User from "../models/userModel";

const createPost = asyncHandler ( async (req, res) => {
    const user = await User.findOne({ username: req.body.user });
    if (!user) {
        res.status(400)
        throw new Error("No User Available")
    }
  
    const post = new Post({
        user: user._id,
        content: req.body.content
    });
    await post.save();
    res.status(200).json(post);
})

const getSinglePost = asyncHandler ( async (req, res) => {
    const { id } = req.params
    const post = await Post.findById(id);
  
    if (!post){
        res.status(400)
        throw new Error("Post not found")
    };
  
    res.status(200).json({post, message: "Successful"});
})

const getAllPost = asyncHandler ( async (req, res) => {
    const posts = await Post.find()

    if(!posts){
        res.status(400)
        throw new Error("No Post available")
    }

    res.status(200).json({posts, message: "Successful"});
})

const updatePost = asyncHandler (async (req, res) => {
    const { id } = req.params

    if(!id){
        res.status(404)
        throw new Error("Invalid Id")
    }

    const post = await Post.findById(id)

    if(!post){
        res.status(400)
        throw new Error("Invalid Post Id")
    }

    const updatedPost = await Post.findByIdAndUpdate(id, req.body, {new: true})

    res.status(200).json({data: updatedPost, message: "Listing updated successfully"})
})

const deletePost = asyncHandler ( async (req, res) => {
    const { id } = req.params
    const post = await Post.findById(id)

    if(!post){
        res.status(400)
        throw new Error("No Post available")
    }

    await post.remove()

    res.status(200).json({message: "Post has been deleted"})
})

export { createPost, getSinglePost, getAllPost, updatePost, deletePost}