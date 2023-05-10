import React, {useCallback} from "react";
import { Header } from "../../components/header";
import {Field, Form} from "react-final-form";
import styled from "styled-components";

const StyledFormWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`

const StyledInputs = styled.div `
    display: flex;
    flex-direction: column;
    margin: 15px;
    width: 400px;
`

const StyledLabel = styled.label `
    display: flex;
    color: #646464;
    font-size: 20px;
    font-weight: bold;
    
`

const StyledField = styled(Field) `
    display: flex;
    height: 35px;
    margin-top: 5px;
    border-radius: 5px;
    color: #646464;
    border: 1px solid #dfdfdf;
`

const StyledButton = styled.button `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    width: 400px;
    color: white;
    background-color: #4eafff;
    border: none;
    border-radius: 5px;
    height: 50px;
    margin: 15px;
`

export const Login:React.FC = () => {

    const onSubmit = useCallback ((values: {login: string; password: string}) => {
            console.log("Works");
        }, []);

    return <div>
            <Header />
            <StyledFormWrapper>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <StyledInputs>
                            <StyledLabel>Email</StyledLabel>
                            <StyledField
                                name="login"
                                component="input"
                                type="email" />
                        </StyledInputs>
                        <StyledInputs>
                            <StyledLabel>Password</StyledLabel>
                            <StyledField
                                name="password"
                                component="input"
                                type="password" />
                        </StyledInputs>
                        <StyledButton type="submit">
                            Login
                        </StyledButton>
                    </form>
                    )}
                />
            </StyledFormWrapper>
        </div>
}
