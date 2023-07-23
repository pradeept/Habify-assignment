import { RiArrowDropDownLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryMenu, setTagMenu } from "../../store/store";
import CategoriesDropDown from "./dropdowns/CategoriesDropDown";
import TagsDropDown from "./dropdowns/TagsDropDown";

function NavBar() {
    const dispatch = useDispatch();

    const { showCategory, showTags } = useSelector((state) => {
        return state.navbar.dropdowns;
    });

    return (
        <div className='flex items-center gap-6 py-6 text-slate-600'>
            <div className='relative'>
                <div className='flex items-center gap-3'>
                    <div
                        className='flex items-center bg-gray-200 px-2 py-1 '
                        onClick={() => dispatch(setCategoryMenu())}
                    >
                        <button className='bg-gray-200 '>All Categories</button>
                        <RiArrowDropDownLine />
                        {showCategory ? <CategoriesDropDown /> : null}
                    </div>
                    <div
                        className='flex items-center bg-gray-200 px-2 py-1 '
                        onClick={() => dispatch(setTagMenu())}
                    >
                        <button className='bg-gray-200 '>Tags</button>
                        <RiArrowDropDownLine />
                        {showTags ? <TagsDropDown /> : null}
                    </div>
                </div>
            </div>

            <div className='flex items-center gap-4 '>
                <p className='border-b-2 border-b-orange-400'>Latest</p>
                <p>Unread</p>
                <p>Rising</p>
                <p>Most Liked</p>
                <p>Follow Feed</p>
            </div>
        </div>
    );
}

export default NavBar;
