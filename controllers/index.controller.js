const { getBuckets } = require('../helpers/s3');

const index = async (req, res) => {
    const data = await getBuckets(); //Method Async
    console.log(data.Buckets); //list of bucket

    //res.send(data.Buckets);

    res.render('index', {
        buckets: data.Bucketsv //Objet => list of bucket
    });
};

module.exports = {
    index
}