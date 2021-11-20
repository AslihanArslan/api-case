module.exports.requestParamsValidCheck = function (req, res, next) {
    let { startDate, endDate, minCount, maxCount } = req.body;
  
    if (startDate == null || endDate == null || minCount == null || maxCount == null) {
      res.status(500).json({
        code: 1,
        msg: "missing parameters",
      });
      return;
    }
  
    if (typeof minCount != "number" || typeof maxCount != "number") {
      res.status(500).json({
        code: 2,
        msg: "minCount, maxCount must be a number.",
      });
      return;
    }
  
    if (minCount > maxCount) {
      res.status(500).json({
        code: 3,
        msg: "maxCount should be bigger than minCount",
      });
      return;
    } else next();
  };
  