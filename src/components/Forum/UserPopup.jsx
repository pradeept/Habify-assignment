import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowUserPopUp } from "../../store/store";
import useDropDown from "../../hooks/useDropDown";
import { BsPersonAdd } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import newBie from "../../assets/newBieVector.png";
import botVector from "../../assets/botVector.png";
import animalVector from "../../assets/animalVector.png";

function UserPopUp({ name }) {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => {
        return state.article.dropdowns.showUserPopUp;
    });

    const divEl = useRef();

    const bodyClickHandler = () => {
        dispatch(setShowUserPopUp());
    };
    useDropDown(divEl, bodyClickHandler);

    console.log(name);

    return (
        <div
            ref={divEl}
            className='absolute bottom-16 left-0 z-10 w-60 border-y-2 border-b-orange-400 border-t-gray-300 bg-white shadow'
        >
            {isOpen && (
                <div className='relative flex flex-col gap-2 p-4'>
                    <div className='absolute bottom-[80%] left-1/3 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-indigo-100   to-purple-500 text-3xl font-bold shadow-inner'>
                        {name[0]}
                    </div>
                    <div className='flex items-center justify-between px-3 py-2'>
                        <BsPersonAdd className='cursor-pointer' />
                        <BiMessageDetail className='cursor-pointer' />
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-lg text-slate-700'>{name}</p>
                        <small className='text-xs text-slate-400'>
                            Last Post 4 hours ago Joined Jun 1, 16
                        </small>
                    </div>
                    <hr></hr>
                    <div className='flex justify-around'>
                        <img src={newBie} alt='Badge 1' width='30px' />
                        <img src={botVector} alt='Badge 2' width='30px' />
                        <img src={animalVector} alt='Badge 3' width='30px' />
                    </div>
                    <hr />
                    <div className='flex items-center justify-around'>
                        <p className='text-xs'>
                            Threads <span className='text-slate-500'>1184</span>
                        </p>
                        <p className='text-xs'>
                            Posts <span className='text-slate-500'>5,863</span>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserPopUp;
