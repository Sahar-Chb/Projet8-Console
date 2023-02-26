const Console = require('../models/console');

const createConsole = async (req, res,filename) => {
  try {
    let data = req.body;
    let console = new Console(data);
    console.image = filename;

    let result = await console.save();
    res.send(result);
    
  } catch (error) {
    res.send(error)
  }
}

const getAllConsole = async (req, res) => {
  try {
    let result = await Console.find();
    res.send(result);

    
  }catch (error) {
    res.send(error)
  }
}

const byid = async (req, res) => {
  try {
    let id = req.params.id;
    let result = await Console.findById({ _id: id });
    res.send(result);
    
  }catch (error) {
    res.send(error)
  }
}

const update = async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;
    let result = await Console.findByIdAndUpdate({ _id: id }, data);
    res.send(result);

  } catch (error) {
    res.send(error)
  }
}



const deleteConsole = async (req, res) => {
  try {
    let id = req.params.id;
    let result = await Console.findByIdAndDelete({ _id: id });
    res.send(result);
    
  }catch (error) {
    res.send(error)
  }
}




module.exports = {
  createConsole,
  getAllConsole,
  byid,
  deleteConsole,
  update
}