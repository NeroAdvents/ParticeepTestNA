import React from 'react';
import {MDBCol, MDBRow, MDBContainer, MDBBtn, MDBView, MDBMask, MDBIcon } from 'mdbreact';
import { movies$ } from './js/movies.js';
import { NavigationBar } from "./js/Navigation";
import { Animated } from "react-animated-css";
import './css/App.scss';

import DemoPaginator from './js/Pagination.jsx';

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pagination: {
                page: 1,
                perPage: 4,
            },
            items: [],
            category: [],
        };

        this.selectPage = this.selectPage.bind(this);
        this.onPerPage = this.onPerPage.bind(this);
        this.filterList = this.filterList.bind(this);
    }

    async componentDidMount() {
        const data = await movies$;
        console.log(data);
        this.setState({ data });
        this.setState({ items: this.state.data});
        const tmp = this.state.data.map(a => a.category);
        console.log(tmp);
        const category = Array.from(new Set(tmp));
        this.setState({ category });
        console.log("Category: " + category);
    }

    filterList(event){
        var updatedList = this.state.data;
        if (event.target.value === "All") {
            this.setState({items: updatedList});
            return;
        }
        updatedList = updatedList.filter(item => item.category === event.target.value);
        console.log(updatedList);
        this.setState({items: updatedList});
    }

    delete(item){
        const data = this.state.data.filter(i => i.id !== item.id);
        console.log("Data: " + data);
        this.setState({data});
        this.setState({items: data});
        const tmp = this.state.items.map(a => a.category);
        console.log(tmp);
        const category = Array.from(new Set(tmp));
        this.setState({ category });
        console.log("Category: " + category);
    }

    like(item) {
        const like = this.state.data[item.id - 1].likes;
        if (like.clicked === true)
            return;
        like.clicked = true;
        like.number += 1;
        this.setState({ like });
        const dislike = this.state.data[item.id - 1].dislikes;
        if (dislike.clicked === true) {
            dislike.clicked = false;
            dislike.number -=1;
        }
        this.setState({ dislike });
    }

    dislike(item) {
        const dislike = this.state.data[item.id - 1].dislikes;
        if (dislike.clicked === true)
            return;
        dislike.clicked = true;
        dislike.number += 1;
        this.setState({ dislike });
        const like = this.state.data[item.id - 1].likes;
        if (like.clicked === true) {
            like.clicked = false;
            like.number -=1;
        }
        this.setState({ like });
    }
    render() {

        const data = this.state.items || [];
        const pagination = this.state.pagination || {};
        const paginated = paginate(data, pagination);
        const pages = Math.ceil(data.length / Math.max(
            isNaN(pagination.perPage) ? 1 : pagination.perPage, 1)
        );

        return (
            <div className={"App"}>
                <MDBCol>
                    <NavigationBar/>
                    <MDBView id={"apppage"}>
                        <MDBMask overlay={"black-strong"} className="d-flex justify-content-center align-items-center gradient">
                            <MDBContainer className="px-md-3 px-sm-0">
                                <MDBRow>
                                    <MDBCol md="12" className="mb-4 white-text text-center">
                                        <Animated animationIn={"fadeInDown"} animationOut={"fadeOutUp"} animationInDelay={"250"} isVisible={"true"}>
                                            <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
                                                Découvrez, Regardez
                                            </h3>
                                        </Animated>
                                        <Animated animationIn={"fadeIn"} animationOut={"fadeOutUp"} animationInDelay={"250"} isVisible={"true"}>
                                            <hr className="hr-light my-4 w-75" />
                                        </Animated>
                                        <Animated animationIn={"fadeInUp"} animationOut={"fadeOutUp"} animationInDelay={"550"} isVisible={"true"}>
                                            <h4 className="subtext-header mt-2 mb-4">
                                                les tout derniers films sorties au cinéma près de chez vous.
                                            </h4>
                                        </Animated>
                                        <Animated animationIn={"fadeIn"} animationInDelay={"1200"}>
                                            <MDBBtn outline rounded color="white">
                                                <MDBIcon icon="home" /> Visiter Particeep Studio
                                            </MDBBtn>
                                        </Animated>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBMask>
                    </MDBView>
                    <MDBRow style={{background: "#21394c"}}>
                        <MDBContainer >
                            <MDBRow style={{margin: "3% auto"}}>
                            <MDBCol style={{textAlign: "center"}}>
                                <div className={"per-page-container"}>
                                    <select className={"browser-default custom-select"} defaultValue={pagination.perPage} onChange={this.onPerPage} >
                                        <option value={4}>4</option>
                                        <option value={8}>8</option>
                                        <option value={12}>12</option>
                                    </select>
                                </div>
                            </MDBCol>
                            <MDBCol style={{textAlign: "center"}}>
                                <DemoPaginator pagination={pagination} pages={pages} onSelect={this.selectPage}/>
                            </MDBCol>
                            <MDBCol style={{textAlign: "center"}}>
                                <div className={"per-page-container"}>
                                    <select className={"browser-default custom-select"} onChange={this.filterList}>
                                        <option value={"All"}>All</option>
                                        {this.state.category.map((comic) =>
                                            <option>{comic}</option>)}
                                    </select>
                                </div>
                            </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBRow>
                    <MDBRow style={{textAlign: "center", background: "#2d4e68"}}>
                        <div className={"data"} style={{textAlign: "center"}}>
                            <ul style={{listStyle: "none", textAlign: "center"}}>
                                {paginated.data.map((comic) =>
                                    <li key={comic.id}>
                                        <div className="example-2 cards" >
                                            <div className="wrapper" style={{background: "url("+ comic.image + ") center / cover no-repeat"}}>
                                                <div className="header">
                                                    <div className={"date"}>
                                                        <a className={"fas fa-window-close"} onClick={this.delete.bind(this, comic)}></a>
                                                    </div>
                                                    <ul className="menu-content">
                                                        <li><a href="#" className={"like fa fa-thumbs-up"} onClick={this.like.bind(this, comic)}><span>{comic.likes.number}</span></a></li>
                                                        <li><a href="#" className="dislike fa fa-thumbs-down" onClick={this.dislike.bind(this, comic)}><span>{comic.dislikes.number}</span></a></li>
                                                    </ul>
                                                </div>
                                                <div className="data">
                                                    <div className="content">
                                                        <span className="author">{comic.category}</span>
                                                        <h1 className="title"><a href="#">{comic.title}</a></h1>
                                                        <p className="text" id={"scrollbar"}>{comic.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>)}
                            </ul>
                        </div>
                    </MDBRow>
                </MDBCol>
            </div>

        );
    }

    selectPage(page) {
        const state = this.state;
        const pagination = state.pagination || {};
        const pages = Math.ceil(state.data.length / pagination.perPage);

        pagination.page = Math.min(Math.max(page, 1), pages);

        this.setState({
            pagination: pagination
        });
    }

    onPerPage(event) {
        var pagination = this.state.pagination || {};

        pagination.perPage = parseInt(event.target.value, 10);

        this.setState({
            pagination: pagination
        });
    }
}

function paginate(data, o) {
    data = data || [];

    // adapt to zero indexed logic
    var page = o.page - 1 || 0;
    var perPage = o.perPage;

    var amountOfPages = Math.ceil(data.length / perPage);
    var startPage = page < amountOfPages? page: 0;

    return {
        amount: amountOfPages,
        data: data.slice(startPage * perPage, startPage * perPage + perPage),
        page: startPage + 1
    };
}

export default App;
