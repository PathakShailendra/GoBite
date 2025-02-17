import userModel from '../models/user.model';
import bcrypt from 'bcryptjs';
import sendEmail from '../config/sendEmail.js';
import verifyEmailTemplate from '../utils/verifyEmailTemplate.js';

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
        const save = await user.save();
        const verifyEmailUrl = `${process.env.FRONTEND_URL}/verify-email?code=${save._id}`
        const verifyEmail = await sendEmail({
            sendTo : email,
            subject : 'Verify email from GoBite',
            html: verifyEmailTemplate({
                name,
                url: verifyEmailUrl
            })
        })
        return res.json({
            message: 'User created successfully',
            success: true,
            error: false,
            data : save
        })
    }
    catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success : false,
        })
    }
}