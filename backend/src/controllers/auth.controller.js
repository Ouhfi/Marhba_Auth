
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import env from "../config/env.js";
import jwt from "jsonwebtoken";

//! ================================
//! register route
//! ================================

export const register = async(req, res) => {
    try{
        
          const { fullName, email, password } = req.body;

    console.log(fullName, email, password);
    
    const existingUser = await User.findOne({
         where: {
            email,
        }
    });

    if(existingUser)
    {
        return res.status(400).json(
            {
            message : " User already exists"
        }
    );
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
        console.error(error);
        
        return res.status(500).json({
            message : "Internal Server Error"
        });
    }
    // res.json({ 
    //     message: 'Register route' 
    // });
};

//! ================================
//! login route
//! ================================

export const login = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        message: "Email or password is incorrect",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Email or password is incorrect",
      });
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
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//! ================================
//! me route 
//! ================================

export const me = (req , res) => {
    res.json({
        message: 'Current User',
        user: req.user
    });
}

