import Head from "next/head";
import Landing from '../components/landing'
import Projects from '../components/projects'
import About from '../components/about'
import Blog from '../components/blog'
import Footer from '../components/footer'
import axios from 'axios'
// need to figure out what swr does later 
// ref https://github.com/vercel/next.js/blob/canary/examples/api-routes-rest/pages/index.js
import useSwr from 'swr'

const fetchBlog = async () => await axios.get('https://dev.to/api/articles?username=imkarthikeyan')
  .then(res => ({
    error: false,
    blogs: res.data,
  }))
  .catch(() => ({
      error: true,
      blogs: null,
    }),
  );


const fetcher = (url) => fetch(url).then((res) => res.json())

const  Home = (props) => {
  const {data, error} = useSwr('/api/projects', fetcher)
 

  if (error) return <div>Failed to load</div>
  if (!data) return <div className="absolute inset-0 flex items-center justify-center font-mulish letter-wide">Loading...</div>

  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing/>
      <About/>
      <hr/>
    <Projects title="Latest work" projects = {data}/>
    <hr/>
      <Blog title="Latest Blogs" blogs = {props.blogs.blogs}/> 
      <Footer/>
    </div>
  );
}



export const getServerSideProps = async () => {
  const blogs = await fetchBlog();

  return {
    props: {  blogs }
  };
}

export default Home;