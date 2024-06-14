import { Request, Response } from 'express'
import S3Service from './s3-service'

class S3Controller {
  private s3Service: S3Service

  constructor(s3Service: S3Service) {
    this.s3Service = s3Service
  }

  UploadFile = async (req: Request, res: Response): Promise<void> => {
    try {
      console.log(req.body)
      res.status(200).json({ message: 'File uploaded' })
    } catch (error) {
      res.status(500).json({ message: 'Error uploading file' })
    }
  }

  UpdateFile = async (req: Request, res: Response): Promise<void> => {
    try {
      console.log(req.body)
      res.status(200).json({ message: 'File updated' })
    } catch (error) {
      res.status(500).json({ message: 'Error updating file' })
    }
  }

  DeleteFile = async (req: Request, res: Response): Promise<void> => {
    try {
      console.log(req.body)
      res.status(200).json({ message: 'File deleted' })
    } catch (error) {
      res.status(500).json({ message: 'Error deleting file' })
    }
  }
}

export default S3Controller
