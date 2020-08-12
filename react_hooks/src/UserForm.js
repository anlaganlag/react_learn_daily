import React ,{ useState } from 'react';
import {Form, Button,Alert} from 'react-bootstrap'
function UserForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')   
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState ("")  

    const handleSubmit = event => {
        event.preventDefault();
        let emailValid = false;
        if(email.length === 0){
            setEmailError("Email is required");
        }       
        else if(email.length < 6){
            setEmailError("Email should be minimum 6 characters");
        }     
        else{
            setEmailError("")
            emailValid = true
        }
        let passwordValid = false
        if(password.length === 0){
            setPasswordError("Password is required");
        }       
        else if(password.length < 6){
            setPasswordError("Password should be minimum 6 characters");
        }     
        else if(password.indexOf(' ') >= 0){       
            setPasswordError('Password cannot contain spaces');                         
        }   
        else{
            setPasswordError("")
            passwordValid = true
        }       

        if(emailValid && passwordValid){           
            alert('Email: ' + email + '\nPassword: ' + password);
            setEmail("");
            setPassword("");
        }  
    }  
    return (
        <div>
            <Form onSubmit={handleSubmit} >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>郵箱地址</Form.Label>
                    <Form.Control type="email" placeholder="輸入郵箱地址..." 
                        onChange={event => setEmail(event.target.value)} 
                        value={email}
                        />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.

                    </Form.Text>
                </Form.Group>
                {emailError.length > 0 &&
                <Alert variant="danger">{emailError}</Alert>}  

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>密碼</Form.Label>
                    <Form.Control type="password" placeholder="輸入密碼..." 
                        onChange={event => setPassword(event.target.value)} 
                        value={password}
                        />
                </Form.Group>
                {passwordError.length > 0 &&
                <Alert variant="danger">{passwordError}</Alert>} 
                <Button variant="primary" type="submit">
                    提交
                </Button>
            </Form>
            Email entered: {email}
            <br />
            Password entered: {password}      
        </div>
    );
}
export default UserForm;