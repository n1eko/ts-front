import { ApolloClient, InMemoryCache } from '@apollo/client'
import { gql } from '@apollo/client'

const client = new ApolloClient({
  uri: process.env.TS_GRAPHQL_API_URL,
  cache: new InMemoryCache({
    typePolicies: {
    Log: {
      keyFields: ["id", "date"],
    }}})
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
    channel.clients = clients.filter(client => client.channel == channel.id)
  })
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

export async function getLogInfo () {
  const { data } = await client.query({
    query: gql`
      query LogQuery {
        log {
          id
          user
          type
          date
        }
      }
    `,
    fetchPolicy: 'network-only'
  })
  return data.log
}
