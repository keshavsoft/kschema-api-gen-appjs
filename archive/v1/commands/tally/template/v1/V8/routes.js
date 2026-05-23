import express from 'express';
import { router as routerFromBillsTable } from "./BillsTable/routes.js";

const router = express.Router();

router.use('/BillsTable', routerFromBillsTable);

export { router };