import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import About from '../../../components/About';
import useTitle from '../../../Hook/useTitle';

const Home = () => {
  useTitle('Home')
  return (
    <>
      <Banner/>
      <PopularClass/>
      <PopularInstructor/>
      <About/>
    </>
  );
};

export default Home;