import { Router } from 'express'
import authRouter from './auth/auth-router'
// other routers can be imported here

const globalRouter = Router()

globalRouter.use('/auth', authRouter)
// other routers can be added here

export default globalRouter
