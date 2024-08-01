
import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";


// #0f0a19
function App() {
  return (
    <Box
      minH="100vh" bg="#1F1E23" color="gray.400" px={6} py={8}>
      <CodeEditor  />
    </Box>
  )
}

export default App
