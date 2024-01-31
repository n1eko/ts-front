export default function Server ({
  clientsOnline,
  maxClients,
  averagePing,
  uptime
}) {
  return (
    <div className='flex flex-col '>
      <div>
        <h2 className='text-2xl font-bold md:text-2xl md:font-bold text-center mb-3'>
          Server Status
        </h2>
      </div>
      <div className='flex flex-col p-1'>
        <div className='flex justify-around'>
          <p className='mr-3'>IP:</p>
          <code className='border border-gray-800 rounded-3xl pl-3 pr-3 mb-2 hover:text-blue-500'>
            ts.n1eko.com
          </code>
        </div>
        <div className='flex justify-around'>
          <p className='mr-3'>Users: </p>
          <code className='border border-gray-800 rounded-3xl pl-3 pr-3 mb-2 hover:text-blue-500'>
            {clientsOnline}/{maxClients}
          </code>
        </div>
        <div className='flex justify-around'>
          <p className='mr-3'>Ping: </p>
          <code className='border border-gray-800 rounded-3xl pl-3 pr-3 mb-2 hover:text-blue-500'>
            {Math.round(averagePing)} ms
          </code>
        </div>
        <div className='flex justify-around'>
          <p className='mr-3'>Uptime: </p>
          <code className='border border-gray-800 rounded-3xl pl-3 pr-3 mb-2 hover:text-blue-500'>
            {Math.round(uptime / 86400)} days
          </code>
        </div>
      </div>
    </div>
  )
}
