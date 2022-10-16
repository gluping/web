import './ChatScreen.css' 
import React, { useState } from 'react'
import { Avatar } from '@mui/material';

function ChatScreen() {
    //const [input,setInput] = useState[''];
    const[messages, setMessages] = useState(
        [
            {
                name:"lana",
                image:"https://yt3.ggpht.com/C1x5KJWWQW_JoHQCEEaqpXU6hkII-6kWRTUk8Urg25tE-ZLrKK11WWlKBhfGwt-ZzseGsvYwcXU=s900-c-k-c0x00ffffff-no-rj",
                message:"hey hon",

            },
            {
                name:"lana",
                image:"https://yt3.ggpht.com/C1x5KJWWQW_JoHQCEEaqpXU6hkII-6kWRTUk8Urg25tE-ZLrKK11WWlKBhfGwt-ZzseGsvYwcXU=s900-c-k-c0x00ffffff-no-rj",
                message:"hows it going"

            },
            {
               
                message:"hyy , good",

            }
        ]
    );
    //const handleSend = (e) => {
    //    e.preventDefault();
//
    //    setMessages([...messages, { message: input }]);
    //    setInput("");
    //};
  return (
    <div className='chatScreen'>
      
      <p className='chatScren__timestamp'>
        YOU MATCHED WITH LANA ON 10/2/2001
      </p>
      { messages.map((message) => 
        message.name?(

        
        <div className='chatScreen__message'>
            <Avatar
            className='chatScreen__image'
            alt={message.name}
            src={message.image}/>

            
            <p className='chatScreen__text'>{message.message}</p>
        </div>):(
             <div className='chatScreen__message'>
             <p className='chatScreen__textUser'>{message.message}</p>
             </div>
         )
         
      )}
      
        <div className='chatScreen__in'>
            <form className='chatScreen__input'>
            <input 
            //value={input}
            //onChange={e => setInput(e.target.value)}
            className='chatScareen__inputField'
            placeholder='Type a message'
            type="text" />
            <button type='submit' className='chatScreen__inputButton'>SEND</button>
        </form>
        </div>
</div>

   
  );
  
}

export default ChatScreen;
