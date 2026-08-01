
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import env from "../config/env.js";
import jwt from "jsonwebtoken";

//! ================================
//! register route
//! ================================

export const register = async(req, res , next) => {
    try{
        
          const { fullName, email, password } = req.body;

    // console.log(fullName, email, password);
    
    const existingUser = await User.findOne({
         where: {
            email,
        }
    });

   if (existingUser) {
  const error = new Error("User already exists");
  error.status = 400;
  return next(error);
}
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await  User.create(
        {
            fullName,
             email,
            password :hashedPassword
        }
    );

    return res.status(201).json(
        {
            message : "User created successfully",
             user: {
                    id: user.id,
                    fullName: user.fullName,
                    email: user.email,
                },
        }
    );

    } catch (error) {
        next(error);
        
       
    }
    // res.json({ 
    //     message: 'Register route' 
    // });
};

//! ================================
//! login route
//! ================================

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });
    // console.log(user);

    if (!user) {
      const error = new Error("Email or password is incorrect");
      error.status = 401;
      return next(error);
    }

    //?check if password is valid
    // console.log(password);
    // console.log(user.password);

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );

    // // console.log(isPasswordValid);

    if (!isPasswordValid) {
      const error = new Error("Email or password is incorrect");
      error.status = 401;
      return next(error);
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      env.jwt.secret,
      {
        expiresIn: env.jwt.expiresIn,
      }
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
      },
    });

  } catch (error) {
    next(error);
  }
};

//! ================================
//! me route 
//! ================================

export const me = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: {
        exclude: ["password"],
      },
    });

    if (!user) {
      const error = new Error("User not found");
      error.status = 404;
      return next(error);
    }

    return res.status(200).json({
      user,
    });
  } catch (error) {
    next(error);
  }
};

