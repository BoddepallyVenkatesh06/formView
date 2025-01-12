import Heading from '../../utils/Heading';
import Link from 'next/link';
import Image from 'next/image';
import { sidebarData } from '../../constants/sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col md:flex-row">

            {/* dynamic heading */}
            <Heading
                title={`Dashboard`}
                description=""
                keywords=""
            />


            <div className={`sticky w-[80%] md:w-[20%] h-[400px] bg-slate-800 bg-opacity-90 border border-[#ffffff1d] 
                             rounded-xl shadow-xl my-[80px] ml-[30px] `}
            >
                <nav className="w-full flex items-center justify-center gap-5 h-full bg-slate-80 ">
                    <ul className='w-full flex flex-col items-center font-medium '>
                        {
                            sidebarData.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.url}
                                    className={`w-full flex gap-3 hover:bg-slate-700 items-center px-3 py-4 `}
                                >
                                    <Image
                                        src={link.icon}
                                        alt="dashboard icon"
                                        width={25}
                                        height={25}
                                        className=''
                                    />
                                    <h5 className="pl-2 font-Poppins text-white">{link.name}</h5>
                                </Link>
                            ))
                        }
                    </ul>
                </nav>
            </div>

            <main className="w-full md:p-4">{children}</main>
        </div>
    );
}
