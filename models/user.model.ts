import { Schema, model, models } from 'mongoose';


export interface IUser extends Document {
    _id: string;
    name: string;
    email: string;
    password: string;
    role: string;
    salary: number;
    experience: 'Fresher' | 'Experienced';
    createdAt: Date;
}



const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 characters"],
        select: false // whenever we fetch user data from DB , by default password will be excluded

    },
    role: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        enum: ['Fresher', 'Experienced'],
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date
    },

}, { timestamps: true });



const User = models.User || model<IUser>('User', userSchema);

export default User;
