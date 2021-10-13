const mongoose = require('mongoose');
const { Schema } = mongoose;

// Traillers esquema, por ahora, un esquema de ejemplo 21/04/2021
const Tschema = new Schema({
    tittle: { type: String, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model('ToDo', Tschema);

