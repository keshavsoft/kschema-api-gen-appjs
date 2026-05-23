import express from 'express';
import { postFunc } from "./Insert/controller.js";
import { findFunc } from "./Find/controller.js";

const tableName = "BillsTable";

const router = express.Router();
router.get('/Find/:pk', (req, res) => findFunc({ req, res, inTableName: tableName }));
router.post('/Insert', express.json(), (req, res) => postFunc({ req, res, inTableName: tableName }));

export { router };