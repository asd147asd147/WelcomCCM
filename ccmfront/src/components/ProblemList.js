import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Pagination from './Pagination';
import _ from 'lodash';

class ProblemList extends Component {
    Problem = [
        {num:1, title: "문제 이름입니당.", level : 5, category: "a", writer: "Hyunju an", success: 50},
        {num:2, title: "문제 이름입니다.", level : 4, category: "b", writer: "Hyunju an", success: 50},
        {num:3, title: "문제이름입니당.", level : 3, category: "c", writer: "Hyunju an", success: 50},
        {num:4, title: "문제이름임", level : 2, category: "d", writer: "Hyunju an", success: 50},
        {num:5, title: "문제 이름일까 아닐까", level : 1, category: "e", writer: "Hyunju an", success: 50},
        {num:6, title: "문제 이름입니당.", level : 5, category: "a", writer: "Hyunju an", success: 50},
        {num:7, title: "문제 이름입니다.", level : 4, category: "b", writer: "Hyunju an", success: 50},
        {num:8, title: "문제이름입니당.", level : 3, category: "c", writer: "Hyunju an", success: 50},
        {num:9, title: "문제이름임", level : 2, category: "d", writer: "Hyunju an", success: 50},
        {num:10, title: "문제 이름일까 아닐까", level : 1, category: "e", writer: "Hyunju an", success: 50},
        {num:11, title: "문제 이름입니당.", level : 5, category: "a", writer: "Hyunju an", success: 50},
        {num:12, title: "문제 이름입니다.", level : 4, category: "b", writer: "Hyunju an", success: 50},
        {num:13, title: "문제이름입니당.", level : 3, category: "c", writer: "Hyunju an", success: 50},
        {num:14, title: "문제이름임", level : 2, category: "d", writer: "Hyunju an", success: 50},
        {num:15, title: "문제 이름일까 아닐까", level : 1, category: "e", writer: "Hyunju an", success: 50},
        {num:16, title: "문제 이름입니당.", level : 5, category: "a", writer: "Hyunju an", success: 50},
        {num:17, title: "문제 이름입니다.", level : 4, category: "b", writer: "Hyunju an", success: 50},
        {num:18, title: "문제이름입니당.", level : 3, category: "c", writer: "Hyunju an", success: 50},
        {num:19, title: "문제이름임", level : 2, category: "d", writer: "Hyunju an", success: 50},
        {num:20, title: "문제 이름일까 아닐까", level : 1, category: "e", writer: "Hyunju an", success: 50},
        {num:21, title: "문제 이름입니당.", level : 5, category: "a", writer: "Hyunju an", success: 50},
        {num:22, title: "문제 이름입니다.", level : 4, category: "b", writer: "Hyunju an", success: 50},
        {num:23, title: "문제이름입니당.", level : 3, category: "c", writer: "Hyunju an", success: 50},
        {num:24, title: "문제이름임", level : 2, category: "d", writer: "Hyunju an", success: 50},
        {num:25, title: "문제 이름일까 아닐까", level : 1, category: "e", writer: "Hyunju an", success: 50}
    ];
    state = {
        data: this.Problem,
        pageSize: 10,
        itemsCount: 25,
        currentPage: 1,
        startIndex: 0
    };
    pagedProblems = [];
    handlePageChange = (page) => {
        this.setState(() => {
            return {
              currentPage: page,
              startIndex: (this.state.currentPage-1)*this.state.pageSize
            }
        });
        // console.log(this.state.currentPage);
        // console.log(this.state.startIndex);
    }
    pagedProblems = _.slice(this.Problem, this.state.startIndex, this.state.startIndex+10);
    list = this.pagedProblems.map((v)=>{
        // list = this.props.data.map((v)=>{
        return(
            <tr key={"ProblemTr"+v.num}>
                <td key={"ProblemNum"+v.num}>{v.num}</td>
                <td key={"ProblemTitle"+v.num}><a onClick={(e) => {console.log("clicked "+v.num)}}>{v.title}</a></td>
                <td key={"ProblemLevel"+v.num}>{v.level}</td>
                <td key={"ProblemCategory"+v.num}>{v.category}</td>
                <td key={"ProblemAuth"+v.num}>{v.writer}</td>
                <td key={"ProblemSuc"+v.num}>{v.success}</td>
            </tr>
        )
    })
    render() {
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
                <Pagination 
                    itemsCount={this.Problem.length} 
                    pageSize={this.state.pageSize} 
                    currentPage={this.state.currentPage}
                    onPageChange={this.handlePageChange}
                ></Pagination>
            </div>
        )
    }
}

export default ProblemList;