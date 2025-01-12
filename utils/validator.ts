
import { z } from 'zod';

export const userSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    role: z.string().min(1, 'Role is required'),
    salary: z
        .string()
        .min(1, 'Salary is required')
        .transform((value) => parseFloat(value)) // Convert to number
        .refine((value) => value > 0, 'Salary must be a positive number'),
    experience: z.enum(['Fresher', 'Experienced']),
});

export type UserFormValues = z.infer<typeof userSchema>;