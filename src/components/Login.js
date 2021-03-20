import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'

function Login(props) {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result)=>{
            const newUser = {
                name: result.user.displayName,
                photo: result.user.photoURL,
            }
            localStorage.setItem('user', JSON.stringify(newUser));
            props.setUser(newUser);
        })
        .catch((error)=>{
            alert(error.message)
        })
    }

    return (
        <Container>
            <Content>
                <SlackImg src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png" />
                <h1>Sign in Slack</h1>
                <SignInButton onClick={()=>signIn()}>
                    Sign In With Google
                </SignInButton>
            </Content>
        </Container>
    )
}

export default Login;


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://www.xmple.com/wallpaper/gradient-blue-green-linear-1920x1080-c2-00008b-00fa9a-a-60-f-14.svg");
`

const Content = styled.div`
    background: #ebeeee;
    padding: 70px;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
`

const SlackImg = styled.img`
    height: 100px;
`

const SignInButton = styled.button`
    margin-top: 30px;
    background-color: #0a8d48;
    color: white;
    border: none;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
`