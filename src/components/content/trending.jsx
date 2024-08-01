import React from 'react'

const cards = [
  {
    title: "technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "https://plus.unsplash.com/premium_photo-1721980274417-8d3d99e69ba0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "https://plus.unsplash.com/premium_photo-1721980274417-8d3d99e69ba0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "https://plus.unsplash.com/premium_photo-1721980274417-8d3d99e69ba0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "https://plus.unsplash.com/premium_photo-1721980274417-8d3d99e69ba0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },



]

const Trending = () => {
  return (
    <div>
        <h2>Trending</h2>
        
            {cards.map((card) => (
                <div className=''>
                <h4> {cards.title}</h4>
                <p> {cards.text} </p>
                <img 
                src={cards.img}
                />
                </div>

            ))}
    </div>
  );
};

export default Trending
