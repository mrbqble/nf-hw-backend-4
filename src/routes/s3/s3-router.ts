import { Router } from 'express'
import S3Controller from './s3-controller'
import S3Service from './s3-service'

const s3Router = Router()

const s3Service = new S3Service()
const s3Controller = new S3Controller(s3Service)

s3Router.post('/upload', s3Controller.UpdateFile)
s3Router.post('/update', s3Controller.UpdateFile)
s3Router.post('/delete', s3Controller.DeleteFile)

export default s3Router
