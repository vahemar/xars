import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Analytics } from "@vercel/analytics/react"
import { Helmet, HelmetProvider } from "react-helmet-async";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <HelmetProvider>
      <ChakraProvider>
        <Helmet>
          <title>Ղարս Թոնրատուն</title>
          <meta name="description" content="Ղարս Թոնրատուն - որակյալ սնունդ, մատչելի գներ Ղարս թոնրատանը" />
          <meta name="keywords" content="Ղարս Թոնրատուն, ձեր սիրելի թոնրատունը՝ << 9, 7 Օհանովի փողոց, Երևան >> հասցեում" />
        </Helmet>
        <SpeedInsights />
        <Analytics />
        <RouterProvider router={router} />
      </ChakraProvider>
    </HelmetProvider>
  )
}

export default App;