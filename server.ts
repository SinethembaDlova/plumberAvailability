import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as session from 'express-session';

export class Server {
  //Sever

    public app: express.Application;
    constructor() {

        this.app = express();
        this.config();
        //this.routes();
    }

    public config() {
        //setup mongoose
        const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/registration_type";

        mongoose.connect(mongoURL);
        //config my dependencies
        this.app.set('view engine', 'hbs');
        this.app.use(express.static('public'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(session({
            secret: 'keyboard cat',
            cookie: {
                maxAge: 6000 * 30
            }
        }));

        //run Server
        const port = process.env.PORT || 7000;
        this.app.listen(port, () => console.log("Server running on port: " + port));

    }
}
