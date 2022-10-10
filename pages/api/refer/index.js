import nc from 'next-connect';
import Refer from '../../../models/Refer';
import db from '../../../utils/db';



const handler = nc();

handler.post(async (req, res) => {
    const {  _name, _phone, name_, phone_, message } = req.body;
    await db.connect();

    const refer = new Refer({
        _name, _phone, name_, phone_, message
    });

    if(await refer.save()){
        await db.disconnect();
        res.send({
            success: true,
            message: 'Reffered successfully'
        })
    }
});

export default handler;
