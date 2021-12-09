import Button from './components/Button'
import Image from './components/ImageCard'
import TextBlock from './components/TextBlock'
// import LabelBlock from './components/LabelBlock'
import Element from "./components/Element";

import './App.css';

function App() {
  return (

    <div className="App">

      <div className="image-card">

        <Image src="https://res.cloudinary.com/db46klhlo/image/upload/v1639056543/jakob-owens-O_bhy3TnSYU-unsplash.jpg" />

      </div>

      <div className="component-card">

        <div className="component-des">
        
          <TextBlock Title="Backpack" Content="descrizione" Content1="34$" />

        </div>



        <div className="element__title">

          <h2>Colors</h2>
          <div className="element__div">
            <div className="element__color1"> <Element /> </div>
            <div className="element__color2"> <Element /> </div>
            <div className="element__color2"> <Element /> </div>
          </div>

        </div>

        <div className="element__title">

          <h2>Size</h2>
          <div className="element__div">
            <div className="element__color1"> <Element Text="S" /> </div>
            <div className="element__color2"> <Element Text="M" /> </div>
            <div className="element__color2"> <Element Text="L" /> </div>
          </div>

        </div>

        <Button Text="Add to Cart" />

      </div>





    </div>

  );
}

export default App;

