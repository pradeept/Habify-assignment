import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryMenu } from "../../../store/store";
import useDropDown from "../../../hooks/useDropDown";


function CategoriesDropDown(){

    const dispatch = useDispatch();
    const isOpen = useSelector((state) => {
        return state.navbar.dropdowns.showCategory;
    });

    const categories = useSelector((state) => {
        return state.navbar.data.categories;
    });
    const divEl = useRef();

    const bodyClickHandler = () => {
        dispatch(setCategoryMenu());
    };
    useDropDown(divEl, bodyClickHandler);

    return (
        <div
            ref={divEl}
            className='border-y-2 border-t-orange-400 border-b-gray-300 absolute left-0 top-14 w-60 bg-white'
        >
            {isOpen && (
                <div className='flex flex-col gap-1'>
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

export default CategoriesDropDown;