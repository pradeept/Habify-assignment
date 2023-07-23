import { useRef } from "react";
import useDropDown from "../../../hooks/useDropDown";
import { setTopics } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";

function TopicsDropDown() {
    const spanClasses = "cursor-pointer  p-1 hover:font-bold";
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => {
        return state.header.dropdowns.showTopics;
    });

    const categories = useSelector((state) => {
        return state.header.data.categories;
    });
    const divEl = useRef();

    const bodyClickHandler = () => {
        dispatch(setTopics());
    };
    useDropDown(divEl, bodyClickHandler);

    return (
        <div
            ref={divEl}
            className='border-y-2 border-t-orange-400 border-b-gray-300 absolute left-0 top-14 w-60 bg-white z-10'
        >
            {isOpen && (
                <div className='flex flex-col gap-1'>
                    <div className='grid grid-cols-2 grid-rows-3 p-4'>
                        {/* <div className='flex flex-col items-center gap-1 '> */}
                            <small className={spanClasses}>New</small>
                            <small className={spanClasses}>Unread</small>
                            <small className={spanClasses}>Groups</small>
                        {/* </div> */}
                        {/* <div className='flex flex-col items-center gap-1'> */}
                            <small className={spanClasses}>Users</small>
                            <small className={spanClasses}>Tags</small>
                            <small className={spanClasses}>Shortcuts</small>
                        {/* </div> */}
                    </div>
                    <div className='p-4'>
                        <small className='font-bold '>Categories</small>
                        <div className='grid-rows-7 grid grid-cols-2 gap-1'>
                            {categories.map((category,index) => {
                                return (
                                    <div className='flex cursor-pointer items-center gap-1 p-1 hover:font-bold' key={index}>
                                        <div
                                            className={`h-1 w-1 rounded-full ${category.color}`}
                                        ></div>
                                        {category.label}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TopicsDropDown;
