import {
    AiFillFacebook,
    AiFillGooglePlusCircle,
    AiOutlineTwitter,
    AiFillCloud,
} from "react-icons/ai";
import { SiGoogleearth } from "react-icons/si";
import { BiRss } from "react-icons/bi";
import CheckBox from "./CheckBox";
import { useState } from "react";
import Modal from "../commons/Modal";
import { useNavigate } from "react-router-dom";

function Categories() {
    const navigate = useNavigate()
    const values = [
        "Selecte All",
        "Mental Health",
        "MH Tips",
        "Support",
        "Enabler",
        "Exchange",
        "Art",
        "Q&A's",
        "Social",
        "Music",
        "Science",
        "Random",
        "Pets",
        "Education",
        "Video",
    ];
    const [selectAll, setSelectAll] = useState(false);

    const handleSelectAll = () => {
        setSelectAll((prev) => !prev);
    };

    //For showing account creation modal.
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        // setShowModal(true);
        navigate('/home')
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <button primary onClick={handleClose}>
                Ok
            </button>
        </div>
    );

    return (
        <>
            <div className='flex  w-[90%] flex-col flex-wrap gap-4 bg-white px-10 pb-10 md:w-3/5'>
                <div className='mt-10  flex items-center'>
                    <h5 className='inline font-bold text-slate-600'>
                        Interested Categories (OPTIONAL)
                    </h5>
                    <div className='relative grid h-10 w-1/2 grid-rows-1 items-center '>
                        <div className='row-span-1 border-b-2 border-dotted border-b-green-200'></div>
                    </div>
                </div>
                <div>
                    <span className='text-sm text-slate-400'>
                        Categories I am interested in
                    </span>
                </div>
                <div className='grid grid-cols-1 gap-6 text-slate-600 md:grid-cols-4'>
                    {values.map((value, index) => {
                        return (
                            <CheckBox
                                option={value}
                                isChecked={selectAll}
                                key={index}
                                id={index}
                                handleChange={handleSelectAll}
                            ></CheckBox>
                        );
                    })}
                </div>
                <div className='mt-10 flex flex-wrap text-slate-600 md:justify-around'>
                    <div className='flex items-center gap-4'>
                        <input type='checkbox' />
                        <span className='text-sm'>
                            I agree to Terms and Conditions
                        </span>
                    </div>
                    <div className='flex items-center gap-4'>
                        <input type='checkbox' />
                        <span className='text-sm'>Subscribe to newsletter</span>
                    </div>
                </div>
                <div>
                    <button
                        className='block w-full bg-red-600 py-3 text-white hover:bg-red-800'
                        onClick={handleClick}
                    >
                        Create New Account
                    </button>
                </div>
                {showModal && (
                <Modal onClose={handleClose} actionBar={actionBar}>
                    <p>Here is an agreement for you to accept</p>
                </Modal>
            )}
            </div>
            <footer className='flex w-[90%] flex-wrap items-center justify-center gap-6 bg-white px-10  pb-10 text-xs text-slate-600 md:w-3/5'>
                <a href='/terms'>Terms</a>
                <a href='/privacy'>Privacy</a>
                <a href='/feedback'>Send Feedback</a>
                <div className='flex flex-wrap gap-4'>
                    <AiFillFacebook size='1.2rem' />
                    <AiOutlineTwitter size='1.2rem' />
                    <AiFillGooglePlusCircle size='1.2rem' />
                    <SiGoogleearth size='1.2rem' />
                    <AiFillCloud size='1.2rem' />
                    <BiRss size='1.2rem' />
                </div>
            </footer>
            
        </>
    );
}

export default Categories;
