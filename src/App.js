import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";
import {Home} from "./pages/Home";
import {Users} from "./pages/Users";
import {UsersList} from "./pages/UsersList";
import {AddUser} from "./pages/AddUser";
import {NotFound} from "./pages/NotFound";
import {UserPage} from "./pages/UserPage";
import {ChangeUser} from "./pages/ChangeUser";
import 'antd/dist/antd.css';
import {MainLayout} from "./Layout/MainLayout";

function App() {
    return (
        <MainLayout>
            <div className="App">
                <Router>
                    <Routes>
                        <Route path="users" element={<Users/>}>
                            <Route index element={<UsersList/>}/>
                            <Route path="add" element={<AddUser/>}/>
                            <Route path=":id" element={<UserPage/>}/>
                            <Route path="change/:id" element={<ChangeUser/>}/>
                        </Route>
                        <Route path="/" element={<Home/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </Router>
            </div>
        </MainLayout>

    );
}

export default App;
