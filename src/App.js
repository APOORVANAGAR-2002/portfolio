import { Home } from "./pages/Home";
import { Project } from "./pages/Project";
import { Route, Switch } from "react-router-dom";
import { Skills } from "./pages/Skills";
import { Volunteer } from "./pages/Volunteer";
import { Footer } from "./pages/Footer";
import { About } from "./pages/About";

function App() {
  return (
    <div>
       <Switch>
        <Route path="/" exact component={Home} />
          <Route path="/project" component={Project} />
        <Route path="/volunteer" component={Volunteer} />
        <Route path="#about" component={About} />
        </Switch>
        {/* <Footer /> */}
    </div>
      )

    /* </div>
    // <div id="colorlib-page">
    //   <div id="container-wrap">
    //     {/* <MainLayout /> */
    //     <div id="colorlib-main">
    //       <Home />
    //       <About />
    //       {/* <Skills />
    //       <Project />
    //       <Volunteer />
    //       <Footer /> */}
    //     </div>
    //   </div>
    // </div>
    
    // <div class="flexbox-container">
    //   <div><Home /></div>
    //   {/* <div><About /></div>
    //   <div><Skills /></div> */}
    // </div>

}

export default App;
