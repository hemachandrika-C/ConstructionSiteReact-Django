import React,{useState,useEffect} from 'react';
import alanbtn from '@alan-ai/alan-sdk-web';
import ItemsPage from '../../Pages/itemsPages/itemPages';


import wordsToNumbers from 'words-to-numbers';

import MiddlehomePage from '../midsection/middlesectionComponent/middlesectionComponent';

// import HomeHeader from '../../components/homeHeader/homeHeader'

import OurworkShortdef from '../../components/ourworksdef/ourworksdef'
import Footer from '../../components/Footer/footer'
import Booknow from '../../components/Booknow/Booknow'
import Awards from '../../components/Awards/Awards'

const alankey="4695bdfa3a71aed1992dc7a28f1100ff2e956eca572e1d8b807a3e2338fdd0dc/stage";

function AskRecipes() {
    
  const [newsArticles, setnewsArticles] = useState([]);
  const [highlighting, sethighlighting] = useState(0);
  
  useEffect(()=>{
    alanbtn({
      key:alankey,
      onCommand:({command,articles,number,openarticles,values})=>{

      if(command === 'newHeadlines'){
        setnewsArticles(articles)
      }else if(command==='highlight'){
        sethighlighting((prevstate)=>prevstate +1)
      }
      else if(command==='open'){
        window.open(openarticles[ wordsToNumbers(number)])
        alanbtn().playText('Opening your favorite food recipes')
      }
      }
      })

   },[])

   useEffect(()=>{
    window.scrollTo(0,0)
},[])


    return (
        <div>
            {newsArticles.length === 0?<MiddlehomePage/>:<ItemsPage  setArticles={newsArticles} activeArticle={highlighting} />}      
        </div>
    )
}

export default AskRecipes
