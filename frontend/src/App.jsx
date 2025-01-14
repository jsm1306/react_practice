import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import CreatePage from './pages/CreatePage'
import HomePage from './pages/HomePage'
// import { Button } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
function App() {

  return (
  
      <Box minH={"100vh"}>
      {/* <Button colorScheme="blue">Button</Button> */}
<Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes></Box>



   
   
    
   
  )
}

export default App
