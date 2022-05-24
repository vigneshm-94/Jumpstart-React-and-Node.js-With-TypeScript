import React from "react";
import {AppContainer} from './App.styled'
import Header from "../components/Header"
import Footer from "../components/Footer"

import QuestionLists from "../components/Question"


export default () => (
    <AppContainer>
        <Header/>
        <QuestionLists/>
        <Footer/>
    </AppContainer>
);