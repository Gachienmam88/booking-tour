import { useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { fetchTour , getFeaturedTour } from "./redux/slices/tour";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchTour())
    dispatch(getFeaturedTour())
  },[dispatch])
  return <>
    <Toaster/>
    <Layout/>
  </>
}

export default App;
