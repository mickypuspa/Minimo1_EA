import {Request, Response} from 'express';
import backup from '../models/backup';
import Backup from "../models/backup";

const getBackups = async (req:Request, res:Response) => {
    
    try{
        const results = await Backup.find({});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(400).json(err);
    }
}

const newBackup = async (req:Request, res:Response) => {

    try{
        let backup = new Backup({
            "date": req.body.date,
            "direction": req.body.direction,
            "state" : req.body.state,
            "error" : req.body.error,
            "user" : req.body.user      
    });
    backup.save().then((data) => {
        return res.status(202).json(data);
    });
    } catch (err){
        return res.status(400).json(err);
    }
}

const updateBackup = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const date: number = req.body.number;
    const direction: string = req.body.direction;
    const state: string = req.body.state;
    const error: string = req.body.error;
    const user: string = req.body.user;

    backup.update({"_id": id}, {$set: {"date": date, "direction": direction, "state": state, 
                              "error": error, "user": user}}).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

export default { getBackups, newBackup, updateBackup};