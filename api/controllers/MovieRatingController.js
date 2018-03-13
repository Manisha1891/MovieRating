module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
displayList:function(req,res)
{
    console.log("sssssssssssssss");
    if(req.body){
        MovieRating.displayList(req.body, res.callback);

    }
    else{
        res.json({
            value:false,
            data:{
                message:"Invalid request"
            }
        });
    }
}


};
module.exports = _.assign(module.exports, controller);
