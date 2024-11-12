import { Outlet } from 'react-router-dom';

export const GuestLayout = () => {
    return (
        <div className='flex h-full'>
            <main className='grow'>
                <Outlet/>
            </main>
        </div>
    );
}