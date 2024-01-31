import Head from 'next/head'
import Layout from '../components/layout'
import { getAllChannelsForHome, getServerInfoForHome, getLogInfo } from '../lib/graphql'
import Server from '../components/server'
import User from '../components/user'
import Log from '../components/log'
import Channel from '../components/channel'
import { useState, useEffect } from 'react'
import Empty from '../components/empty'

export default function Home () {
  const [isLoading, setIsLoading] = useState(true)
  const [channels, setChannels] = useState([])
  const [serverInfo, setServerInfo] = useState([])
  const [logs, setLogInfo] = useState([])

  useEffect(() => {
    async function fetchData () {
      const data = await getAllChannelsForHome()
      setChannels(data)
      const serverInfo = await getServerInfoForHome()
      setServerInfo(serverInfo)
      const logInfo = await getLogInfo()
      setLogInfo(logInfo)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  const updateUsers = async () => {
    {
      async function fetchData () {
        const data = await getAllChannelsForHome()
        setChannels(data)
        const serverInfo = await getServerInfoForHome()
        setServerInfo(serverInfo)
        const logInfo = await getLogInfo()
        setLogInfo(logInfo)
        setIsLoading(false)
      }
      fetchData()
    }
  }

  return (
    <Layout>
      <Head>
        <title>TS3 TS.N1EKO.COM</title>
      </Head>
      <div>
        <main className='text-black pl-12 pr-12 flex flex-wrap justify-around content-start'>
          <h1 className='mt-1 pt-12 text-2xl font-extrabold text-transparent uppercase tracking-tighest sm:text-5xl lg:text-7xl bg-black bg-clip-text'>
          TS.N1EKO.COM
          </h1>
          <div className='flex flex-col md:flex-row w-screen  pt-12 m-3 '>
            {isLoading ? (
              <></>
            ) : (
              <div className='flex-none h-min justify-between items-center'>
                <div className='flex-none h-min justify-between items-center p-6 pl-20 pr-20 mt-2 rounded-3xl bg-slate-50'>
                  <Server
                    clientsOnline={serverInfo.clientsOnline - 1}
                    maxClients={serverInfo.maxClients}
                    averagePing={serverInfo.averagePing}
                    uptime={serverInfo.uptime}
                  />
                  <div className='flex justify-around mt-3'>
                    {isLoading ? null : (
                      <button
                        className='p-3 text-md rounded-lg bg-slate-300 hover:text-blue-500'
                        onClick={updateUsers}
                      >
                        Reload
                      </button>
                    )}
                  </div>
               </div>
               <div className='flex-col h-96 justify-around mt-3 p-5 rounded-3xl overflow-auto scrollbar-hide  bg-slate-50 divide-y divide-dashed hover:divide-solid'>
                    {isLoading ? null : (
                      <>
                      {
                        logs.map((log, index) => (
                          <Log
                            key={index}
                            id={log.id}
                            user={log.user}
                            date={log.date}
                            type={log.type}/>
                        ))
                      }
                      </>
                    )}
                </div>
              </div>
            )}
            <div className='flex flex-col p-2 mt-6 md:flex-grow md:pl-6 md:ml-6 md:mt-0'>
              {isLoading ? (
                <></>
              ) : (
                <>
                  {channels.filter(channel => channel.clients.length != 0)
                    .length != 0 ? (
                    <>
                      {channels
                        .filter(channel => channel.clients.length != 0)
                        .map(channel => (
                          <Channel
                            key={channel.id}
                            id={channel.id}
                            name={channel.name}
                            clientsCount={channel.clients.length}
                            capacity={channel.capacity}
                            hasPassword={channel.hasPassword}
                          >
                            {channel.clients.map(client => (
                              <User
                                key={client.id}
                                id={client.id}
                                username={client.name}
                                channel={client.channel}
                                platform={client.platform}
                                isMuted={client.isMuted}
                                hasOutputMuted={client.hasOutputMuted}
                                lastConnectedDate={client.lastConnectedDate}
                              />
                            ))}
                          </Channel>
                        ))}
                    </>
                  ) : (
                    <>
                      <Empty />
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
