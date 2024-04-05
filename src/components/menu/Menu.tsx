import { Tabs } from "@contentstack/venus-components";
import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { LoadingSkeleton } from "../LoadingSkeleton";
// COMMENT: Uncomment below 2 import statements
import { TMenu } from "../../types";
import { fetchMenuPageData } from "../../api";

const Menu: React.FC = () => {
  // COMMENT: Uncomment from line 14 to 42

   const dispatch = useDispatch();
   const [loading, setLoading] = useState(true);
   const menuPageData = useSelector(
     (state: RootState) => state.main.menuPageData
   );

   useEffect(() => {
     fetchMenuPageData(dispatch, setLoading);
   }, [dispatch]);

   const tabData = menuPageData?.map((course: TMenu, index: number) => ({
     componentData: <MenuCard data={course.dishes} />,
     id: `index-${index}`,
     title: course.course_name,
   }));

   return (
     <div className="menu-page">
       {loading ? (
         <LoadingSkeleton />
       ) : (
         <>
           {tabData && (
             <Tabs shouldHaveBorder={true} tabInfo={tabData} version="v1" />
           )}
         </>
       )}
     </div>
   );

  // COMMENT: Delete below line
  
};

export default Menu;
