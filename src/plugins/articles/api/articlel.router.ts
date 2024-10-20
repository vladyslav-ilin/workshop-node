import { Router } from 'express';

const articlesRouter = Router();

// const middleware = (_req: Request, _res: Response, next: NextFunction) => {
//   console.log("middlware");
//   next();
// }

// articlesRouter.use(middleware);

articlesRouter.get('/', (_req, res) => {
  res.send('Hello from articles');
});

export default articlesRouter;