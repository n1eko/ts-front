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
      <main className='bg-custom-grey text-custom-white pt-12 p-12 flex flex-wrap justify-around'>
        <h1 className='text-3xl font-bold md:text-4xl md:font-bold text-center'>TS3 WEB CONSOLE</h1>
        <div className="flex flex-col md:flex-row h-screen w-screen m-3 pt-12">
          <div className='flex-none h-min bg-custom-black justify-between items-center p-6 mt-2 shadow-xl rounded-md'>
            {isLoading ? (<p>Loading...</p>) : (
              <Server
              clientsOnline={serverInfo.clientsOnline}
              maxClients= {serverInfo.maxClients}
              averagePing={serverInfo.averagePing}
              uptime={serverInfo.uptime}
              />
            )}
            <div className='flex justify-around mt-3'>
              {isLoading ? (null) : (<button className='text-black bg-custom-white p-2 rounded mx-20 hover:bg-custom-yellow hover:text-custom-black' onClick={updateUsers}>Reload</button>)}
            </div>
          </div>
          <div className='flex flex-col p-2 mt-6 md:flex-auto md:pl-6 md:ml-6 md:mt-0'>
            {isLoading ? (  <p>Loading...</p> ) : (
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
                  />
                ))
                }
              </>
            )}
          </div>
        </div>
      </main>
    </div>
    </Layout>
  )
}