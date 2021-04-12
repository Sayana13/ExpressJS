import express from "express"
import errorHandler from "./modules/core/errorHandler";
import logger from "./modules/core/logger";
import bodyParser from "body-parser";
import parseResponse from "./modules/core/parseResponse";
import cors from "./modules/core/cors";
import routes from "./modules/core/routes";

const app = express();
const PORT = 5000;

logger(app);
parseResponse(app);
cors(app);
routes(app);
// app.get('/', home);
// app.post('/info', info);

errorHandler(app);


app.listen(PORT, () => {
  console.log(`The example app listening at http://localhost:${PORT}`);
});
