export interface IUserBody {
    name: string;
    email: string;
    role: string;
    experience: 'Fresher' | 'Experienced';
    password: string;
    salary: number;
    createdAt: Date;
    updatedAt: Date;
}



