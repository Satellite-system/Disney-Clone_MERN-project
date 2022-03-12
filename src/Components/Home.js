import React from 'react'
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommands  from './Recommands';
import Trending from './Trending';
import Viewers from './Viewers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebase';
import { setMovies } from '../features/movie/movieSlice';
import { doc, collection, query, where, onSnapshot, getDocs, getFirestore } from "firebase/firestore";
import { selectUserName } from '../features/user/userSlice';

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  let recommend = [];
  let newDisney = [];
  let originals = [];
  let trending = [];

  useEffect(async ()=>{

    const q = query(collection(db, "movies"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log("recommend ",recommend);
      switch(doc.data().type){
        case 'recommend':
          recommend=[...recommend,{id: doc.id, ...doc.data()}]
          break;
        case 'new':
          newDisney=[...newDisney,{id: doc.id, ...doc.data()}]
          break;
        case 'trending':
          trending=[...trending,{id: doc.id, ...doc.data()}]
          break;
        case 'original':
          originals=[...originals,{id: doc.id, ...doc.data()}]
          break;
      }
    });

    dispatch(setMovies({
      recommend: recommend,
      newDisney: newDisney,
      original: originals,
      trending: trending
    }));

  }, [userName]);


  return (
    <Container>
      <ImgSlider/>
      <Viewers />
      <Recommands />
      <NewDisney />
      <Originals />
      <Trending/>
    </Container>
  )
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after{
    background: url('/images/home-background.png') center center/cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }

`;

export default Home