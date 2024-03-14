import {Router} from "express";


export const logginRoutes = Router()

logginRoutes.get('/', (req, res) => {
    res.json({message: 'Ruta de loggin'})
})
