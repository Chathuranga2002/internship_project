import React, {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import {Nav} from "../../commen/nav/Nav";
import {MainContent} from "../../commen/MainContent/MainContent";


export class Home extends Component {
    render() {
        return (
            <>
                <div className={" "}>
                    <Nav/>
                </div>

                <div className="">
                    <MainContent/>
                </div>
            </>
        );
    }
}
