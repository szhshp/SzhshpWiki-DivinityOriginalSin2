import Cors from "cors";

const initMiddleware =
  (middleware) =>
  (req, res): Promise<any> =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });

/**
 * @name cors
 * @description CORS middleware
 * @see https://github.com/expressjs/cors#configuration-options
 */
export const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "OPTIONS"],
    origin: ["http://szhshp.org", "https://szhshp.org"],
  })
);
