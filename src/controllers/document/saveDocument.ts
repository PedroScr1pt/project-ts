import { Request, Response } from 'express';
export const saveDocument = (req: Request, res: Response) => {

    try {
        console.log('Save Document')
        return res.status(200).json({ success: true, msg: "SaveDocument" })
    } catch (error) {
        console.log('Error: Backend')
        return res.status(400).json({ success: false, msg: "error en el controlador" })
    }
}