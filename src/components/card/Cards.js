
import  {  React, useEffect, useState} from 'react';
import TinderCard from 'react-tinder-card';
import "./Cards.css"
import database  from '../../firebase';

//import database from './firebase';

function Cards(){
const [people, setPeople] = useState([]);


   useEffect (() =>{
    const unsubscribe = 
        database.collection('people').onSnapshot(snapshot => (
               setPeople(snapshot.docs.map(doc => doc.data()))
        ));
        return () => {
          // ivdethe code willmake sure oruvattam vannavan ini varilla ah code ondakkanam
        unsubscribe();
        }
   },[]);
    
    
   
   
   
   
   
   
   return (
      <div >
        
       
        <div className="glupingCards___cardContainer">
        {people.map(Person =>(
            <TinderCard
            className='swipe'
            key={Person.name}
            preventSwipe={["up","down"]}
            >
                <div 
                style={{  backgroundImage: `url(${Person.url})` }}
                className='card'>
                    <h3>{Person.name}</h3>
                </div>
            </TinderCard>

        ))}
        </div>
        
      </div>
    )
  }
 export default Cards;
