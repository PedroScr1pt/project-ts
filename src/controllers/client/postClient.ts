import { BaseRequest } from "middleware";
import { Client, postClientDA } from "../../data-access";
import Jwt from "jsonwebtoken";
export const postclient = async (req: BaseRequest, res: any) => {
    try {
        const { db, body } = req;

        const client: Client = {
            name: body?.name
        };

        const clientID = await postClientDA(db, client);

        const token: string = Jwt.sign({ _id: clientID }, process.env.JWT_SECRET || 'local');
        return res.json({ response: true, token })
    } catch (error) {
        return res.status(400).json({ success: false, "msg": error })
    }
}