const ImageKit = require("@imagekit/nodejs").default


const client = new ImageKit({
   privateKey:process.env.IMAGE_KIT
}
)


async function uploadFile({buffer,filename,folder=""})
 {
   const file = await  client.upload({

     file: ImageKit.toFile(Buffer.from(buffer)),
    fileName:filename,
    folder
    }) 
 }



 module.exports = {uploadFile}