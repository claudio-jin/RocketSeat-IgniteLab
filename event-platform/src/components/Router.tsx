import { Route, Routes } from "react-router-dom";
import { Event } from "../pages/Event";
import { Subscribe } from "../pages/Subscribe";
//o dois pontos depois da barra representa uma informacao dinamica
export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Subscribe/>}/>

            <Route path="/event" element={<Event/>}/>
            <Route path="/event/lesson/:slug" element={<Event/>}/>

        </Routes>
    )
}