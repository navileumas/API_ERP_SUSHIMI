import express from 'express';
import cors from 'cors';
import { logginRoutes } from './src/routes/loggin.js';

const app = express();

//CONFIGURACION
app.disable("x-powered-by");
app.use(express.urlencoded({ extended: true }));
app.use(cors())

//RUTAS API
app.use('/login', logginRoutes)


app.use((req, res) =>{
    res.send('PAGINA NO ENCONTRADA')
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
    console.log(`Servidor listo en el puerto: ${PORT}`)
})