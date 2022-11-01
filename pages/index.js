import Head from 'next/head'
import Layout from '../components/layout'
import { getAllChannelsForHome, getServerInfoForHome } from '../lib/graphql'
import Server from '../components/server'
import User from '../components/user'
import Channel from '../components/channel'
import { useState, useEffect } from 'react'
import Empty from '../components/empty'

export default function Home () {
  const [isLoading, setIsLoading] = useState(true)
  const [channels, setChannels] = useState([])
  const [serverInfo, setServerInfo] = useState([])

  useEffect(() => {
    async function fetchData () {
      const data = await getAllChannelsForHome()
      setChannels(data)
      const serverInfo = await getServerInfoForHome()
      setServerInfo(serverInfo)
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
        setIsLoading(false)
      }
      fetchData()
    }
  }

  return (
    <Layout>
      <Head>
        <title>TS3 WEB CONSOLE</title>
      </Head>
      <div>
        <main className='text-custom-white pl-12 pr-12 flex flex-wrap justify-around content-start'>
          <h1 className='mt-1 pt-12 text-2xl font-extrabold text-transparent uppercase tracking-tighest sm:text-5xl lg:text-7xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text'>
            TS3 WEB CONSOLE
          </h1>
          <div className='flex flex-col md:flex-row w-screen  pt-12 m-3 '>
            {isLoading ? (
              <></>
            ) : (
              <div className='flex-none h-min justify-between items-center p-6 pl-20 pr-20 mt-2 border border-gray-800 rounded-3xl'>
                <Server
                  clientsOnline={serverInfo.clientsOnline - 1}
                  maxClients={serverInfo.maxClients}
                  averagePing={serverInfo.averagePing}
                  uptime={serverInfo.uptime}
                />
                <div className='flex justify-around mt-3'>
                  {isLoading ? null : (
                    <button
                      className='p-3 text-md rounded-lg bg-gray-800/70 hover:text-blue-500'
                      onClick={updateUsers}
                    >
                      Reload
                    </button>
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
