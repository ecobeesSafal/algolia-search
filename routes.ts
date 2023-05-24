import { Router } from "express";
import {
  createActivity,
  getAllActivity,
  //   searchActivity,
} from "./controller/activity";

import { search } from "./config/algoliaInit";

const router = Router();

router.get("/getAll", getAllActivity);
router.get("/search", search);
router.post("/post", createActivity);

export default router;
