import logo from "../../assets/company-logo.png";
import { BiSearch, BiChevronDown } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdNotificationsOutline } from "react-icons/io";
import Avatar from "../commons/Avatar";
import {useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
    setHomeMenu,
    setNotifications,
    setSearchTopics,
    setTopics,
    setUserMenu,
} from "../../store/store";
import HomeDropDown from "./dropdowns/HomeDropDown";
import SearchDropDown from "./dropdowns/SearchDropDown";
import TopicsDropDown from "./dropdowns/TopicsDropDown";
import NotificationDropDown from "./dropdowns/NotificationDropDown";
import UserDropDown from "./dropdowns/UserDropDown";

function Header() {
    const [notificationCount, setNotificationCount] = useState(2);
    const dispatch = useDispatch();

    const {
        showHomeMenu,
        showSearchTopics,
        showTopics,
        showNotifications,
        showUserMenu,
    } = useSelector((state) => {
        return state.header.dropdowns;
    });

    const { home } = useSelector((state) => {
        return state.header.data;
    });

    const handleHome = () => {
        dispatch(setHomeMenu());
    };

    return (
        <div className='mx-20 '>
            <div className='grid grid-cols-9 items-center py-1 '>
                <div
                    className='relative col-start-1 col-end-3 mx-6 border-e-2 px-4'
                    onClick={handleHome}
                >
                    <img src={logo} alt='Company Logo' width='150px' />
                    {showHomeMenu ? <HomeDropDown options={home} /> : null}
                </div>

                <div className='relative col-start-3 col-end-7 flex h-full w-full items-center border-e-2 pr-4 text-slate-600'>
                    <BiSearch size='30px' className='mx-4 text-slate-600' />
                    <input
                        type='text'
                        placeholder='Search all forums'
                        className=' w-full text-lg text-slate-500 focus:outline-none'
                    />
                    <div className=' flex items-center justify-center gap-3'>
                        <p>Topics </p>
                        <BiChevronDown
                            size='25px'
                            className=''
                            onClick={() => dispatch(setSearchTopics())}
                        />
                        {showSearchTopics ? (
                            <SearchDropDown
                                options={[
                                    "Search titles only",
                                    "Show Resuts as Posts",
                                    "Advanced Search",
                                ]}
                            />
                        ) : null}
                    </div>
                </div>

                <div className='relative col-start-7 col-end-10 ms-4 flex items-center text-slate-600'>
                    <div className='flex cursor-pointer items-center gap-2'>
                        <p>Latest Topics</p>
                        <RxHamburgerMenu
                            className={showTopics ? "text-orange-500" : ""}
                            onClick={() => dispatch(setTopics())}
                        />
                    </div>

                    {showTopics ? <TopicsDropDown /> : null}

                    <div className='ms-8 flex items-center justify-around gap-4 '>
                        <div>
                            <div className='relative'>
                                <IoMdNotificationsOutline
                                    size='20px'
                                    className='cursor-pointer'
                                    onClick={() =>{ dispatch(setNotifications()); setNotificationCount(0)}}
                                />
                                {notificationCount > 0 ? (
                                    <div className='absolute left-[-5px] top-[-10px] h-4 w-4 rounded bg-red-600 text-center text-xs text-white'>
                                        {notificationCount}
                                    </div>
                                ) : null}
                            </div>

                            {showNotifications ? (
                                <NotificationDropDown />
                            ) : null}
                        </div>
                        <div className='flex  cursor-pointer items-center justify-around gap-4'>
                            <Avatar
                                letter={"A"}
                                classnames='bg-blue-800 text-white hover:bg-blue-500'
                            />
                            <p>azyrusmax</p>
                            <BiChevronDown
                                size='15px'
                                onClick={() => dispatch(setUserMenu())}
                            />
                            {showUserMenu ? <UserDropDown /> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
