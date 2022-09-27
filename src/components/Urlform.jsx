import React from 'react'

const Urlform = ({url, setUrl, handleSubmit, isInput}) => { 
    const handleInput = (e)=>{
    setUrl(e.target.value);
  }

  return (
    <form 
    className='absolute w-[calc(100vw-40px)] right-1/2 translate-x-1/2 bottom-0 translate-y-1/2 z-10 bg-dark-violet rounded-lg flex flex-col gap-5 p-7 lg:w-[calc(100vw-96px)] lg:flex-row'
    onSubmit={handleSubmit}
    >
        <svg className='absolute top-0 right-0  lg:hidden' xmlns="http://www.w3.org/2000/svg" width="270" height="130"><path fill="#4B3F6B" fill-rule="evenodd" d="M0-.924C0 51.8 15.5 89.562 73 113.953c57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552C693.095 234.626 733.884 114.796 707 44.141 680.115-26.515 628.593-91 380-91 131.407-91 0-53.647 0-.924z"/></svg>
        <div className='input flex flex-col grow gap-2 z-20'>
          <input 
          type="url" 
          placeholder='Shorten a link here...' 
          className={`w-full placeholder:text-grayish-violet p-3 rounded-lg lg:grow ${isInput ? '' : 'border-[3px] border-red'} lg:text-sm`} 
          value={url}
          onInput={handleInput}
          />
          <i className={`text-red text-sm lg:absolute bottom-0 -translate-y-2 lg:text-xs ${isInput ? 'hidden' : ''}`}>Please add a link</i>
        </div>
        <button type="submit" className='z-20 text-white bg-cyan p-3 rounded-lg lg:text-sm lg:px-5'>Shorten it!</button>
    </form>
  )
}

export default Urlform