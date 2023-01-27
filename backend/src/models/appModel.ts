// Libs
import crypto from 'crypto';
import helmet from 'helmet';
import Express from 'express';
import session from 'express-session';
import { createServer, Server } from 'https';

import router from '@router';
import CertModel from '@models/certModel';

// Classes
/**
 * A class to manipulate the https server.
 */
class AppModel {
    /**
     * A method to init the server
     */
    public static getServer(): Server {
        // Create the https server.
        const server = createServer({
            key: CertModel.getKey(),
            cert: CertModel.getCert()
        }, this.createApp());
        return server;
    }

    /**
     * A method to create the express app.
     */
    private static createApp(): Express.Express {
        // Create the app.
        const app = Express();

        // App Options
        app.use(Express.json());

        app.set("view engine", "ejs");
        app.set("views", "src/views/");

        app.use(helmet({
            crossOriginEmbedderPolicy: false,
            contentSecurityPolicy: false
        }));

        app.use(
            session({
            secret: crypto.randomBytes(30).toString('hex'),
            cookie: { secure: true },
            saveUninitialized: false,
            resave: true,
            })
        );

        // Return
        app.use(router);
        return app;
    }
}

// Code
export default AppModel;