import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTopics } from "../../../store/store";
import useDropDown from "../../../hooks/useDropDown";
import { FaSearchengin } from "react-icons/fa";

function SearchDropDown({ options }) {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => {
        return state.header.dropdowns.showSearchTopics;
    });

    const divEl = useRef();

    const bodyClickHandler = () => {
        dispatch(setSearchTopics());
    };
    useDropDown(divEl, bodyClickHandler);

    return (
        <div ref={divEl} className='absolute right-0 top-16 w-48'>
            {isOpen && (
                <div className=' absolute top-1 z-10 w-full  border-b-2 border-t-2  border-t-orange-400 z-10 bg-white p-3 text-sm'>
                    <div className='flex cursor-pointer items-center gap-2 p-1 hover:bg-sky-100'>
                        <input type='checkbox' />
                        {options[0]}
                    </div>
                    <div className='flex cursor-pointer items-center gap-2 p-1 hover:bg-sky-100'>
                        <input type='checkbox' />
                        {options[1]}
                    </div>
                    <div className='flex cursor-pointer items-center gap-2 p-1 hover:bg-sky-100'>
                        <FaSearchengin />
                        {options[2]}
                    </div>
                </div>
                // <DropDownPanel className=''>

                // </DropDownPanel>
            )}
        </div>
    );
}

export default SearchDropDown;
