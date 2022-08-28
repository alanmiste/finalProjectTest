import Header from "../components/Header";
import Registration from "../components/Registration";
import "./MyAccount.css"
import {Button} from "@mui/material";
import React from "react";

type MyAccountProps = {
    me: string,
    login: (username: string, password: string) => void,
    logout: () => void,
}

export default function MyAccount(props: MyAccountProps) {
    return <>
        <Header me={props.me}/>
        <p>you are in My Account</p>

        {
            props.me === "anonymousUser" ?
                <Registration
                    login={props.login}
                    logout={props.logout}
                    me={props.me}
                />
                : <div className="logout">
                    <Button type="submit" variant="outlined"
                            className='btn' onClick={props.logout}>Logout</Button>
                </div>

        }
    </>
}
