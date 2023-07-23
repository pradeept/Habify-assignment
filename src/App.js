import { Routes,Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import ForumPage from "./pages/ForumPage";

function App(){
    return <>
        <Routes>
            <Route element={<SignupPage />} path="/" />
            <Route element={<ForumPage/>} path="/home"/>
        </Routes>
    </>
}

export default App;