import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Pagination from './Pagination';
import _ from 'lodash';
import axios from 'axios';

class ProblemList extends Component {
    Problem = [];

    componentDidMount() {
        this._readList()
        
    }

    _readList = async() => {
        const res = await (await axios.get('http://localhost:5000/problemlist/'));
        let plist = []
        res.data.map(d => {
            return(plist.push(d))
        })
        this.Problem = plist.reverse()
        this.setState({data: this.Problem})
    }

    state = {
        data: this.Problem,
        pageSize: 10,
        itemsCount: 25,
        currentPage: 1,
        startIndex: 0
    };
    

    pagedProblems = [];

    handlePageChange = (page) => {
        this.setState({
            currentPage: page,
            startIndex: (page - 1)*this.state.pageSize,
        });
    }

    solving = (num) =>{
        this.props.proper.history.push({
            pathname: '/problem',
            search: '?num='+num
        })
    }

    makeTable = () => {
        this.pagedProblems = _.slice(this.Problem, this.state.startIndex, this.state.startIndex + 10);
        this.list = this.pagedProblems.map((v)=>{
            return(
                <tr key={"ProblemTr"+v.num} onClick={(e) => this.solving(v.num,e)} className="cursor-pointer">
                    <td key={"ProblemNum"+v.num}>{v.num}</td>
                    <td key={"ProblemTitle"+v.num}>{v.title}</td>
                    <td key={"ProblemLevel"+v.num}>{v.level}</td>
                    <td key={"ProblemCategory"+v.num}>{v.category}</td>
                    <td key={"ProblemAuth"+v.num}>{v.writer}</td>
                    <td key={"ProblemSuc"+v.num}>{v.accuracy}</td>
                </tr>
            )
        })
    }

    render() {
        this.makeTable()
        return (
            <div>
                <Table striped hover variant="light">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>제목</th>
                            <th>등급</th>
                            <th>분류</th>
                            <th>작성자</th>
                            <th>성공률</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.list}
                    </tbody>
                </Table>
                {Pagination(this.Problem.length,this.state.pageSize,this.state.currentPage,this.handlePageChange)}
            </div>
        )
    }
}

export default ProblemList;