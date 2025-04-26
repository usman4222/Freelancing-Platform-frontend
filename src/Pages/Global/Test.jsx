import React from "react";
import { useLocation } from "react-router-dom";

const Test = () => {
    const {pathname } = useLocation()
    
  return <div>{pathname}</div>;
};

export default Test;
