import React from "react";
import { Layout } from 'antd';
import {StyledContent, StyledLayout} from "./StyledMainLayout";

const { Header, Footer} = Layout;

export const MainLayout = (props) => {
    return (
        <StyledLayout>
            <Header>Header</Header>
            <StyledContent>{props.children}</StyledContent>
            <Footer>Footer</Footer>
        </StyledLayout>

    )
}
