import authRoutes from "./auth/authRoutes"
import pacientRoutes from './pacient/pacientRoutes'


const routes = require('express').Router();

routes.use("/auth", authRoutes)
routes.use("/data", pacientRoutes)


export default routes;