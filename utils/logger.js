module.exports = async function (req, res, next) {
  let start = Date.now();
  await next();
  res.once('finish', () => {
    let duaration = Date.now() - start + 'ms';
    console.log(req.path, duaration);
  });
  res.once('close', () => {
    let duaration = Date.now() - start + 'ms';
    console.log(req.path, duaration);
  })
}