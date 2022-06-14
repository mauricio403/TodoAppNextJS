import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../database";
import { Entry } from "../../models";
import { seedData } from '../../database/seed-data';

type Data = {
    message: string;
}

export default async function hanlder(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (process.env.NODE_ENV === 'production') {
        return res.status(401).json({
            message: 'No tiene acceso a esta API'
        })

    }

    await db.connect();

    await Entry.deleteMany();
    await Entry.insertMany( seedData.entries );



    await db.disconnect();



    res.status(200).json({
        message: 'API funcionando'
    })
}