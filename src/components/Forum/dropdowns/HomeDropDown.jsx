import { useRef } from "react";
import DropDownPanel from "./DropDownPanel";
import { useSelector, useDispatch } from "react-redux";
import { setHomeMenu } from "../../../store/store";
import useDropDown from "../../../hooks/useDropDown";

function HomeDropDown({ options }) {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => {
        return state.header.dropdowns.showHomeMenu;
    });

    const divEl = useRef();

    const bodyClickHandler = () => {
        dispatch(setHomeMenu());
    };
    useDropDown(divEl, bodyClickHandler);

    const renderedOptions = options.map((option, index) => {
        return (
            <div className='cursor-pointer p-1 hover:bg-sky-100 ' key={index}>
                {option}
            </div>
        );
    });

    return (
        <div ref={divEl} className='relative w-48 bg-white z-10'>
            {isOpen && (
                <DropDownPanel className='absolute top-1  z-10 border-t-2 border-t-orange-400 text-sm'>
                    {renderedOptions}
                </DropDownPanel>
            )}
        </div>
    );
}

export default HomeDropDown;
