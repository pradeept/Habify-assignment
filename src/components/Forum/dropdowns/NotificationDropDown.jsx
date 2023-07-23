import { useRef } from "react";
import useDropDown from "../../../hooks/useDropDown";
import { setNotifications } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { BsReply } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import newBadge from "../../../assets/newBadge.png";

function NotificationDropDown() {
    const notification = "flex flex gap-2 p-2 items-center ";
    const notificationDesc = "text-sm text-center px-2 pb-3 border-b-2 border-b-gray-300";
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => {
        return state.header.dropdowns.showNotifications;
    });

    const divEl = useRef();

    const bodyClickHandler = () => {
        dispatch(setNotifications());
    };
    useDropDown(divEl, bodyClickHandler);

    return (
        <div
            ref={divEl}
            className='absolute left-0 top-14 w-60 border-y-2 border-b-gray-300 border-t-orange-400 bg-white z-10'
        >
            {isOpen && (
                <div className='flex flex-col gap-1'>
                    <div className='cursor-pointer hover:bg-gray-100'>
                        <div className={notification}>
                            <AiOutlineHeart />
                            <p className='font-bold'>Rosewell. 16 feb,17</p>
                        </div>
                        <div className={notificationDesc}>
                            Which movie have you watched recently?
                        </div>
                    </div>

                    <div className='cursor-pointer hover:bg-gray-100'>
                        <div className={notification}>
                            <BsReply />
                            <p className='font-bold'>Callis. 18 feb,17</p>
                        </div>
                        <div className={notificationDesc}>
                            I got an amazon thingie!
                        </div>
                    </div>
                    <div className='cursor-pointer hover:bg-gray-100'>
                        <div className={notification}>
                            <CiSettings />
                            <p className='font-bold'>Earned Badge. 19 feb,17</p>
                        </div>
                        <div className='flex justify-center'>
                            <img src={newBadge} alt='new badge' width='48px' />
                        </div>
                    </div>
                    <div className='cursor-pointer bg-slate-200 text-center font-semibold hover:bg-slate-300'>
                        View Older Notifications...
                    </div>
                </div>
            )}
        </div>
    );
}

export default NotificationDropDown;
