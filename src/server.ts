import { resolve } from 'path';
import express, { Response } from 'express';
import morgan from 'morgan';
import browserify from 'browserify-middleware';



const port = process.env.PORT || 8080;
const staticContent = resolve(__dirname + '/game/');
const app = express();

// middleware
app.use(morgan('combined'));

const setCSSHeaders = (res: Response<any>) => { res.setHeader('Content-Type', 'text/css'); };
// static
app.use(express.static(staticContent));
app.use(express.static(resolve(staticContent, '/styles'), { setHeaders: setCSSHeaders }));


// start
app.listen(port, () => {
    console.log('Server listening on %d', port);
    console.log('Serving static content from %s', staticContent)
})
