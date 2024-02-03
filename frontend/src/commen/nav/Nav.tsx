import {Component} from "react";
import logo from '../../../images/icon2.png'
import {Link} from "react-router-dom";
export class Nav extends Component {
    render() {
        return (

            <div className="p-6 bg-black flex justify-between pr-4 pl-10">

                <div className="flex">
                    <h1 className="text-2xl font-bold text-white">
                        Rc World</h1>
                    {/*<img className="h-[10px] w-[10px] ml-1 pt-1" src={logo}*/}
                    {/*     alt=""/>*/}
                </div>

                <ul className="list-none flex mt-1">
                    <li className="inline-block mr-4 text-[13] text-white">
                        <Link to="/">Home</Link></li>
                    <li className="inline-block mr-4 text-[13] text-white">
                        <Link to="/shop">Shop</Link></li>
                    <li className="inline-block mr-4 text-[13] text-white">
                        <Link to="/contact">Contact</Link></li>
                    <li className="inline-block mr-4 text-[13] text-white">
                        <Link to="/cart">Cart</Link></li>
                </ul>


                {/*<button className="text-[8px] text-[#e6f0e6]*/}
                {/*                   bg-secondary pl-3 pr-3*/}
                {/*                   hover:text-tertiary"*/}
                {/*>*/}
                {/*    <Link to={"/login"}> Sign In</Link>*/}
                {/*    /!*onClick={this.onButtonClick}*!/*/}
                {/*</button>*/}
                <button
                    className="bg-red-500 hover:bg-white hover:text-black text-white text-sm font-bold py-1 px-2
                     rounded-full transition duration-300 ease-in-out">
                    <Link to="/login">Sign In</Link>
                </button>
            </div>
        );
    }


    // onButtonClick = () => {
    //
    //     // alert("Button Clicked!")
    // }
}
