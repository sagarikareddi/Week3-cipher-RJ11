import React,{lazy,Suspense} from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import { Provider } from "react-redux";
import { createStoreHook } from "react-redux";
import SignUpform from "./components/signUpform";
import Header from "./components/header";
import Sumnumbers from "./components/Sumnumbers";
import Taskscreen from "./components/taskcreen";
// import Testcom from "./components/countercomponent";
import Photos from "./components/photos";
import Highordercomponent from "./components/HOC";
import Samplerenderprops from "./components/samplerenderprops";
import ErrorBoundry from "./components/Errorboundries";
import counterReducer from "./Reducers/counterReducer";
const Testcom = lazy(() => import("./components/countercomponent"));

// const SignUpform = lazy(() => import("./components/signUpform"));
// const Header = lazy(() => import("./components/header"));
// const Sumnumbers = lazy(() => import("./components/Sumnumbers"));
// const Taskscreen = lazy(() => import("./components/taskcreen"));
// const Photos = lazy(() => import("./components/photos"));
// const Highordercomponent = lazy(() => import("./components/HOC"));
// const Samplerenderprops = lazy(() => import("./components/samplerenderprops"));
// const ErrorBoundry = lazy(() => import("./components/Errorboundries"));

const App =()=>{
  const Testapp =Highordercomponent(()=>{
    return <div>Test App</div>
  });
  let chaname="Lav Kumar";
  const myReducer=createStoreHook(counterReducer);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>Loading...</div>} />
        <Routes>
          <Route path={"/"} element={<h1>This is on Home page</h1>} />
          <Route path={"/contact"} element={<h1>This is on Contact page</h1>} />
          <Route path={"/about"} element={<h1>This is on About page</h1>} />
          <Route path={"/signup"} element={<SignUpform />}>
            <Route path={"sum"} element={<Sumnumbers />} />
          </Route>
          
          <Route path={"/task"} element={<Taskscreen />} />
          <Route path={"/count"} element={<ErrorBoundry>
            <Testcom />
          </ErrorBoundry>} />
          <Route path={"/photo"} element={<Photos name={chaname} />} />
          <Route path={"/test"} element={<Testapp />} />
          <Route path={"/sample"} element={<Samplerenderprops />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
