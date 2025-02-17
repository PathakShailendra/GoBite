import userModel from '../models/user.model';
import bcrypt from 'bcryptjs';

export async function registerUserController(req, res, next) {
    try {
        const { name, email, password } = req.body;
        if(!name || !email || !password) {
            return res.status(400).json({
                message: 'All fields are required',
                error: true,
                success : false,
            })
        }
        const existingUser = await userModel.findOne({ email });
        if(existingUser) {
            return res.status(400).json({
                message: 'Email already exists',
                error: true,
                success : false,
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new userModel({
            name,
            email,
            password: hashedPassword
        });
        await user.save();
    }
    catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success : false,
        })
    }
}