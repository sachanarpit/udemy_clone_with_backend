const post = (model)=> async (req,res) =>{
    try{
        const item = await model.create(req.body);
        return res.status(201).send(item);
    }
    catch (err){
        return res.status(400).send(err.message);
    }
}

const get = (model)=> async (req,res) =>{
    try{
        const item = await model.find().lean().exec()
        return res.status(200).send(item);
    }
    catch (err){
        return res.status(400).send(err.message);
    }
}

module.exports = (model) =>({
    post: post(model),
    get: get(model),
})