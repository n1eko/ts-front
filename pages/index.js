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
      <main className='pt-12 p-12 flex flex-wrap justify-around'>
        <h1 className='text-xl md:text-4xl text-center'>TS3 WEB CONSOLE</h1>
        <div className="flex flex-col md:flex-row h-screen w-screen m-3 pt-12">
          <div className='flex-none border-4'>
            {isLoading ? (<p>Loading...</p>) : (
              <Server
              clientsOnline={serverInfo.clientsOnline}
              maxClients= {serverInfo.maxClients}
              averagePing={serverInfo.averagePing}
              uptime={serverInfo.uptime}
              />
            )}
            <p>
              {isLoading ? (null) : (<button className='bg-red-300 p-2 rounded mx-20 hover:bg-red-600 hover:text-white' onClick={updateUsers} >Reload</button>)}
            </p>
          </div>
          <div className='flex-auto pt-6  md:flex-auto md:pl-6  border-4'>
            {isLoading ? (  <p>Loading...</p> ) : (
              <div>
                {users.map((user) => (
                  <User
                    key={user.id}
                    id={user.id}
                    username={user.name}
                    channel={user.channel}
                    platform={user.platform}
                    isMuted={user.isMuted}
                    country={user.country}
                  />
                ))
                }
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
    </Layout>
  )
}