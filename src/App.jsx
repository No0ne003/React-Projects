import { ThemeProvider } from "@/components/theme-provider"
import { Route, Routes } from "react-router-dom"
import Home from "@/pages/Home"
import Header from "@/layouts/header"

function App() {

  return(
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Header />
      <Routes>
        <Route path="React-Project/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
