

import { UserTable } from '../../components/table/UserTable'
import { IUserBody } from "../../../types/user.type"

// Server-side data fetching in the page component
const fetchAllUsers = async (): Promise<IUserBody[]> => {
    const apiUrl: string = process.env.NODE_ENV === 'production'
        ? (process.env.PRODUCTION_API_URL as string) : 'http://localhost:3000/api/user';  // Development URL

    const response = await fetch(apiUrl, { cache: 'no-store' });

    const users = await response.json();
    return users?.allUsers || [];
}



export default async function ViewSSRPage() {

    // Fetch the data server-side during the request
    const allUsers = await fetchAllUsers();
    // console.log("allUsersdata = ", allUsers)  
    console.log("Hello from server")

    return (
        <div className='p-5 text-white  '>
            <h1 className='text-3xl font-bold text-yellow-500 '>
                All Users Data (SSR)
            </h1>

            {/* render table */}
            <UserTable data={allUsers} />

        </div>
    );
}
