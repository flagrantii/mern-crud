
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Switch, Route, Link,BrowserRouter,Routes } from 'react-router-dom';

import CreateStudent from './components/create-student.component';
import EditStudent from './components/edit-student.component';
import StudentList from './components/student-list.component';

function App() {
  return (
      <div className="App">
      
        <Navbar bg='dark' variant='dark'>
          <Container>

          <Navbar.Brand>
            <Link to={"/create-student"} className="nav-link">
              React Mern Stak CRUD
            </Link>
          </Navbar.Brand>

          <Nav className='justify-content-end'>
            <Nav>
              <Link to={'/create-student'} class="nav-link">
                Create Student
              </Link>
            </Nav>

            <Nav>
              <Link to={'/student-list'} class="nav-link">
                Student List
              </Link>
            </Nav>
            
          </Nav>

          </Container>
        </Navbar>

        <Container>
          <Row>
            <Col md="12">
              <div className='wrapper'>
                <Routes>
                  <Route exact path='/' Component={CreateStudent}/>
                  <Route path='/create-student' Component={CreateStudent}/>
                  <Route path='/edit-student/:id' Component={EditStudent}/>
                  <Route path='/student-list' Component={StudentList}/>

                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default App;
