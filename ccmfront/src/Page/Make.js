import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import '../components/Make.css';
// import PlusForm from '../components/PlusForm'; 

class Make extends Component{
    state = {
        resCount: 1,
        exCount: 1,
        resList: [],
        exList: []
    }
    onClickRest = (e) => {
        const holder="제약사항"+(this.state.resCount+1).toString();
        this.setState(prevState => ({ 
            resCount: prevState.resCount+1,
            resList: [...prevState.resList, <Form.Control type="text" placeholder={holder}/>]
        }))
    }

    onClickEx = (e) => {
        const holderI="입력 예시"+(this.state.exCount+1).toString();
        const holderO="출력 예시"+(this.state.exCount+1).toString();
        this.setState(prevState => ({ 
            exCount: prevState.exCount+1,
            exList: [...prevState.exList, 
            <Form.Row>
                <Form.Group as={Col} controlId="iexam1">
                <Form.Label>입력 예시</Form.Label>
                <Form.Control type="text" placeholder={holderI}/>
                </Form.Group>

                <Form.Group as={Col} controlId="oexam1">
                <Form.Label>출력 예시</Form.Label>
                <Form.Control type="text" placeholder={holderO}/>
                </Form.Group>
            </Form.Row>
        ]
        }))
    }

    render(){
        console.log(this.state.resList);
        return(
            <div id="form">
            <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridTitle">
                <Form.Label>문제 이름</Form.Label>
                <Form.Control type="text" placeholder="문제 이름" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLevel">
                <Form.Label>난이도</Form.Label>
                <Form.Control as="select" placeholder="난이도">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Group as={Col} controlId="description">
                <Form.Label>문제 설명</Form.Label>
                <Form.Control as="textarea" rows={10} placeholder="문제 설명"/>
            </Form.Group>

            <Form.Group controlId="restrict1">
                <Form.Label>제약사항<Button onClick={this.onClickRest}>제약사항 추가</Button></Form.Label>
                <Form.Control type="text" placeholder="제약사항1"/>
                {this.state.resList}
            </Form.Group>

            <Form.Label>입출력 예시<Button onClick={this.onClickEx}>예시 추가</Button></Form.Label>
            <Form.Row>
                <Form.Group as={Col} controlId="iexam1">
                <Form.Label>입력 예시</Form.Label>
                <Form.Control type="text" placeholder="입력 예시1"/>
                </Form.Group>

                <Form.Group as={Col} controlId="oexam1">
                <Form.Label>출력 예시</Form.Label>
                <Form.Control type="text" placeholder="출력 예시1"/>
                </Form.Group>
            </Form.Row>
            {this.state.exList}
            
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            </div>
        );
    }
}

export default Make;