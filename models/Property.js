import mongoose from 'mongoose';


const categorySchema = new mongoose.Schema(
    {
        propertyCategory: {
            type: String,
            required: true,
            trim: true,
        },
        propertyType: {
            type: String,
            required: true,
            trim: true,
        },
        bedrooms: {
            type: Number,
            required: true,
        },
        bathrooms: {
            type: Number,
            required: true,
        },
        bikeParking: {
            type: Number,
            required: true
        },
        carParking: {
            type: Number,
            required: true
        },
        carpetArea: {
            type: Number,
            required: true
        },
        superArea: {
            type: Number,
            required: true
        },
        houseNumber: {
            type: String,
            required: true,
            trim: true
        },
        areaName: {
            type: String,
            required: true,
            trim: true
        },
        state: {
            type: String,
            required: true,
            trim: true
        },
        societyName: {
            type: String,
            required: true,
            trim: true
        },
        city: {
            type: String,
            required: true,
            trim: true
        },
        pinCode: {
            type: String,
            required: true,
            trim: true
        },
        floorNo: {
            type: String,
            required: true,
            trim: true
        },
        facing: {
            type: String,
            required: true,
            trim: true
        },
        furnishedStatus: {
            type: String,
            required: true,
            trim: true
        },
        availability: {
            type: String,
            required: true,
            trim: true
        },
        totalFloors: {
            type: String,
            required: true,
            trim: true
        },
        balconies: {
            type: String,
            required: true,
            trim: true
        },
        ageConstruction: {
            type: String,
            required: true,
            trim: true
        },
        tenantsPreferred: {
            type: String,
            required: true,
            trim: true
        },
        vegPermission: {
            type: String,
            required: true,
            trim: true
        },
        petsPermission: {
            type: String,
            required: true,
            trim: true
        },
        amenities: {
            type: Array
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        monthlyRent: {
            type: Number,
            required: true
        },
        maintenanceCharges: {
            type: Number,
            required: true
        },
        securityAmount: {
            type: Number,
            required: true
        },
        basis: {
            type: String,
            required: true
        },
        images: {
            type: Array,
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


