import React,{useState} from 'react';
import {Card,Form, Button, Container, Row, Col, InputGroup, FormControl, Badge, FormGroup} from 'react-bootstrap';
import {Input} from 'reactstrap';
import axios from 'axios';
import {
    Redirect
  } from "react-router-dom";


import "../Postaproject.css";

import button1 from './images/button1.png';
import button2 from './images/button2.png';
import button3 from './images/button3.png';
import button4 from './images/button4.png';
import button5 from './images/button5.png';
import button6 from './images/button6.png';
import button7 from './images/button7.png';
import button8 from './images/button8.png';

import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';


function PostaProject(props){
    
    const[state, setState] = useState({
         counter:0,
        name:"", description:"", skills:"",
        projecttype:"", payment:"", budget:"",
        counter1:false, help:"" ,contestvalue:0,
        currency:"", urgent:"", contest:0});


        
console.log(props.login);
    return(

        <>
         {!props.login ? <Redirect to="/login"/> : ( 

<Card className="postcard">
<Card.Body>
<Form className="form" onSubmit={(e)=>{
    e.preventDefault();
    axios.post('http://freelancer.test/api/postaproject',{
        name: state.name,
        description: state.description,
        skills: state.skills,
        projecttype: state.projecttype,
        payment: state.payment,
        budget: state.budget,
        contestvalue: state.contestvalue,
        contest: state.contest,
        help: state.help,
       },
        {
           headers: {
             Authorization: "Bearer " + localStorage.getItem("token")
           }
         }
    ).then((response)=>{
        alert("Your project has been posted");
        setState({counter:0, name:"", description:""});
    }).catch(()=>{
        alert("Something went wrong");
    })

}}>
<Form.Group controlId="choosename">
<Form.Label> <h3> Choose a name for your project </h3>   </Form.Label>
<Form.Control type="text" placeholder="e.g. Build me a website" value={state.name} onChange={(e)=>{
setState({...state,name:e.target.value})

}}/>
</Form.Group>
<br/>
<Form.Group controlId="Textarea">
<Form.Label> <h3> Tell us more about your project </h3> <br/>
Start with a bit about yourself or your business, and include an overview of what you need done.
</Form.Label>
<Form.Control as="textarea" rows="5"  placeholder="Describe your project here..." value={state.description} onChange={(e)=>{
setState({...state,description:e.target.value})

}}/>
</Form.Group>
<div className="dropzone">
<button type="button" className="btnnn" name="uploadbutton"> Upload Files</button>
<p className="uploadbtn"> Drag and drop any images or documents that might be helpful in explaining your 
project brief here. </p>
<input type="file" className="upload-input" />
</div>

{state.counter===0 ? <Button variant="dark" disabled={!state.name || !state.description} onClick={()=>{
setState({...state, counter: state.counter + 1})

console.log(state.counter);

}}> Next </Button> : null}

{state.counter===1 ? (
<>
<br/>
<Form.Group controlId="Input1">
   
<Form.Label> <h3> What skills are required? </h3> <br/>
Enter up to 5 skills that best describe your project. Freelancers will use these skills to find projects they are most interested and experienced in.
</Form.Label>
<Form.Control type="text" placeholder="What skills are required?" value={state.skills} onChange={(e)=>{
setState({...state,skills:e.target.value})
}}/>
</Form.Group>

<Button variant="dark" disabled={!state.skills} onClick={()=>{
setState({...state, counter: state.counter + 1})

console.log(state.counter);

}}> Next </Button>
</>
)  
: null}

{state.counter===2 ? (
<>
<br/>
<Form.Group controlId="Input1">
<Form.Label> <h3> What skills are required? </h3> <br/>
Enter up to 5 skills that best describe your project. Freelancers will use these skills to find projects they are most interested and experienced in.
</Form.Label>
<Form.Control type="text" placeholder="What skills are required?" value={state.skills} onChange={(e)=>{
setState({...state,skills:e.target.value})
}}/>
</Form.Group>

<br/>

<Container>
<Row> <h2> How would you like to get it done? </h2></Row>
<Row>
<Col sm={6}><a href="#" onClick={(e)=>{
e.preventDefault();

setState({...state, projecttype:"project"})
}}> <img className="image" className="image" src={button1}/> </a></Col>
<Col sm={6}><a href="#" onClick={(e)=>{
e.preventDefault();
setState({...state, projecttype:"contest", counter1:false, payment:"", help:""})

}}> <img className="image" src={button2}/> </a></Col>
</Row>
</Container>
</>
) : null}


{state.projecttype==="project" ?
<>
<br/>
<Container>
<Row> <h2> How do you want to pay? </h2></Row>
<Row>
<Col sm={6}><a href="#" onClick={(e)=>{
e.preventDefault();

setState({...state, payment:"fixed"})
}}> <img className="image" src={button3}/> </a></Col>
<Col sm={6}><a href="#" onClick={(e)=>{
e.preventDefault();
setState({...state, payment:"hourly"})

}}> <img className="image" src={button4}/> </a></Col>
</Row>
</Container> 
</>: null}
<br/>


{state.projecttype==="contest" ? 

<>

<h2> What is your budget? </h2>

<br/>

<Card className="contest">

<Container>
<Row sm={12}>


 {state.contestvalue <= 30 ? 
 <Badge className="badge1"> <span>EXCELLENT RESULTS</span><br/>
 <span> Expect around 150 entries</span> </Badge> :

<Badge className="badge2"> 

<span> BEST RESULTS </span> <br/>
<span> Expect around 250 entries </span>

</Badge>

}


</Row>


<RangeSlider
value={state.contestvalue}
onChange={(e)=>{
setState({...state,contestvalue:e.target.value})
}}
/>

<Row className="hund">
<Col> 0 </Col>
<Col className="hundred"> 100+ </Col>


</Row>



<Row>
 <Col sm={6}> 

 <InputGroup className="mb-3">
<InputGroup.Prepend>
<InputGroup.Text id="basic-addon1"> &euro; </InputGroup.Text>
</InputGroup.Prepend>
<FormControl value={state.contestvalue}/>
</InputGroup>

 
 </Col>
 <Col sm={6}>

 <FormGroup>
<Input type="select" name="select" id="currency" onChange={(e)=>{
 setState({...state, currency: e.target.value})
}}>
 <option> Euro </option>
 <option> Dollar </option>
 <option> Pounds </option>
 <option> Australian Dollar </option>
</Input>
</FormGroup>


 </Col>
</Row>



</Container>

</Card>
<br/>

<Container>
<Row> <h2> Is your contest urgent? </h2></Row>
<Row>
<Col sm={6}><a href="#" onClick={(e)=>{
e.preventDefault();

setState({...state, urgent:1})
}}> <img className="image" src={button7}/> </a></Col>
<Col sm={6}><a href="#" onClick={(e)=>{
e.preventDefault();
setState({...state, urgent:2})

}}> <img className="image" src={button8}/> </a></Col>
</Row>
</Container>
<br/>
<Container>
<Row> <h2> How long would you like to run your contest? </h2> </Row>
<Row>
<InputGroup size="sm" className="mb-3">
<InputGroup.Prepend>
<InputGroup.Text id="inputGroup-sizing-sm"> Days </InputGroup.Text>
</InputGroup.Prepend>
<FormControl type="number" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={state.contest} onChange={(e)=>{
setState({...state,contest:e.target.value})
}}/>
</InputGroup>
</Row>

</Container>

<Button variant="primary" type ="submit"  onClick={()=>{
console.log(state);
}}> Post my project </Button>


</>

: null}



{state.payment==="fixed" || state.payment==="hourly" ?
<>
<br/>
<h2> What is your estimated budget? </h2> 

<InputGroup size="sm" className="mb-3">
<InputGroup.Prepend>
<InputGroup.Text id="inputGroup-sizing-sm"> CAD </InputGroup.Text>
</InputGroup.Prepend>
<FormControl type="number" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={state.budget} onChange={(e)=>{
setState({...state,budget:e.target.value, counter1:true})
}}/>
</InputGroup>
</>
: null}

{state.counter1 ? 
<>
<br/>
<Container>
<Row> <h2> Do you need a helping hand? </h2></Row>
<Row>
<Col sm={6}><a href="#" onClick={(e)=>{
e.preventDefault();

setState({...state, help:"self"})
}}> <img className="image" src={button5}/> </a></Col>
<Col sm={6}><a href="#" onClick={(e)=>{
e.preventDefault();
setState({...state, help:"recruiter"})

}}> <img className="image" src={button6}/> </a></Col>
</Row>
</Container> 


</> : null
}

{state.help ? <> <br/> <Button variant="primary" type ="submit"  onClick={()=>{
console.log(state);
}}> Post my project </Button> </> : null}







</Form>
</Card.Body>
</Card>





         )}
        
        
        </>

    );
}

export default PostaProject;