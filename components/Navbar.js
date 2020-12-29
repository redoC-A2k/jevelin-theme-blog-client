import { Component } from "react";
import Link from "next/link"

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedin: false,
      isMenuOpen:false
    };
  }
  handle_hamburger_click=()=>{
    console.log('running')
    if(!this.state.isMenuOpen){
      document.getElementById("arrow-line-1").classList.add("arrow-line-1");
      document.getElementById("arrow-line-2").classList.add("arrow-line-2");
      document.getElementById("arrow-line-3").classList.add("arrow-line-3");
    }
    else{
      document.getElementById("arrow-line-1").classList.remove("arrow-line-1");
      document.getElementById("arrow-line-2").classList.remove("arrow-line-2");
      document.getElementById("arrow-line-3").classList.remove("arrow-line-3");
    }
  }
  render() {
    return (
      <header>
        <nav className="nav">
          <Link href="/">
            <a>
              <span className="logo">JGlog</span>
            </a>
          </Link>
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/blogs/categories"><a >Categories</a></Link></li>
            <li>{this.state.isSignedin ? <Link href="/user/profile"><a >Profile</a></Link> : <Link href="/user/authenticate"><a>Signin/up</a></Link>}</li>
          </ul>
          <span className="hamburger" onClick={()=>this.handle_hamburger_click()}>
            <li id="arrow-line-1"></li>
            <li id="arrow-line-2"></li>
            <li id="arrow-line-3"></li>
          </span>
        </nav>
      </header>
    );
  }
}
