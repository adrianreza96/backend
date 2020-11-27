
import * as neweggAPI from '../controllers/newegg-api.controller';
import axios from 'axios';
import querystring from 'querystring';
const router = express.Router();


router.get("/", neweggAPI.checkAllProducts );
router.get("/:id",neweggAPI.findByProductId );
router.get("/test",neweggAPI.deleteAll );

module.exports = router;

import * as express from "express";
import pgPromise from "pg-promise";

export const register = ( app: express.Application ) => {
    const oidc = app.locals.oidc;
    const port = parseInt( process.env.PGPORT || "5432", 10 );
    const config = {
        database: process.env.PGDATABASE || "postgres",
        host: process.env.PGHOST || "localhost",
        port,
        user: process.env.PGUSER || "postgres"
    };

    const pgp = pgPromise();
    const db = pgp( config );

    app.get( `/api/newegg/all`, neweggAPI.checkAllProducts);

    app.post( `/api/newegg/:id`, );

    
};