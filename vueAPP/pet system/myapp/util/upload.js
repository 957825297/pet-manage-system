const inspect = require('util').inspect
const path = require('path')
const os = require('os')
const fs = require('fs')
const Busboy = require('busboy')

/**
 * 同步创建文件目录
 * @param  {string} dirname 目录绝对地址
 * @return {boolean}        创建目录结果
 */
function mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname)
            return true
        }
    }
}

/**
 * 获取上传文件的后缀名
 * @param  {string} fileName 获取上传文件的后缀名
 * @return {string}          文件后缀名
 */
function getSuffixName(fileName) {
    let nameList = fileName.split('.')
    return nameList[nameList.length - 1]
}


function uploadFile(req, res, options) {
    let busboy = new Busboy({
        headers: req.headers
    })

    // 获取类型
    let fileType = options.fileType || 'common'
    let filePath = path.join(options.path, fileType)
    console.log(filePath)
    let moviePath = filePath.substring(filePath.indexOf(`/`))
    console.log(moviePath)
    let mkdirResult = mkdirsSync(filePath)

    return new Promise((resolve, reject) => {
        console.log('文件上传中...')
        let result = {
            success: false,
            message: '',
            data: null
        }

        let data = {};

        // busboy.on('field', function (fieldname, val) {
        //     data = JSON.parse(val)
        // });

        // 解析请求文件事件
        busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
            let fileName = Math.random().toString(16).substr(2) + '.' + getSuffixName(filename)
            let _uploadFilePath = path.join(filePath, fileName)
            let saveTo = path.join(_uploadFilePath)
            // 文件保存到制定路径
            file.pipe(fs.createWriteStream(saveTo))

            // 文件写入事件结束
            file.on('end', function () {
                result.success = true
                result.message = '文件上传成功'
                result.data = data;
                result.data.url = `${moviePath}/${fileName}`.replace(/\\/g, "/").replace("public", "")
                console.log('文件上传成功！')
                resolve(result)
            })
        })

        // 解析结束事件
        busboy.on('finish', function () {
            console.log('文件上结束')
            resolve(result)
        })

        // 解析错误事件
        busboy.on('error', function (err) {
            console.log('文件上出错')
            reject(result)
        })

        req.pipe(busboy)
    })

}

module.exports = {
    uploadFile
}