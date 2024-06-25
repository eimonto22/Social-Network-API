const { Schema } = require("mongoose");

//subdocument schema support
const reactionSchema = new Schema({
reactionId: {
    type: Schema.Types.ObjectId,
},
reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
},
username: {
    type: String,
    required: true,
},
createdAt: {
    type: Date,
    default: Date.now,
    get: formatDate,
},
});

function formatDate(date) {
return date.toLocaleDateString();
}

module.exports = reactionSchema;