
import './App.css';
import Sidebar from './Sidebar';
import Footer from './Footer';
// import Navbar from 'react-bootstrap/Navbar';
import {Button,Navbar,Nav,Form,FormControl} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">COMPANY NAME</Navbar.Brand>
      <Nav className="mr-auto">
        
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
    <div className="app_page">
        <Sidebar/>
      </div>
  <div className="app_page">
       <Footer/>

              </div>
  </div>
  );
}

export default App;
