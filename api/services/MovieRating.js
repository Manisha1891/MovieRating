var schema = new Schema({
    name: {
        type: String,

    },
    year: {
        type: Number,
        required: true,

    },
    genre: {
        type: String

    },
    synopsis: {
        type: String

    },
    rating: {
        default:1,
        type: Number
    }

});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('MovieRating', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    displayList: function(data,callback){

    
    MovieRating.find({
        
    }).sort({createdAt: 'descending'}).exec(function (err, found) {
        if (err) {
            callback(err, null);
        } else if (_.isEmpty(found)) {
            callback("noDataound", null);
        } else {
            callback(null, found);
        }
    });
}

};
module.exports = _.assign(module.exports, exports, model);