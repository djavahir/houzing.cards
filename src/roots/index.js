import React, { Component } from "react";
import Card from "../components/Card"
import { Container } from "../roots/style";

export default class Root extends Component {
    render() {
        let data = [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15]
        return (

            <Container>
                {data.map((value) => {
                    return <Card />
                })}
                
            </Container>
        );
    }
}