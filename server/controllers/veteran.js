import vetModel from "../models/veteran.js";

export const login = async (req,res) => {
    const {email,password} = req.body;
    try {
        const found = await vetModel.findOne({email, password});
        if (!found) {
            return res.status(404).json("Invalid");
        }
        else{
            return res.status(200).json("Valid");
        }
    } catch (error) {
        res.status(404).json("Failed");
    }
};

export const signup = async (req,res) => {
    const {email,password,name,prevOccupation,age} = req.body;
    try {
        const result = await vetModel.create({email, password, name, prevOccupation, age});
        if (!result){
            return res.status(404).json("Unsuccessful");
        }
        else {
            res.status(200).json("Success");
        }
        
    } catch (error) {
        res.status(404).json("Failed");
    }
};

export const getAll = async (req,res) => {
    const vets = await vetModel.find();
    res.status(200).json(vets);
};