import "bootstrap/dist/css/bootstrap.min.css"; //ㅎㅇㅎㅇ
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./routes/Main";
import Page1 from "./routes/Page1";
import Page2 from "./routes/Page2";
import Page3 from "./routes/Page3";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDbList } from './store'
import { useQuery, } from "@tanstack/react-query";

function App() {
  let state = useSelector((state) => { return state })
  let dispatch = useDispatch();

  // useQuery('abc', async () => {
  //   const abc = await axios.get("/data")
  //     .then((res) => {
  //       dispatch(getDbList(res.data))
  //     })
  // })

  useEffect(() => {
    (async () =>
      await axios
        .get("/data")
        .then((result) => {
          dispatch(getDbList(result.data));
        })
        .catch(() => console.log("데이터가져오기 실패")))();
  }, []);


  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="*" element={<h4>존재하는 않는 페이지 입니다.<br></br>주소를 확인해주세요</h4>} />
      </Routes>
    </>
  );
}

export default App;
