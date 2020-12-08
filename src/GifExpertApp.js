import React, { useState } from 'react';


import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Samurai X']);



  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />


      <ul>
        {
          categories.map( (category) => (
            <GifGrid 
              key={ category }
              category={ category } 
            />
          ))
        }
      </ul>

    </>
  );
};
