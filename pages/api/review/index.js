import nc from 'next-connect';
import Review from '../../../models/Review';
import db from '../../../utils/db';


const handler = nc();

handler.post(async (req, res) => {
    const { name, email, rating, body,  } = req.body;
    await db.connect();

    const review = new Review({
        name, email, rating, body
    });
    
    if(await review.save()){
        await db.disconnect();
        res.json({
            success: true,
            message: 'Review Added successfully'
        })
    }
});

export default handler;

