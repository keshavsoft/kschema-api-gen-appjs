import express from 'express';
import { filterColumnsFunc } from "./FilterColumns/controller.js";
import { postFunc } from "./Insert/controller.js";

const tableName = "ItemsTable";

const router = express.Router();
router.post('/Insert', express.json(), (req, res) => postFunc({ req, res, inTableName: tableName }));
router.get('/FilterColumns', (req, res) => filterColumnsFunc({ req, res, inTableName: tableName }));

export { router };