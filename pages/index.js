import Head from "next/head";
import Landing from '../components/landing'
import Projects from '../components/projects'
import About from '../components/about'
import Blog from '../components/blog'
import Footer from '../components/footer'
import fetch from 'node-fetch'

const  Home = (props) => {
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
    <Projects title="Latest work" projects = {props.projects}/>
    <hr/>
      <Blog title="Latest Blogs" blogs = {props.blogs}/>
      <Footer/>
    </div>
  );
}



export async function getServerSideProps() {
  const url = process.env.ENVIRONMENT === 'development' ? 'http://localhost:3000' : process.env.VERCEL_URL
  console.log(url)
  const [projectRes, blogRes] = await Promise.all([fetch(`${url}/api/projects`),fetch('https://dev.to/api/articles?username=imkarthikeyan')])
  const [projects,blogs] =  await Promise.all([
    projectRes.json(), 
    blogRes.json()
  ]);
  if (!blogs || !projects) {
    return {  
      notFound: true,
    }
  }

  return {
    props: { projects, blogs }, // will be passed to the page component as props
  }
}

export default Home;