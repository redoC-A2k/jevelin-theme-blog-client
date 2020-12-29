import { Component } from "react"

export const getStaticProps = async ({params}) =>{
  const res = await fetch(`${process.env.BLOG_URL}/ghost/api/v3/content/posts/?key=${process.env.CONTENT_API_KEY}&fields=title,slug,html,excerpt`)
  const posts = await res.json();
  // console.log(posts)
  return {
    props: {posts}
  }
}

export default class Home extends Component {
  render(){
    return (
      <div>
      {/* {
        this.props.posts.posts.map((eachPost,ind)=>{
          console.log(eachPost)
          return eachPost.html
        })
      } */}
      {/* <div id="mydiv" dangerouslySetInnerHTML={{__html:this.props.posts.posts[0].html}}></div> */}
      </div>
    )
  }
}

