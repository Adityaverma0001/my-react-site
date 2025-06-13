import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./home"
import Pages from "./pages"
import Project from "./project"
import Shop from "./shop"
import Blog from "./blog"



function Five(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/pages" element={<Pages/>}/>
                <Route path="/project" element={<Project/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/blog" element={<Blog/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Five;