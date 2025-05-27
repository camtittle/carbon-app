import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProjectsPage } from './pages/Projects/ProjectsPage'
import { Nav } from './components/Nav'
import { HomePage } from './pages/Home'
import { Container } from './components/Container'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Nav />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </Container>
      </BrowserRouter>

    </QueryClientProvider>
  )
}


export default App
