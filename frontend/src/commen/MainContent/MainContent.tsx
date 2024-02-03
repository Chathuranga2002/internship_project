import React, {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {CreateUser} from "../../page/createUser/CreateUser";
import {DeleteUser} from "../../page/deleteUser/DeleteUser";
import {ListUsers} from "../../page/listUser/ListUsers";
import {UserDetails} from "../../page/userDetails/UserDetails";
import {UpdateUser} from "../../page/updeteUser/UpdateUser";


export class MainContent extends Component {
    render() {
        return (
            <div className={""}>

                <Routes>
                    <Route path={"/"} Component={CreateUser}></Route>
                    <Route path={"/DeleteUser"} Component={DeleteUser}></Route>
                    <Route path={"/ListUsers"} Component={ListUsers}></Route>
                    <Route path={"/GetUserDetails"} Component={UserDetails}></Route>
                    <Route path={"/UpdateUser"}  Component={UpdateUser}></Route>
                </Routes>


            </div>

        );
    }
}
