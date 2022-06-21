import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ojazq90an401xkcobs0liq/master',
    cache: new InMemoryCache()
})