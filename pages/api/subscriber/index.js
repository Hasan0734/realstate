import nc from 'next-connect';
import Subscriber from '../../../models/Subscriber';
import db from '../../../utils/db';

const handler = nc();

handler.post(async (req, res) => {
    const {  email } = req.body;
    await db.connect();

    const subscriber = new Subscriber({
        email
    });

    if(await subscriber.save()){
        await db.disconnect();
        res.send({
            success: true,
            message: 'Successfully Subscribed'
        })
    }
});

export default handler;
