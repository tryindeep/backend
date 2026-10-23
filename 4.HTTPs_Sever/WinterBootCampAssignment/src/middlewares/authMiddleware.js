import jwt from "jsonwebtoken"
import { JWT_AUTH_SECRET } from "../../config.js";
import { findUserById } from "../sqlQueries/auth.Queries.js";

export const authMiddleware = async (req , res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).json({
            message : "Unauthorized"
        });
    }
    try {
        const verifiedUser = jwt.verify(token, JWT_AUTH_SECRET);

        const user = await findUserById(verifiedUser.id);
        if(!user){
            return res.status(401).json({ message : "Unauthorized" });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({
            message : "Unauthorized"
        });
    }
}

