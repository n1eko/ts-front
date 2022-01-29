import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://tsapi.n1eko.com/graphql",
    cache: new InMemoryCache(),
});

export async function getAllUsersForHome(){

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
                    name
                    capacity
                    hasPassword
                }
                }
            }          
        `,
        fetchPolicy: 'network-only',
      });

      const clients = data.clients.map(client => {
            return {
                id: client.id,
                name: client.name,
                platform: client.platform,
                isMuted: client.isMuted,
                country: client.country,
                channel: client.channel.name
            }
            
        });

      return clients;
}

export async function getServerInfoForHome(){

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
        fetchPolicy: 'network-only',
      });
      return data.server;
}