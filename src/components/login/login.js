import React,{useState} from 'react';
import { Button, Form, Row,Col, FormGroup, Label, Input } from 'reactstrap';
import * as actions from '../../store/actions/actions';
import { connect } from 'react-redux';

const LoginForm = (props) => {
    const [formState, setformState] = useState({username:'',password:''});
    const [formStateErr, setformStateErr] = useState({username:'',password:''});

    const submitHandler = event => {
        event.preventDefault();
        let isFormValid = validationHandler();
        if(isFormValid){
            props.Onlogin(formState)
        }
    };

 const onValueChange=(event,name)=>{
    props.errMessage && props.ClearError();
     let tempFormState = {...formState};
     let tempFormStateErr = {...formStateErr};
     switch (name) {
         case 'username':
            tempFormState.username=event.target.value;
            tempFormStateErr.username=null;
             break;
        case 'password':
            tempFormState.password=event.target.value;
            tempFormStateErr.password=null;
             break;        
         default:
             break;
     }
     setformState({...tempFormState});
     setformStateErr({...tempFormStateErr});
 }

 const validationHandler=()=>{
     let tempFormStateErr = {...formStateErr}
     let isValid=true;
     for(let key in formState){
         if(!formState[key]){
            tempFormStateErr[key]='*Required';
            isValid=false
         }
     }
     setformStateErr({...tempFormStateErr});
     return isValid;
 }

  return (
    <Row >
    <Col md={{ size: 4, offset: 4 }}>
    <Form onSubmit={submitHandler}>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input type="email" 
        name="username" 
        value={formState.username}
        onChange={e=>{ onValueChange(e,'username')}}
        placeholder="Username" />
        {formStateErr.username && (<span>{formStateErr.username}</span>)}
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" 
        name="password" 
        value={formState.password}
        onChange={e=>{ onValueChange(e,'password')}}
        placeholder="Password" />
          {formStateErr.password && (<span>{formStateErr.password}</span>)}
      </FormGroup>
      <div>{props.errMessage && (<span>{props.errMessage}</span>)}</div>
      <Button type="submit">Submit</Button>
    </Form>
    </Col>
    </Row>
  );
}

const mapStateToProps = state => {
	return {
		errMessage: state.errMessage
	};
};

const mapDispatchToProps = dispatch => {
	return {
        Onlogin: (userObj) => dispatch(actions.Login(userObj)),
        ClearError : ()=> dispatch(actions.setLoginError())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);