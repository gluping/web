import React from 'react'; 
import Chat from './Chat';

function Chats() {
  return (
    <div>
      <Chat
      name="Lana"
      message="hey honn"
      timestamp="5 minutes ago"
      profilePic="https://yt3.ggpht.com/C1x5KJWWQW_JoHQCEEaqpXU6hkII-6kWRTUk8Urg25tE-ZLrKK11WWlKBhfGwt-ZzseGsvYwcXU=s900-c-k-c0x00ffffff-no-rj"
      />
    

    <Chat
      name="Sheena"
      message="wake up .."
      timestamp="1 minutes ago"
      profilePic="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjT6cL4uJKtvvhAQ9T1eUH-eY32ETmusCZKBsaHh--GevyPWVjn0dKUlGFkD3pJ6f3HSP1NkpTTnqn0CCz_0UN8WPm42I6vTOt_TL6YjzdiHX5nGjqvZsAJP4lAH3vp0kXNRr2369ae3ZQQSWo6nCTtYraSTeeuUQ6UdxOOhUnwdjC8BTdpfKND4vUE/s500/sheena-ryder.jpg"
      />


<Chat
      name="Cory"
      message="hi.."
      timestamp="35 minutes ago"
      profilePic="https://pbs.twimg.com/profile_images/1538517094819631104/3fGj5cGg.jpg"
      />


<Chat
      name="Dani"
      message="hello..."
      timestamp="1 minute ago"
      profilePic="https://i1.sndcdn.com/artworks-000566707028-0dn7pc-t500x500.jpg"
      />
    </div>
  )
}

export default Chats
