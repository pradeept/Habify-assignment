import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTagMenu } from "../../../store/store";
import useDropDown from "../../../hooks/useDropDown";

function TagsDropDown() {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => {
        return state.navbar.dropdowns.showTags;
    });

    const tags = useSelector((state) => {
        return state.navbar.data.tags;
    });
    const divEl = useRef();

    const bodyClickHandler = () => {
        dispatch(setTagMenu());
    };
    useDropDown(divEl, bodyClickHandler);

    return (
        <div
            ref={divEl}
            className='absolute  top-14 w-60 border-y-2 border-b-gray-300 border-t-orange-400 bg-white z-10'
        >
            {isOpen && (
                <div className='flex flex-wrap items-center py-6 px-4'>
                    {tags.map((tag, index) => {
                        return (
                            <div
                                className=' cursor-pointer items-center gap-1 p-1 hover:font-bold'
                                key={index}
                            >
                                <div className={` rounded p-1 ${tag.color}`}>
                                    <small className='text-xs font-semibold text-slate-200'>
                                        {tag.label}
                                    </small>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default TagsDropDown;
