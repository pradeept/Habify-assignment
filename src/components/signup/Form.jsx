function Form() {
  return (
    <div className=' w-[90%]  md:w-3/5 bg-white px-10 '>
      <div className='py-10 grid gap-10'>
        <div className='flex flex-wrap justify-between'>
          <div>
            <label className='font-medium text-slate-500'>First Name</label>
            <br />
            <input
              type='text'
              placeholder='First Name'
              className='p-2 border-b-2 rounded-md'
            />
          </div>
          <div>
            <label className='font-medium text-slate-500'>Last Name</label>
            <br />
            <input
              type='text'
              placeholder='Last Name'
              className='p-2 border-b-2 rounded-md'
            />
          </div>
        </div>
        <div className=''>
          <label className='font-medium text-slate-500'>User Name</label>
          <br />
          <input
            type='text'
            placeholder='User Name'
            className='p-2 border-b-2 rounded-md w-full'
          />
        </div>
        <div>
          <label className='font-medium text-slate-500'>Email Address</label>
          <br />
          <input
            type='email'
            placeholder='Email Address'
            className='p-2 border-b-2 rounded-md w-full'
          />
        </div>
        <div>
          <label className='font-medium text-slate-500'>Password</label>
          <br />
          <div>
            <input
              type='password'
              placeholder='Password'
              className='p-2 border-b-2 rounded-md w-3/4'
            />
            <span className='bg-green-400 px-2 py-1'>Strong</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
