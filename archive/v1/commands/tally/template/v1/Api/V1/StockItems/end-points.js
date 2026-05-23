import express from 'express';
import { getFunc } from "./ShowAll/controller.js";

const tableName = "StockItems";

const router = express.Router();
router.get('/ShowAll', (req, res) => getFunc({ res, inTableName : tableName}));

export { router };