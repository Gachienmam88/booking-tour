import { useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { fetchTour , getFeaturedTour } from "./redux/slices/tour";
import { useDispatch } from "react-redux";
function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchTour())
    dispatch(getFeaturedTour())
  },[dispatch])
  return <Layout />
}

export default App;
