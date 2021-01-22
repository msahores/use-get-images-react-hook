import React, { FC, useState, useRef } from 'react';
import './App.css';
import useGetImages, { Image } from './Hooks/useGetImages';

const App: FC = () => {
  
  const ACCESS_KEY: string = process.env.REACT_APP_ACCESS_KEY as string;
  const [images, setCategory] = useGetImages(ACCESS_KEY);

  const [value, setValue] = useState<string>('Enter the category');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="App">
      <>
        <div className="form">
          <input 
            ref={inputRef} 
            type="text" 
            value={value} 
            onChange={e=>setValue(e.target.value)}
            onClick={()=>{if(inputRef.current) inputRef.current.value=''}}
          />
          <button onClick={()=>setCategory(value)}>Search</button>
        </div>
        <div className="imagesContainer">
          {images && images.map((el: Image)=>
            <img 
              key={el.id} 
              src={el.urls.thumb} 
              alt={el.alt_description} 
            />
          )}
        </div> 
      </>
    </div>
  );
}

export default App;
