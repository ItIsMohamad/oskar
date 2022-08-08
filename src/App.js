import logo from './logo.svg';
import './App.css';
import Header from "./components/header.js"
import Cards from "./components/cards.js"
import cardData from "./carddata.js"




function App() {
  const cardElement= cardData.map((item)=> {
   return ( <Cards  
   key={item.id}
   image={item.image}
   location_tag={item.location_tag}
   country={item.country}
   location={item.location}
   link_address={item.link_address}
   name={item.name}
   date={item.date}
   description={item.description}  />)

});
  return (
    <div>
      <Header/>
     
      {cardElement}
      </div>

   
  
  );
}

export default App;
