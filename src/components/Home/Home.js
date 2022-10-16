import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
          <section>
      <div className="bg-gray-100">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-800">
            Welcome To Smart Home
          </h1>
          <p className="mt-6  text-lg sm:mb-12 xl:max-w-3xl text-gray-900 mb-15">
            Best E-commerce platform for buying high quality Smart Home
            Appliances at extremely affordable Price.
          </p>
          
          <div className='mt-11'>
          <img style={{height: '550px', width:'550px'}}
        src="https://static.vecteezy.com/system/resources/previews/002/667/494/original/smart-shopping-concept-vector.jpg"
        alt=""
        className="w-5/6 mx-auto mb-12 rounded-lg shadow-md  bg-gray-500"
      />
          </div>
          <div className="flex flex-wrap justify-center">
          
            <Link to="/shop">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded-full  text-gray-900 hover:bg-cyan-400 bg-cyan-200"
              >
                Shop Now
              </button>
            </Link>
            <Link to="/about">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded-full border-cyan-400 text-gray-900"
              >
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
     
    </section>
        </div>
    );
};

export default Home;