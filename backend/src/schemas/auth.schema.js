import { email, z } from "zod";


//!loge 

export const loginSchema = z.object(
    {
        email : z
        .string()
        .trim()
        .toLowerCase()
        .email("Invalid email address"),

        password : z
        .string()
        .max(100, "Password is too long")
        .min(6 , "Password must be at least 6 characters")

    }
);

export const registerSchema = loginSchema.extend(
    {
        fullName : z
        .string()
        .trim()
        .min(2, "Full name must be at least 2 characters")
        .max(100, "Full name is too long"),
    }
);