import { S3 } from '@aws-sdk/client-s3'
import { Upload } from '@aws-sdk/lib-storage'

export const s3 = new S3({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
  }
})

export const listBuckets = async () =>
  await s3
    .listBuckets()
    .then((res) => res.Buckets)
    .catch((err) => console.log(`Error listing buckets: ${err.Code}`))

export const createBucket = async (Bucket: string) =>
  await s3
    .createBucket({ Bucket })
    .then((res) => console.log(res))
    .catch((err) => console.log(`Error creating a bucket: ${err.Code}`))

export const deleteBucket = async (Bucket: string) =>
  await s3
    .deleteBucket({ Bucket })
    .then((res) => console.log(res))
    .catch((err) => console.log(`Error deleting a bucket: ${err.Code}`))

export const uploadFile = async (Bucket: string, name: string, file: Buffer) =>
  await new Upload({
    client: s3,
    params: {
      Bucket,
      Key: name,
      Body: file,
      ACL: 'public-read'
    }
  })
    .done()
    .then((res) => console.log(res))
    .catch((err) => console.log(`Error uploading a file: ${err.Code}`))

export const updateFile = async (Bucket: string, name: string, file: Buffer) =>
  await s3
    .putObject({
      Bucket,
      Key: name,
      Body: file
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(`Error updating a file: ${err.Code}`))

export const deleteFile = async (Bucket: string, name: string) =>
  await s3
    .deleteObject({ Bucket, Key: name })
    .then((res) => console.log(res))
    .catch((err) => console.log(`Error deleting a file: ${err.Code}`))
