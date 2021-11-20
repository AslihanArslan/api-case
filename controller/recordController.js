const Record = require('../models/record');

exports.getRecordsResponse = (req, res) => {
  let { startDate, endDate, minCount, maxCount } = req.body;

  Record.aggregate([
    {
      $project: {
        "_id" : 0, 
        key : 1,
        createdAt: 1,
        totalCount: { 
            "$sum": "$counts" 
        } 
      }
    },
    {
      $match: {
        $and: [
            {
                totalCount: { 
                    $gt: minCount, 
                    $lt: maxCount 
                }
            },
            {
                createdAt: {
                    $gte: new Date(startDate), 
                    $lte: new Date(endDate)
                }
            }
        ]
        
      }
    }
  ])
    .exec()
    .then(data => {
      res.status(200).json({
        code: 0,
        msg: 'Success',
        records: data
      });
    })
    .catch(err => {
      res.status(500).json({
        code: 1,
        msg: 'Internal server error.'
      });
    });
};
