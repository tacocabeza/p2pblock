import React, {Component} from 'react';
import {Container} from "reactstrap";
import RAM from "../static/images/Rams-Logo-Reversed-one-color-768x769.jpeg";

const COURSE_URL = "https://cs.colostate.edu/~cs458";

export default class Header extends Component{
    render() {
        return (
            <div className="full-width header">
                <div className="vertical-center">
                    <Container>
                        <div className="vertical-center">
                            <a href={COURSE_URL} target="_blank">
                                <img className="tco-logo" src={RAM} alt="TCO Brand Logo"/>
                            </a>
                        </div>
                    </Container>
                </div>
            </div>
        );
    }

}

