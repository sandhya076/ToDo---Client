
import React from 'react';
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import UpdateForm from "./UpdateForm";

export default function FindUpdateForm() {
  const location = useLocation();
  const Lists = useSelector((store) => store.SRlist);
  return (
    <>
      {Lists.length === 0 ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : (
        <>
          <UpdateForm
            uList={Lists.filter((w) => w._id === location.search.slice(1))[0]}
          />
        </>
      )}
    </>
  );
}

  
  
   
