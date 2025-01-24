import React, { useContext } from 'react'
import { AppContext } from '../../../Context/appContext'

function Events() {
     const {isExpand} = useContext(AppContext);
     return (
          <>
               <div className={`text-gray-600 body-font  ${
          isExpand ? 'flex justify-center item-center flex-col p-20 w-[calc(100%-16rem)] ' : 'm-20 ml-40 w-[calc(100%-5rem)] ' 
        }`}>
       <div
  className={`flex justify-between items-center ${
    isExpand ? 'ml-60 w-[calc(100%-16rem)]' : 'w-[calc(100%-5rem)]'
  }`}
>
  <h1 className="text-xl font-medium text-gray-900 title-font">Events</h1>
  <button className="bg-green-400 py-1.5 px-3 rounded-lg hover:bg-green-500 text-white">
    Create +
  </button>
</div>

            
<div
  className={`flex justify-between items-center gap-3 flex-col ${
    isExpand ? 'ml-60 w-[calc(100%-16rem)]' : 'w-[calc(100%-5rem)]'
  }`}
>
     <div className='h-auto rounded-lg w-auto bg-red-400 mt-5 p-4 flex justify-between items-center gap-4'>
          <div>

          <h1 className='text-[20px]'>Hello World !!!</h1>
          <p className='text-[14px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum et explicabo dolorum!</p>
          <p>By XYZ.com</p>
          </div>
          <div className='h-[120px] rounded-sm w-[150px] flex justify-center items-center'>
               <img height={40} src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=300,height=300/event-covers/jc/833cce10-16dd-4349-94cd-0149c60c79f3" alt="" />
          </div>
     </div>
     <div className='h-auto rounded-lg w-auto bg-red-400 p-4 flex justify-between items-center gap-4'>
          <div>

          <h1 className='text-[20px]'>Hello World !!!</h1>
          <p className='text-[14px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum et explicabo dolorum!</p>
          <p>By XYZ.com</p>
          </div>
          <div className='h-[120px] rounded-sm w-[150px] flex justify-center items-center'>
               <img height={40} src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=300,height=300/event-covers/jc/833cce10-16dd-4349-94cd-0149c60c79f3" alt="" />
          </div>
     </div>

  </div>
               </div>
          </>
     )
}

export default Events
