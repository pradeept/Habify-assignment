import { useDispatch, useSelector } from "react-redux";
import { setShowUserPopUp,setPopUpUserName } from "../../store/store";
import UserPopUp from "../Forum/UserPopup";

function Avatar({user,letter,classnames}){
    const dispatch = useDispatch()
    const handler = ()=>{
        dispatch(setShowUserPopUp())
        dispatch(setPopUpUserName(user))
    }
    const { showUserPopUp, popUpUserName } = useSelector((state) => {
        return state.article.dropdowns;
    });
    return<>
        <div className={`${classnames} rounded-full w-10 h-10 flex items-center justify-center cursor-pointer`} onClick={handler}>
            <p>{letter}</p>
            {showUserPopUp && popUpUserName === user? (
                <UserPopUp name={popUpUserName} />
                ) : null}
        </div>
    </>
}

export default Avatar;