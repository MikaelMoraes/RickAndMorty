import { boot } from 'quasar/wrappers'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

const httpLink = createHttpLink({
    uri: import.meta.env.VITE_APIURL,
})

const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
})

export default boot(({ app }) => {
    app.provide(DefaultApolloClient, apolloClient)
})
