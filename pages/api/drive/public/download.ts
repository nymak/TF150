import { NextApiRequest, NextApiResponse } from 'next'
import { getDriveInstance, getDriveFile } from '../../../../utils/driveFiles'

const drive = getDriveInstance()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { fileId, fileName } = req.query
    const stream = await getDriveFile(fileId, drive)

    res.setHeader(
      'content-disposition',
      `attachment; filename="${fileName || fileId}"`
    )
    stream.pipe(res)
  } catch (error) {
    console.error('Error downloading file', error)
    res.status(500).json({ error: 'Failed to download file' })
  }
}
