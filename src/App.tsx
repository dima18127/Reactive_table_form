import Layout from './components/layout/Layout'
import Listapp from './components/listApp/Listapp'
import { ThemeProvider } from './components/providers/ThemeProvider'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <ThemeProvider>
          <Layout>
            <Listapp />
          </Layout>
        </ThemeProvider>
      </Provider>
    </div>
  )
}

export default App
