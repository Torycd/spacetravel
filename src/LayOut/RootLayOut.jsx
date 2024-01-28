import { Outlet } from "react-router-dom"
import SpaceNavigation from "../components/SpaceNavigation"

const RootLayOut = () => {
  return (
    <>
        <SpaceNavigation/>
        <Outlet/>
    </>
  )
}

export default RootLayOut