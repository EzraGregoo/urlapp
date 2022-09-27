import React, { useState, useCallback } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Items = ({isItem, history, handleDelete}) => {
  const [copied, setCopied] = useState(false);
  const onCopy = useCallback(() => {
    setCopied(true);
  }, [])
  return (
    <>
      {isItem && (
        <article className='flex flex-col px-5 pt-40 gap-10 items-center lg:px-12 lg:pt-20 lg:text-sm'>
          {history.map((urlHistory)=>(
            <div className='relative w-full rounded-md bg-white py-5 text-center flex flex-col gap-3 lg:flex-row lg:px-5 lg:py-3 lg:justify-between items-center'>
              <p className='text-black'>
                {urlHistory.originalUrl.length > 30
                ? `${urlHistory.originalUrl.substring(0,30)}...`
                : `${urlHistory.originalUrl}`
                }
              </p>
              <hr className='text-gray w-full h-[0.1px] lg:hidden'/>
              <p className='text-cyan'>{urlHistory.shortUrl}</p>
            <CopyToClipboard onCopy={onCopy} text={urlHistory.shortUrl}>
              <button 
                className={`${copied ? 'bg-dark-violet' : 'bg-cyan'} w-[calc(100%-40px)] rounded-md py-3 text-white mx-5 lg:w-20 lg:py-1`}
                >{copied ? 'Copied!' : 'Copy'}</button>
            </CopyToClipboard>
          </div>
          ))}
          <button 
          className='text-white bg-dark-violet rounded-md w-[150px] py-2'
          onClick={handleDelete}
          >Delete history</button>
        </article>
      )}
    </>
  )
}

export default Items