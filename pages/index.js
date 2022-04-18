import Head from 'next/head'
import Layout from '../components/layout'
import { getAllUsersForHome, getServerInfoForHome } from '../lib/graphql'
import Server from '../components/server'
import User from '../components/user'
import { useState, useEffect } from "react";

export default function Home() {
  
  const [ isLoading, setIsLoading ] = useState(true);
  const [users, setUsers] = useState([]);
  const [serverInfo, setServerInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllUsersForHome();
      setUsers(data);
      const serverInfo = await getServerInfoForHome();
      setServerInfo(serverInfo);
      setIsLoading(false);
    }
    fetchData();
  }, []);


  const updateUsers = async () => {
    {
      async function fetchData() {
        const data = await getAllUsersForHome();
        setUsers(data);
        const serverInfo = await getServerInfoForHome();
        setServerInfo(serverInfo);
        setIsLoading(false);
      }
      fetchData();
    }
  }

  return (
    <Layout>
    <Head>
      <title>TS3 WEB CONSOLE</title>
    </Head>
    <div>
      <main className='bg-gray-900 text-custom-white pt-12 p-12 flex flex-wrap justify-around'>
        <h1 className='mt-1 text-4xl font-extrabold text-transparent uppercase tracking-tighest sm:text-5xl lg:text-7xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text'>TS3 WEB CONSOLE</h1>
        <div className="flex flex-col md:flex-row h-screen w-screen m-3 pt-12">
          <div className='flex-none h-min justify-between items-center p-6 pl-20 pr-20 mt-2 border border-gray-800 rounded-3xl'>
            {isLoading ? (<p>Loading...</p>) : (
              <Server
              clientsOnline={serverInfo.clientsOnline - 1}
              maxClients= {serverInfo.maxClients}
              averagePing={serverInfo.averagePing}
              uptime={serverInfo.uptime}
              />
            )}
            <div className='flex justify-around mt-3'>
              {isLoading ? (null) : (<button className='p-3 text-md rounded-lg bg-gray-800/70 hover:text-blue-500' onClick={updateUsers}>Reload</button>)}
            </div>
          </div>
          <div className='flex flex-col p-2 mt-6 md:flex-auto md:pl-6 md:ml-6 md:mt-0'>
            {isLoading ? (  <p>Loading...</p> ) : 
              (<>
                {(users.length != 0) ? (
                  <>
                    {users.map((user) => (
                      <User
                        key={user.id}
                        id={user.id}
                        username={user.name}
                        channel={user.channel}
                        platform={user.platform}
                        isMuted={user.isMuted}
                        country={user.country}
                      />))}
                  </>) : 
              (
                <>
                  <div className="text-center">
                    <img className="object-cover w-full  rounded-lg" src="https://s7.gifyu.com/images/confused-travolta.gif"/>
                    <p class="mt-6 text-white">It looks like no one is online right now.</p>
                  </div>
                </>
              )
            }
            </>)}
          </div>
        </div>
      </main>
    </div>
    </Layout>
  )
}