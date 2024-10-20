import { Router } from 'express';
import ArticlelRouter from 'src/plugins/articles/api/articlel.router';

const router = Router();

router.use('/articles', ArticlelRouter);

export default router;