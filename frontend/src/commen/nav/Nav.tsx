import {Component} from "react";
import logo from '../../../images/icon2.png'
import {Link} from "react-router-dom";
import {CreateUser} from "../../page/createUser/CreateUser";
import {DeleteUser} from "../../page/deleteUser/DeleteUser";
import {ListUsers} from "../../page/listUser/ListUsers";
import {UserDetails} from "../../page/userDetails/UserDetails";
import {UpdateUser} from "../../page/updeteUser/UpdateUser";
export class Nav extends Component {
    render() {
        return (

            <div className="p-6 bg-black flex justify-center pr-4 pl-10">
                <ul className="list-none flex mt-1">
                    <li className="inline-block mr-4 text-[13] text-white">
                        <Link to="/">CreateUser</Link></li>
                    <li className="inline-block mr-4 text-[13] text-white">
                        <Link to="/UpdateUser">UpdateUser</Link></li>
                    <li className="inline-block mr-4 text-[13] text-white">
                        <Link to="/ListUsers">ListUsers</Link></li>
                    <li className="inline-block mr-4 text-[13] text-white">
                        <Link to="/GetUserDetails">UserDetails</Link></li>
                    <li className="inline-block mr-4 text-[13] text-white">
                        <Link to="/DeleteUser">DeleteUser</Link></li>
                </ul>
            </div>
        );
    }


    // onButtonClick = () => {
    //
    //     // alert("Button Clicked!")
    // }
}
