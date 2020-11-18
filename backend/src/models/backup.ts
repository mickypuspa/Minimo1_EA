import { model, Schema, Document } from 'mongoose';

export interface IBackup extends Document{
    date: number;
    direction: string;
    state: boolean;
    error: string;
    user: string;
}

const backupSchema = new Schema({
    date: {
        type: Number
    },
    direction: {
        type: String
    },
    state: {
        type: Boolean
    },
    error: {
        type: String
    },
    user: {
        type: String
    }
});

export default model <IBackup>('Backup', backupSchema);