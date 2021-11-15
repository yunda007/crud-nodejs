const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM customer', (err, inicio) => {
     if (err) {
      res.json(err);
     }
     res.render('inicio', {
        data: inicio
     });
    });
  });
};

module.exports = controller;
