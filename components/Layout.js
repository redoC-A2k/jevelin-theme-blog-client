import Head from "next/head";
import { Component } from "react";
import Footer from "./Footer";
import Navbar from './Navbar';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
    <>
        <Head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        
        <link rel="icon" href="../public/favicon.ico" />
        <title>The JGlog</title>

        </Head>
        <Navbar/>
        <div className="container">
        {this.props.children}
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <Footer/>
    </>);
  }
}
