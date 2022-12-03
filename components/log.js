export default function Log ({
  id,
  user,
  date,
  type
}) {
  return (
    <div className='bg-custom-black/50 flex justify-between items-center pl-6 p-3 pr-6 shadow-xl rounded-3xl mb-3'>
      <div className='flex flex-row justify-end items-center mr-5'>
      {
        type == 'disconnect' ? 
        (<span className="inline-flex items-center rounded-full border-2 border-red-200 bg-red-200 px-2 py-1 text-sm font-semibold text-red-600 shadow-sm">
          Out
        </span>)
        :
        (<span className="inline-flex items-center rounded-full border-2 border-teal-200 bg-teal-200 px-2 py-1 text-sm font-semibold text-teal-600 shadow-sm">
          In
        </span>)
      }
      </div>
      <div className='font-black tracking-wide uppercase'>
        <h4>{user}</h4>
      </div>
      <div className='flex flex-row justify-end items-center'>
        <div className='p-3'>
          {date}
        </div>
        
      </div>
    </div>
  )
}
