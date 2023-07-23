import newBie from "../../assets/newBieVector.png";

function PrivacyDetails() {
    return (
        <>
            <div className='flex  w-[90%] flex-col flex-wrap gap-4 bg-white px-10 md:w-3/5'>
                <div className='flex  items-center'>
                    <h5 className='inline font-bold text-slate-600'>
                        Privacy Settings (OPTIONAL){" "}
                    </h5>
                    <div className='group relative grid h-10 w-3/4 grid-rows-1 items-center '>
                        <div className='row-span-1 border-b-2 border-dotted border-b-slate-300'></div>
                        <img
                            src={newBie}
                            alt='newbie vector'
                            width='60px'
                            className='absolute row-span-1 place-self-end rounded-full shadow-[rgba(0,_0,_0,_0.5)_0px_30px_90px]'
                        />
                         <span class='absolute place-self-end top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100'>
                            ✨ You will Earn this badge!
                        </span>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <label className='text-slate-400'>
                        Who can see my profile?
                    </label>
                    <div className='flex flex-wrap justify-start gap-4 text-slate-600'>
                        <div className='border-2 p-3'>
                            <input type='checkbox' name='' /> Everyone
                        </div>
                        <div className='border-2 p-3'>
                            <input type='checkbox' name='' /> Only Friends
                        </div>
                        <div className='border-2 p-3'>
                            <input type='checkbox' name='' /> Invite only
                        </div>
                    </div>
                </div>
                <div className='flex flex-col flex-wrap gap-6'>
                    <label className='text-slate-400'>
                        Automatically share my posts and replies on Social
                        Network
                    </label>
                    <div className='flex flex-wrap justify-start gap-4 text-slate-600'>
                        <div className='flex items-center gap-1 border-2 p-2'>
                            <input type='checkbox' name='' />
                            <img
                                width='30'
                                src='https://img.icons8.com/color/48/facebook.png'
                                alt='facebook'
                            />
                            <small>Facebook</small>
                        </div>
                        <div className='flex items-center gap-1 border-2 p-2'>
                            <input type='checkbox' name='' />
                            <img
                                width='30'
                                src='https://img.icons8.com/color/48/twitter--v1.png'
                                alt='twitter--v1'
                            />
                            <small>Twitter</small>
                        </div>
                        <div className='flex items-center gap-1 border-2 p-2'>
                            <input type='checkbox' name='' />
                            <img
                                width='30'
                                src='https://img.icons8.com/color/48/google-plus--v1.png'
                                alt='google-plus--v1'
                            />
                            <small>Google +</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PrivacyDetails;
