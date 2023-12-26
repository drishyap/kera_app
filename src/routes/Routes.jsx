import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import PageNotFound from "../components/pageNotFound";
import Pricing from "../components/pricing/Pricing";

const RouteList = () => {
   const homeRoutes = {
      home: [
         {
            path: "/",
            component: <Home />,
         },
         {
            path: "/pricing",
            component: <Pricing />,
         },
         {
            path: "/pricing",
            component: <Pricing />,
         },
      ],
   };
   return (
      <Routes>
         {homeRoutes?.home?.map((item) => {
            return (
               <Route
                  key={item?.path}
                  path={item?.path}
                  element={item?.component}
               />
            );
         })}

         <Route path="*" element={<PageNotFound />} />
      </Routes>
   );
};

export default RouteList;
