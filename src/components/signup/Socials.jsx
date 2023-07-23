import socials from "../../assets/socialsVector.png";

function Socials() {
    return (
        <div className='flex  w-[90%] flex-col flex-wrap gap-4 bg-white px-10 pb-10 md:w-3/5'>
            <div className='mt-10  flex items-center'>
                <h5 className='inline font-bold text-slate-600 '>
                    Link Social Networks (OPTIONAL)
                </h5>
                <div className='group relative grid h-10 w-3/4 grid-rows-1 items-center '>
                    <div className='row-span-1 border-b-2 border-dotted border-b-green-200'></div>
                    <img
                        src={socials}
                        alt='survey vector'
                        width='60px'
                        className='absolute row-span-1 place-self-end  rounded-full shadow-[rgba(0,_0,_0,_0.5)_0px_30px_90px]'
                    />
                     <span class='absolute place-self-end top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100'>
                            ✨ You will Earn this badge!
                        </span>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-4 gap-y-8 md:grid-cols-2'>
                <div>
                    <div className='flex place-items-center gap-2'>
                        <img
                            width='25'
                            src='https://img.icons8.com/color/48/facebook.png'
                            alt='facebook'
                        />
                        <span className='text-sm text-slate-400'>
                            Facebook URL
                        </span>
                    </div>
                    <div className='mt-4 border-b-2'>
                        <input
                            type='text'
                            placeholder='facebook.com/Azyrus-themes'
                            className='text-xs font-bold focus:outline-none'
                        />
                    </div>
                </div>

                <div>
                    <div className='flex place-items-center gap-2'>
                        <img
                            width='25'
                            src='https://img.icons8.com/color/48/twitter--v1.png'
                            alt='twitter logo'
                        />
                        <span className='text-sm text-slate-400'>
                            Twitter Username
                        </span>
                    </div>
                    <div className='mt-4 border-b-2'>
                        <input
                            type='text'
                            placeholder='Theme Forest'
                            className='text-xs font-bold focus:outline-none'
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div className='flex place-items-center gap-2'>
                            <img
                                width='30'
                                src='https://img.icons8.com/color/48/google-plus--v1.png'
                                alt='google-plus--v1'
                            />
                            <span className='text-sm text-slate-400'>
                                Google + Account ID
                            </span>
                        </div>

                        <div className='mt-4 border-b-2'>
                            <input
                                type='text'
                                placeholder='azyrus_themes'
                                className='text-xs font-bold focus:outline-none'
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex place-items-center gap-2'>
                        <img
                            width='30'
                            height='48'
                            src='https://img.icons8.com/color/48/youtube-play.png'
                            alt='youtube-play'
                        />
                        <span className='text-sm text-slate-400'>
                            Youtube Channel URL
                        </span>
                    </div>

                    <div className='mt-4 border-b-2'>
                        <input
                            type='text'
                            placeholder='azyrus_themes'
                            className='text-xs font-bold focus:outline-none'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Socials;
