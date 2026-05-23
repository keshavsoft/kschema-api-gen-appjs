import express from 'express';

import { router as routerFromLedgerNames } from "./LedgerNames/end-points.js";
import { router as routerFromStockItems } from "./StockItems/end-points.js";

const router = express.Router();

router.use('/LedgerNames', routerFromLedgerNames);
router.use('/StockItems', routerFromStockItems);

export { router };