import express from 'express';
import cors from 'cors'
import dbConection from '../database/config.js';

class Server {
    constructor() {
        this.port = process.env.PORT;
        this.app = express();        
        this.dbConexion();
        this.middlewares();
        this.routes();
    }

    routes(){
        
    }

    async dbConexion(){
        await dbConection()
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.static('public'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        })
    }
}

export {Server}



