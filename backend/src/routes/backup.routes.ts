import { Router } from "express";
import backups  from "../controllers/backup.controller";

const router = Router();



router.get("/", backups.getBackups);
router.post("/new", backups.newBackup);
router.put("/:id", backups.updateBackup);


export default router;
