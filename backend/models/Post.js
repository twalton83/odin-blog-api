import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User" },
  datePosted: { type: Date, default: Date.now() },
  body: String,
  private: { type: Boolean, default: false },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

const Post = mongoose.model("Post", postSchema);

export default Post;
