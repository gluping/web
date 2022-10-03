
import  {  React, useState} from 'react';
import TinderCard from 'react-tinder-card';
import "./Cards.css"
import Header from './Header';

//import database from './firebase';

function Cards(){
const [people, setPeople] = useState([
    {
        name:"jeff",
        url:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVvdf3mtAr8BQaBqwu2wAFbJD1dH6jtmyAK7hZRRnbFc0yc_pT"
    },
    {
        name:"elon musk",
        url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/220px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
    }
]);


   // useEffect(() =>{
   //         database.collection('people').onSnapshot(snapshot =>(
   //             setPeople(snapshot.docs.map(doc => doc.data()))
   //         ))
   // },[]);
    
    return (
      <div>
        
        <Header/>
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
