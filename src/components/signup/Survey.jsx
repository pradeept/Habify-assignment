import { useState } from "react";
import surveyVector from "../../assets/surveyVector.png";
import Dropdown from "../commons/DropDown";

function Survey() {
    const ageOpt = [];
    for (let i = 18; i < 50; i++) {
        ageOpt.push(i);
    }
    const genderOpt = ["Male", "Female", "Neutral"];
    const friendlyOpt = ["Yes", "No"];
    const sourceOpt = ["Bye Search Engine", "Facebook", "Instagram", "Other"];

    const [age, setAge] = useState(18);
    const [gender, setGender] = useState("");
    const [friendly, setFriendly] = useState("");
    const [searchSource, setSearchSource] = useState("");

    const handleAge = (age) => {
        console.log("clicked");
        setAge(age);
    };

    const handleGender = (gender) => {
        console.log("clicked");
        setGender(gender);
    };

    const handleFriendly = (option) => {
        console.log("clicked");
        setFriendly(option);
    };

    const handleSearchSource = (source) => {
        console.log("clicked");
        setSearchSource(source);
    };

    return (
        <>
            <div className='flex  w-[90%] flex-col  flex-wrap gap-4 bg-white px-10 md:w-3/5 '>
                <div className='mt-10  flex items-center'>
                    <h5 className='inline font-bold text-slate-600'>
                        Small Survey (OPTIONAL)
                    </h5>
                    <div className='group relative grid h-10 w-3/4 grid-rows-1 items-center'>
                        <div className='row-span-1 border-b-2 border-dotted border-b-green-200'></div>

                        <img
                            src={surveyVector}
                            alt='survey vector'
                            width='60px'
                            className=' absolute row-span-1  place-self-end rounded-full shadow-[rgba(0,_0,_0,_0.5)_0px_30px_90px]'
                        />
                        <span class='absolute place-self-end top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100'>
                            ✨ You will Earn this badge!
                        </span>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                    <div>
                        <label className='text-slate-400'>
                            How old are you?
                        </label>
                        <Dropdown
                            options={ageOpt}
                            value={age}
                            onChange={handleAge}
                        />
                    </div>

                    <div>
                        <label className='text-slate-400'>Who are you?</label>
                        <Dropdown
                            options={genderOpt}
                            value={gender}
                            onChange={handleGender}
                        />
                    </div>
                    <div>
                        <label className='text-slate-400'>
                            Will you be friendly here?
                        </label>
                        <Dropdown
                            options={friendlyOpt}
                            value={friendly}
                            onChange={handleFriendly}
                        />
                    </div>
                    <div>
                        <label className='text-slate-400'>
                            Where do you heard about us?
                        </label>
                        <Dropdown
                            options={sourceOpt}
                            value={searchSource}
                            onChange={handleSearchSource}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Survey;
