import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <ChakraProvider>
      <SpeedInsights />
      <Analytics />
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App;