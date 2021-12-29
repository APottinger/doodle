import { useState } from 'react';
import { CssBaseline } from '@mui/material';

import Pictures from './components/pictures/Pictures'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {

  const [pictures, setPictures] = useState([
    { id: 1, 
      img_url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    },
    { id: 2,
      img_url: 'https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80'
    },
    {
      id: 3,
      img_url: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    },
    {
      id: 4,
      img_url: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    },
    {
      id: 3,
      img_url: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    },
    {
      id: 3,
      img_url: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    }
  ]);

  //create delete feature
  const deleteBtn = (id) => {
    console.log(id)
    setPictures(pictures.filter((p) => p.id !== id)) 
  }

  //conditional rendering
  return (
    <div className="App" style={{backgroundColor: '#fffffa'}}>
      <CssBaseline />
      <Header />
      {pictures.length > 0 ? <Pictures pictures={pictures} deleteBtn={deleteBtn}/> : <h2>No Pictures Featured</h2>}
      <Footer />
    </div>
  );
}

export default App;
