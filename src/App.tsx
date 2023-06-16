import { client } from './lib/apollo'
import { Router } from './Router'
import { ApolloProvider} from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Router />
      </BrowserRouter>
    </ApolloProvider>

  )
}

export default App
