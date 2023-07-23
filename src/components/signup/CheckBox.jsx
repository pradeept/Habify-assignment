function CheckBox({ option, isChecked,id,handleChange }) {

    const handleClick = ()=>{
        if(id === 0){
            handleChange()
        }
    }

    return (
        <div className='border-2 p-3 flex gap-3 items-center'>
            {isChecked?<input type='checkbox' name='' checked onClick={handleClick} value=""/> 
            : 
            <input type='checkbox' name='' onChange={handleClick} value=""/>}
            <span className='text-sm'>{option}</span>
        </div>
    );
}

export default CheckBox;
