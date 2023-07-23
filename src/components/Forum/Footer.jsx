import {
    AiFillCloud,
    AiFillFacebook,
    AiFillGooglePlusCircle,
    AiOutlineTwitter,
} from "react-icons/ai";
import logo from "../../assets/company-logo.png";
import { BiRss } from "react-icons/bi";
import { SiGoogleearth } from "react-icons/si";

function Footer() {
    return (
        <div className='flex w-full flex-col justify-end bg-white text-slate-600 my-10'>
            <div className='flex items-center gap-4 px-32 py-5'>
                <a href='/'>
                    <img
                        src={logo}
                        alt='Company logo'
                        width='140px'
                        height='140px'
                    />
                </a>
                <a href='/support'>Support</a>
                <a href='/about'>About </a>
                <a href='/contact'>Contact Us</a>
                <a href='/team'>The Team</a>
            </div>
            <hr />
            <footer className='flex  items-center justify-around bg-white px-10 py-6 text-xs text-slate-600 '>
                <div className='flex items-center gap-3'>
                    <a href='/home'> &copy;2023 Emotional First Aid Academy </a>
                    <a href='/terms'>Terms</a>
                    <a href='/privacy'>Privacy</a>
                    <a href='/feedback'>Send Feedback</a>
                </div>
                <div className='flex items-center gap-3'>
                    <a href='/terms'>Terms</a>
                    <a href='/privacy'>Privacy</a>
                    <a href='/feedback'>Send Feedback</a>
                    <div className='flex flex-wrap justify-end gap-4'>
                        <AiFillFacebook
                            size='1.2rem'
                            className=' cursor-pointer'
                        />
                        <AiOutlineTwitter
                            size='1.2rem'
                            className=' cursor-pointer'
                        />
                        <AiFillGooglePlusCircle
                            size='1.2rem'
                            className=' cursor-pointer'
                        />
                        <SiGoogleearth
                            size='1.2rem'
                            className='cursor-pointer'
                        />
                        <AiFillCloud
                            size='1.2rem'
                            className=' cursor-pointer'
                        />
                        <BiRss size='1.2rem' className='cursor-pointer' />
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
