import mongoose from 'mongoose';


const commentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: true,
            trim: true
        },
        _time: {
            type: Date,
            required: true
        }
    },
    { timestamps: true }
);



const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true,
            trim: true
        },
        category: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Category', 
            required: true  
        },
        tags: {
            type : Array , 
            default : []
        },
        image: {
            type: String
        },
        comments: [commentSchema]
    },
    { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model('Blog', blogSchema);

