import bg from '../../assets/bg-circle.png';
import companyLogo from '../../assets/company-logo.png';
import Form from './Form';

function Header(){
    return  <div className='relative flex justify-center'>
                <img src={bg} alt="background-vector" className='w-[70%] m-auto'/>
                <div className='absolute top-24'>
                    <img src={companyLogo} alt="logo" width="150px"/>
                    <hr className='mt-3'/>         
                </div>
                <div className='absolute top-48 w-1/3 flex flex-col justify-center text-center'>
                    <h2 className='text-slate-700'>Crate a Emotional First Aid - Enabler Account</h2>
                    <p className='text-xs text-slate-500'>By signin up you can start posting, replying to topics, earn badges, favorite, vote topics and many more.</p>
                </div >

            </div>
            

}

export default Header;