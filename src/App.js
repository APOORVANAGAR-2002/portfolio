import { Home } from "./pages/Home";
// import { Project } from "./pages/Project";
import { Project } from './pages/Project';
import { Route, Switch } from "react-router-dom";
import { Skills } from "./components/homepage/Skills";
// import { Volunteer } from "./pages/Volunteer";
import { Footer } from "./components/homepage/Footer";
import { About1 } from "./pages/About1";
import { MainLayout } from "./layouts/MainLayout";

function App() {
  return (
    <div>
      <MainLayout />
       <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/projects' exact component={Project} />
        <Route path="/about" component={About1} />
        {/* <Route path="/work" component={Project} />
        <Route path="/volunteer" component={Volunteer} />  */}
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
