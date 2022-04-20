import { ApolloClient, InMemoryCache } from '@apollo/client'
import { gql } from '@apollo/client'
import useSWR from 'swr'

const client = new ApolloClient({
  uri: 'https://tsapi.n1eko.com/graphql',
  cache: new InMemoryCache()
})

export async function getAllChannelsForHome () {
  const { data } = await client.query({
    query: gql`
      query Clients {
        clients {
          id
          name
          platform
          isMuted
          country
          channel {
            id
          }
        }
        channels {
          id
          name
          capacity
          hasPassword
        }
      }
    `,
    fetchPolicy: 'network-only'
  })

  const clients = data.clients.map(client => {
    return {
      id: client.id,
      name: client.name,
      platform: client.platform,
      isMuted: client.isMuted,
      country: client.country,
      channel: client.channel.id
    }
  })

  var channels = data.channels.map(channel => {
    return {
      id: channel.id,
      name: channel.name,
      capacity: channel.capacity,
      hasPassword: channel.hasPassword
    }
  })
  channels.map(channel => {
    console.log(channel)
    channel.clients = clients.filter(client => client.channel == channel.id)
    console.log(channel.clients)
  })
  console.log(channels)
  return channels
}

export async function getServerInfoForHome () {
  const { data } = await client.query({
    query: gql`
      query Server {
        server {
          totalBytesReceived
          totalBytesSent
          totalClientConnections
          averagePing
          uptime
          clientsOnline
          maxClients
          version
          platform
          status
          name
          id
        }
      }
    `,
    fetchPolicy: 'network-only'
  })
  return data.server
}
