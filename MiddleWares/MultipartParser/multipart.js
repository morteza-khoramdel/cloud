inspect = require('util').inspect
const Busboy = require('busboy');
const fs = require('fs');

class Multipart {
    constructor() {
    }

    get parser() {
        return (req, res, next) => {
            const busboy = new Busboy({headers: req.headers});
            busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
                console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
                file.on('data', function (data) {
                    console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
                    if (req.data.fieldname === 'channel') {
                        fs.writeFile(process.env.SAVE_IMAGES_CHANNEL, data, function (err) {
                            console.log(err)
                        });
                        req.data.url = process.env.SAVE_IMAGES_CHANNEL + fieldname + req.dataVerify.email + '.png'
                    } else {
                        fs.writeFile(process.env.SAVE_IMAGES_USER, data, function (err) {
                            console.log(err)
                        });
                        req.data.url = process.env.SAVE_IMAGES_USER + req.dataVerify.email + '.png'

                    }
                });
                file.on('end', function () {
                    req.data.fieldname = fieldname

                    console.log('File [' + fieldname + '] Finished');
                });
            });
            busboy.on('field', function (fieldname, val) {
                console.log('Field [' + fieldname + ']: value: ' + inspect(val));
            });
            busboy.on('finish', function () {
                if (next !== undefined)
                    next()
            });
            req.pipe(busboy);

        }
    }
}

module.exports = Multipart