import mongoose from 'mongoose';

const referSchema = new mongoose.Schema(
    {
        _name: {
            type: String,
            required: true,
            trim: true
        },
        _phone: {
            type: String,
            required: true,
            trim: true
        },
        name_: {
            type: String,
            required: true,
            trim: true
        },
        phone_: {
            type: String,
            required: true,
            trim: true
        },
        message: {
            type: String,
            required: true,
            trim: true
        }
    },
    { timestamps: true }
);

export default mongoose.models.Refer || mongoose.model('Refer', referSchema);

