var express = require('express');
var router = express.Router();
var convertidor = require('convert-units');


router.post('/convertir', function(req, res, next) {
    let resultado = convertidor(req.body.unidad).from(req.body.uactual).to(req.body.ufinal);
    res.status(200).json({message: resultado+req.body.ufinal});
});

/** Para probarlo desde postman hacer una solicitud POST a la url localhost:3000/conertidor
 * con el siguiente cuerpo:
     {
        "unidad": 2.5,
        "uactual": "km",
        "ufinal": "m"
    }
 */

module.exports = router;
