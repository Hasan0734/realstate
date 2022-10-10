import mongoose from 'mongoose';


const categorySchema = new mongoose.Schema(
    {
       
      properties: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property',
        required: true
      },
        _owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    { timestamps: true }
);


export default mongoose.models.Property || mongoose.model('Property', categorySchema);


