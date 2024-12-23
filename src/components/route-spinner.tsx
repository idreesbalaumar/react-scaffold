
import { app_logo } from '@/assets';
import { Spinner } from './ui/spinner';

function RouterSpinner() {
    return (
        <>
            <div className='h-screen flex items-center justify-center dark:bg-[#030712]'>
                <div>
                    <div className='flex justify-center'>
                        <img src={app_logo} alt="App Title Logo" className='w-16' />
                    </div>
                    <div className='text-center text-primary'>
                        <p className='text-xl mb-3 font-semibold'>App Title</p>
                        <div className='flex justify-center'>
                            <Spinner size={40} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RouterSpinner;