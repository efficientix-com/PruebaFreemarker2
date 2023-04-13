// const fm = require('freemarker');
import fm from 'freemarker';
import fs from 'fs';
import path from 'path'
// const fs = require('fs');
// const path = require('path');

// Define los datos que se utilizarán en la plantilla
const data = {
  personas: {
    custbody_mx_cfdi_signature: "holi",
    custbody_mx_cfdi_sat_signature: "ahaa",
    custbody_mx_cfdi_sat_serial: "ahajhks",
    custbody_mx_cfdi_cadena_original: "asjakj",
    custbody_mx_cfdi_uuid: "asjakj",
    custbody_mx_cfdi_issuer_serial: "asjakj",
    Serie: "ahjhsdak",
    FolioResSat: "ahahjas",
    custbody_mx_cfdi_certify_timestamp: "asjakj",
    custbody_mx_cfdi_issue_datetime: "ajhdskad",
    cfdi_relResSat: '',
    uuid_ObtieneCFDI: "ahsjhd",
    custbody_mx_cfdi_qr_code: "ajhskahsa"
  }
};

const __dirname = path.dirname(new URL(import.meta.url).pathname);
// Configura el motor de plantillas Freemarker
const templates = new fm({
    // root:"C:\\Users\\NUEVOI~1\\Documents\\Development\\PruebaFreemarker\\templates",
    root: __dirname + '/templates',
//   root: path.join(__dirname, 'templates'),
  ext: '.ftl'
});
console.log("Plantilla direccion: ",templates)

// Renderiza la plantilla y escribe el resultado en un archivo
templates.render('personas.ftl', data, (err, xml) => {
  if (err) {
    console.error(err);
  } else {
    fs.writeFile('template6.xml', xml, err => {
      if (err) {
        console.error(err);
      } else {
        console.log('Archivo generado correctamente');
      }
    });
  }
});
