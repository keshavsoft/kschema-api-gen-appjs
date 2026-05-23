import express from 'express';

import { router as routerFromInsertToTally } from "./InsertToTally/endpoints.js";

const router = express.Router();

router.use('/InsertToTally', routerFromInsertToTally);

export { router };