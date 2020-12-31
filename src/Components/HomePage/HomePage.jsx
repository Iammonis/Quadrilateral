import axios from "axios";
import React from "react";
import styled from 'styled-components'

export class HomePageComponent extends React.Component {
    componentDidMount() {
        axios.get("https://quadrilateral-naukri.herokuapp.com/users")
        .then(res => {
            console.log(res)
        })
    }

    render() {
        return(
            <div>
                hi
            </div>
        )
    }
}