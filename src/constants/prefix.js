export const IP = 'http://192.168.1.127:5003'

// 项目前缀
export const CONTEXTPATH = '/v0.1'

let upload = `//${location.hostname}:${location.port}${CONTEXTPATH}/uploadFile`

if (process.env.NODE_ENV === 'production') {
  // preffix = 'http://192.168.1.121:5004'
  upload = `${CONTEXTPATH}/uploadFile`
}

// 上传的路径
export const UPLOAD_ADDRESS = upload

let download = `//${location.hostname}:${location.port}${CONTEXTPATH}/fileDownload`
if (process.env.NODE_ENV === 'production') {
  // preffix = 'http://192.168.1.121:5004'
  download = `${CONTEXTPATH}/fileDownload`
}

// 下载路径
export const DOWNLOAD_ADDRESS = download

