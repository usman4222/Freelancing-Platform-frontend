import { z } from "zod";

export const validationSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email format"),
  phone: z
    .string()
    .min(10, "Phone number must be 10 digits")
    .max(10, "Phone number must be 10 digits")
    .regex(/^\d+$/, "Phone number must contain only numbers"), 
  country: z.string().min(1, "Country selection is required"),
  state: z.string().min(1, "State selection is required"),
});
