import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <ChakraProvider>
      <Analytics />
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App;