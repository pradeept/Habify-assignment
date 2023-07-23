import { Routes,Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import ForumPage from "./pages/ForumPage";

function App(){
    return <>
        <Routes>
            <Route element={<ForumPage/>} path="/" />
            <Route element={<SignupPage />} path="/signup"/>
        </Routes>
    </>
}

export default App;