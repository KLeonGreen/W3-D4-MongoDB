import mongoose from "mongoose";

const { Schema, model } = mongoose;

const commentSchema = new Schema(
  {
    content: { type: "String", required: true },
    rate: { type: "Number", required: true },
    commentDate: { type: "Date" },
  },

  { timestamps: true }
);

const blogSchema = new Schema(
  {
    category: { type: "string", required: true },
    title: { type: "string", required: true },
    cover: { type: "string", required: false },

    comments: [commentSchema],
    content: { type: "string", required: true },
  },
  { timestamps: true }
);

export default model("blog", blogSchema);
