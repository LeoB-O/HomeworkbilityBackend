module.exports = function (req, res, next) {
  res.data = {
    success: true,
    code: 200,
    msg: '',
    data: {}
  };
  res.sendData = () => res.send(res.data);
  next();
}