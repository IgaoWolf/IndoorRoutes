import { Routes , Route } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";
import { Createlesson } from "./pages/Createlesson";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Subscribe />} />
            <Route path="/event" element={ <Event />} />
            <Route path="/event/lesson/:slug" element={ <Event />}/>
            <Route path="/create/lesson" element={ < Createlesson />}/>
        </Routes>
    );    
}