import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserMenu } from "../../../store/store";
import useDropDown from "../../../hooks/useDropDown";
import {BsBookmark} from 'react-icons/bs';
import {BiMessageAltDetail} from 'react-icons/bi'
import {TiSpannerOutline} from 'react-icons/ti'
import {MdLogout} from 'react-icons/md'


function UserDropDown(){
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => {
        return state.header.dropdowns.showUserMenu;
    });

    const users = useSelector((state)=>{
        return state.header.data.user
    })

    const divEl = useRef();

    const bodyClickHandler = () => {
        dispatch(setUserMenu());
    };
    useDropDown(divEl, bodyClickHandler);

    return (
        <div
            ref={divEl}
            className='border-y-2 border-t-orange-400 border-b-gray-300 absolute right-0 top-14 w-60 bg-white z-10'
        >
            {isOpen && (
                <div className='flex flex-col gap-1'>
                    <div className="flex gap-2 justify-around p-3 py-5">
                        <BsBookmark />
                        <BiMessageAltDetail />
                        <TiSpannerOutline />
                        <MdLogout/>
                    </div>
                    <hr />
                    <div className="flex flex-col gap-2 my-3">
                        {
                            users.map((user)=>{
                                return <small className="px-2 text-gray-500 hover:font-bold">{user}</small>
                            })
                        }
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserDropDown;