import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
    {
        categoryName: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        categorySlug: {
            type: String,
            required: true,
            unique: true,
            trim: true
        }
    },
    { timestamps: true }
);

export default mongoose.models.Category || mongoose.model('Category', categorySchema);

