var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/empleados', function(req, res, next) {
 axios.get('http://dummy.restapiexample.com/api/v1/employees') // URL De un servicio de prueba gratuito.
 .then(function (response) {
   // La petición se ejecutó correctamente y tiene respuesta
   let total = 0;
   response.data.data.forEach(element => {
     total += parseFloat(element.employee_salary);
   });
   let promedio = total/response.data.data.length;
   res.status(200).json({message: promedio});
 })
 .catch(function (error) {
   // En caso de error
   console.log(error);
   res.status(400).json({message: 'error'});

 })
 .finally(function () {
   // Siempre se ejecutará
   console.log('Terminó la petición')
 });
});

module.exports = router;
