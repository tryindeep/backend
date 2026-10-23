import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { createUser, findUserByUsername } from "../sqlQueries/auth.Queries.js";
import { signinSchema, signupSchema } from "../validators/user.validator.js";
import { JWT_AUTH_SECRET } from "../../config.js";


export const authController =
{
    //signup
    signup: async (req, res) => {
        try {
            // validate input 
            const parsed = signupSchema.safeParse(req.body);
            if (!parsed.success) {
                return res.status(400).json({
                    message: "Incorrect Format",
                    error: parsed.error
                })
            }

            const { username, password } = parsed.data;

            // checking user is exists
            const existingUser = await findUserByUsername(username);
            if (existingUser) {
                return res.status(409).json({
                    message: "User already Exits"
                })
            }

            // hashing password 
            const hashedPassword = await bcrypt.hash(password,10);

            await createUser(username, hashedPassword);

            res.status(201).json({ message: "User Registered SucessFully" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "Internal Serever Error"
            });
        }
    },

    // signin
    signin : async (req , res) => {
        try {
             // validate input 
            const parsed = signinSchema.safeParse(req.body);
                if (!parsed.success) {
                    return res.status(400).json({
                        message: "Incorrect Format",
                        error: parsed.error
                    })
                    
                }

                const { username, password } = parsed.data;

                const foundUser = await findUserByUsername(username);

                if(!foundUser){
                    return res.status(403).json({
                        message : "User Doesn't Exits, Please SignUp !!"
                    })
                }

                const passwordMatched = await bcrypt.compare(password , foundUser.password);

                if(passwordMatched) {
                    const token = jwt.sign({id:foundUser.id} , JWT_AUTH_SECRET , {expiresIn: '2h'});

                    return res.json({
                        token : token
                    })
                }else {
                    return res.status(403).json({
                        message : "Incorrect Credentials"
                    })
                }
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
    }
}

