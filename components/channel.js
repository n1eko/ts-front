export default function Channel ({
  id,
  name,
  clientsCount,
  capacity,
  hasPassword,
  children
}) {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h3 className='text-3xl font-bold text-blue-500 w-3/4 overflow-x-clip'>
          {name}
        </h3>
        <div className='flex flex-row justify-end items-center'>
          <lock className='mr-3'>
            {hasPassword ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-lock'
                viewBox='0 0 16 16'
              >
                <path d='M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-unlock'
                viewBox='0 0 16 16'
              >
                <path d='M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z' />
              </svg>
            )}
          </lock>

          <p className='pr-3 font-black tracking-wide uppercase'>
            {clientsCount}/{capacity == -1 ? '∞' : capacity}
          </p>
        </div>
      </div>
      <div className='pt-0.5 mt-4 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 mb-3'></div>
      <div className='mb-6'>{children}</div>
    </div>
  )
}
