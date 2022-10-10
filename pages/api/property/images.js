import nc from 'next-connect';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';
import { isAuth } from '../../../utils/auth';


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
  
export const config = {
    api: {
        bodyParser: false,
    },
};

const handler = nc();
const upload = multer();

handler.use(isAuth, upload.array('image')).post(async (req, res) => {

    const streamUpload = (file) => {
        return new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream((error, result) => {
                if (result) {
                    resolve(result);
                } else {
                    reject(error);
                }
            });
            streamifier.createReadStream(file.buffer).pipe(stream);
        });
    };

    let images=[]; 
    const files = req.files;
    for (const file of files) {
        const image = await streamUpload(file);
        images.push(image.secure_url);
    }

    res.send(images);

});

export default handler;
