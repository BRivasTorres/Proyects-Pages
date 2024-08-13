import About from "./sections/About"
import Home from "./sections/Home"
import Projects from "./sections/Projects"
import Header from "./header/Header"

const ReactProjectsPage = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-8 ">
        <Header />
        <Home />
        <About /> 
        <Projects />
    </div>
  )
}

export default ReactProjectsPage
