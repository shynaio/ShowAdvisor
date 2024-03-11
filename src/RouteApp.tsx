import { Route, Routes, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { ShowDetail } from "./pages/ShowDetail/ShowDetail";
import { ROUTES } from "./routes/routes";

export const RouteApp = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<HomePage/>} path={ROUTES.index}/>
            <Route element={<ShowDetail/>} path={ROUTES.showDetail + '/:id'}/>
        </Routes>
    </BrowserRouter>
};