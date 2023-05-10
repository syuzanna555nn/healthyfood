import React from 'react';
import { MainLayout} from "./layouts/MainLayout";
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <MainLayout />
        </BrowserRouter>
    </div>
  );
}

export default App;
