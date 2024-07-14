import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import { espec } from "../swaggerDocs.js";

const router = Router();

router.use("/docs", swaggerUi.serve);
router.get("/docs", swaggerUi.setup(espec));

export default router;
