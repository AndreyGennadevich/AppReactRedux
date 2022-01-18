import React from "react";
import {Link} from "react-router-dom";
import "./Form.css";
import { Form, Input, Button } from 'antd';
import {StyledImgWrap, StyledButtonWrap} from "./StyledForm";

export const FormComponent = ({data = [], onSubmit}) => {

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <>
            {data.avatar && <StyledImgWrap><img src={data.avatar} alt="photo"/></StyledImgWrap>}
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ avatar: data.avatar,
                                first_name: data.first_name,
                                last_name: data.last_name,
                                email:data.email}}
                onFinish={onSubmit}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Photo"
                    name="avatar"
                    value="sdasad"
                    rules={[{ required: true, message: 'Please input your link a photo!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Username"
                    name="first_name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="User surname"
                    name="last_name"
                    rules={[{ required: true, message: 'Please input your surname!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Отправить
                    </Button>
                </Form.Item>
            </Form>
            <StyledButtonWrap >
                <Button href="/users" type="primary">
                    Back to users list
                </Button>
            </StyledButtonWrap>
        </>

    )
}