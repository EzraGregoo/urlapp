import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Navbar, Header, Urlform, Section, Footer, Items } from './components';

function App() {
  const initialHist = []
  const [ history, setHistory ] = useState(initialHist);
  const [ isItem, setIsItem ] = useState(false);
  const [ isInput, setIsInput ] = useState(true); 

  const [ url, setUrl ] = useState('');
  let apiResponse = [];

  useEffect(()=>{
    const data = localStorage.getItem('urls');
    if(data!==null&&data!=='[]'){
      setHistory(JSON.parse(data));
      setIsItem(true);
    }
  },[])

  const handleSubmit = (e)=>{
    e.preventDefault();
    if (url.length!==0){
      axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`).then((response)=>{
        apiResponse = [{
          originalUrl: response.data.result.original_link,
          shortUrl: response.data.result.short_link
        }]
        const newHistory = history.concat(apiResponse);
        setHistory(newHistory);
        setIsItem(true);
      }) 
      setIsInput(true);
    } else{setIsInput(false)}
  }

  useEffect(()=>{
    localStorage.setItem('urls', JSON.stringify(history))
  },[history])

  const handleDelete = ()=>{
    setIsItem(false);
    setHistory(initialHist);
    localStorage.clear()
  }


  return (
    <div className='app font-poppins relative overflow-x-hidden'>
      <header className='relative px-5 pt-5 pb-40 lg:px-12 lg:pt-8 lg:pb-52'>
        <Navbar />
        <Header />
        <Urlform 
          url={url}
          setUrl={setUrl}
          handleSubmit={handleSubmit}
          isInput={isInput}
        />
      </header>
      <section className='bg-section'>
        <Items 
          isItem={isItem}
          history={history}
          handleDelete={handleDelete}
        />
        <Section isItem={isItem}/>
      </section>
      <Footer />
    </div>
  );
}

export default App;
