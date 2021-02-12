import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import MyContext from './MyContext';

function Cars() {
  return (
    <MyContext.Consumer>
      {({ redCar, blueCar, yellowCar, carMove }) => (
        <div>
          <div>
            <img
              className={redCar ? 'car-right' : 'car-left'}
              src={carRed}
              alt="red car"
            />
            <button
              onClick={() => carMove('redCar', !redCar)}
              type="button"
            >
              Move
            </button>
          </div>
          <div>
            <img
              className={blueCar ? 'car-right' : 'car-left'}
              src={carBlue}
              alt="blue car"
            />
            <button
              onClick={() => carMove('blueCar', !blueCar)}
              type="button"
            >
              Move
            </button>
          </div>
          <div>
            <img
              className={yellowCar ? 'car-right' : 'car-left'}
              src={carYellow}
              alt="yellow car"
            />
            <button
              onClick={() => carMove('yellowCar', !yellowCar)}
              type="button"
            >
              Move
            </button>
          </div>
        </div>
      )}    
    </MyContext.Consumer>
  );
}

export default Cars;
