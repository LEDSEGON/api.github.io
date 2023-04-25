/**
 * Book.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
nombres: { type: 'string',  },
cedula: { type: 'number', },
direccion: { type: 'string',  },
fecha_entrada: { type: 'string',columnType:'datetime' },
fecha_salida: { type: 'string', columnType:'datetime'},
telefono: { type: 'number', },
observacion: { type: 'string',  },
  },

};

