import Email from '@/components/Email'
import Loader from '@/components/Loader'
import SocialIcons from '@/components/SocialIcons'
import About from '@/sections/About/About'
import Contact from '@/sections/Contact/Contact'
import Experience from '@/sections/Experience/Experience'
import Hero from '@/sections/Hero/Hero'
import NavBar from '@/sections/NavBar/NavBar'
import Projects from '@/sections/Projects/Projects'
import Head from 'next/head'
import React, {useState} from 'react'

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 250);
  };
  return (
    <div className='app'>
      <Head>
        <title>Gaova</title>
        <link rel='shortcut icon' href='/logo.png'/>
      </Head>
      {
        showContent && (
          <>
           <NavBar />
          <SocialIcons />
          <Email />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
          {/* <Footer /> */}
        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  );
}

export default Index;