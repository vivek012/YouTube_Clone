import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    videoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
      required: true,
    },
    commentbody: {
      type: String
    },
    usercommented: {
      type: String
    },
    commentedon: {
      type: Date, default: Date.now
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("comment", commentSchema);