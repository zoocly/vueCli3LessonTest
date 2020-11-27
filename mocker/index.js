module.exports = {
  'GET /api/awsl':  (req, res) => {
    let obj = {
      code:0,
      data:{
        a:2,b:4
      }
    };
    setTimeout(() => {
      res.send(obj);
    }, 500);
  },
}