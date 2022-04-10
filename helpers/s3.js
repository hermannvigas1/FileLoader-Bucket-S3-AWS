const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');//convert to base64 (image)

const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

//Create to Object of class S3
const storage = new S3({
    region,
    accessKeyId,
    secretAccessKey
});

//Return list of  bucket all 
const getBuckets = () => {
    return storage.listBuckets().promise(); //Method Async
};

//Laod file to  => S3 bucket 
const uploadToBucket = (bucketName, file) => {
    const stream = fs.createReadStream(file.tempFilePath);

    //var params = {Bucket: bucketName, Key: file.originalname, Body: stream};
    const params = {
        Bucket: bucketName,
        Key: file.name, //can be encrypted
        Body: stream
    };
    return storage.upload(params).promise();//Method Async
};

module.exports = { getBuckets, uploadToBucket };