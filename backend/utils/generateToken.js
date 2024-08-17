import jwt from "jsonwebtoken";

export const generateToken = (res, id) => {
    const token = jwt.sign({ userId: id }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'develpment',
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        sameSite: 'strict'
    })
}