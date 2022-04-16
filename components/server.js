export default function Server({clientsOnline, maxClients, averagePing, uptime}) {
    return (

        <div className='flex flex-col items-center'>
            <div className=''>
                <h2 className='text-2xl font-bold md:text-2xl md:font-bold text-center mb-3'>Server Status</h2>
            </div>
            <div className='flex flex-col items-center'>
                <section className='flex-1'>IP: <code>ts.n1eko.com</code></section>
                <section>Users: <code>{clientsOnline}/{maxClients}</code></section>
                <section>Ping: <code>{averagePing} ms</code></section>
                <section>Uptime: <code>{Math.round(uptime / 86400)} days</code></section>
            </div>
        </div>
       
    )
}
