import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Home from "./pages/Home"
import About from "./pages/About"
import Store from "./pages/Store"
import Navbar from "./components/Navbar"
import { ShoppingCartProvider } from "./context/shoppingCartContext"

function App() {
  

  return (
    <ShoppingCartProvider>
    <Navbar/>
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Container>
      
    </ShoppingCartProvider>
  )
}

export default App

//<Routes> Component: The <Routes> component is used to wrap a collection of <Route> components. 
//It serves as a container for defining the routing structure

//<Route> Components: Each <Route> component represents a specific route in your application. 
//The path attribute specifies the URL path, and the element attribute specifies the React element (component) to be rendered when the route matches.

//The main file of a React application (often named app.jsx) is a common place to define routes because it serves as the entry point for your application.
//By defining routes in the main file, you establish the overall structure of your application and determine which components should be rendered for different URLs.