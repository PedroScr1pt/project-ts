import express, { Application } from 'express'
import config from './config';
import morgan from 'morgan';
import routers from './routes';
import { database, logs } from './middleware';



class Server {
    private app: Application
    private port: string
    
    constructor() {
        this.app = express()
        this.port = config.server_port || "3000";
    }
    
    use(){ 
        this.app.use(logs);
        this.app.use(database);
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(morgan('dev'))
        this.app.use(routers)
       
        
        this.app.use((err: any, req: any, res: any, next: any) => {
            res.status(500).json({ error: err.message });
          });
      
    }
    
    listen() {
        this.app.listen(this.port, () => {
            try {
                console.log('server corriendo en', this.port)
            } catch (error) {
                console.log(error)
            }
        })
    }
}

export default Server
