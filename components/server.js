export default function Server({clientsOnline, maxClients, averagePing, uptime}) {
    return (
        <div className='flex flex-col'>
            <section className='flex-1'>IP: <code>ts.n1eko.com</code></section>
            <section>Users: <code>{clientsOnline}/{maxClients}</code></section>
            <section>Ping: <code>{averagePing} ms</code></section>
            <section>Uptime: <code>{Math.round(uptime / 86400)} days</code></section>
        </div>
    )
}
