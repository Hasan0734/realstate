import nc from 'next-connect';
import Contact from '../../../models/Contact';
import db from '../../../utils/db';

const handler = nc();

handler.post(async (req, res) => {
    const { name, email, phone, role, message } = req.body;
    await db.connect();

    const contact = new Contact({
        name, email, phone, role, message
    });
    if(await contact.save()){
        await db.disconnect();
        res.send({
            success: true,
            message: 'Submitted successfully'
        })
    }
});

export default handler;
