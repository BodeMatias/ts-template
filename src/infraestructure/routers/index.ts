import type { Request, Response, Express } from "express";

export default (app: Express): void => {
  app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello World!");
  });
};
