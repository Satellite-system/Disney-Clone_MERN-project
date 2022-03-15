import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {useParams } from 'react-router-dom';
import db from '../firebase';
import { doc, getDoc} from "firebase/firestore";


const Details = ({setProgress}) => {
    const id = useParams().id;
    const [movieData, setMovieData] = useState('');

    const getData = async ()=>{
        const docRef = doc(db, "movies", id); //'wa7F6LTDEFQluIbWUMeh'
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setMovieData(docSnap.data());
            // console.log("Document data:", docSnap.data());
        } else {
        // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    };

    useEffect(() => {
        setProgress(0);
        getData();
        setProgress(100);
    },[id]);
    

  return (
    <Container>
        <Background>
        <img 
        src={movieData.backgroundImg} 
        alt='img'/>
        </Background>

        <TitleImg>
        <img src={movieData.titleImg} alt='titleMovie' />
        </TitleImg>

        <ContentMeta>

        <Controls>
            <PlayBtn>
                <img src='/images/play-icon-black.png' alt='playbtn' />
                <span>PLAY</span>
            </PlayBtn>

            <TrailerBtn>
                <img src='/images/play-icon-white.png' alt='playbtn' />
                <span>TRAILER</span>
            </TrailerBtn>

            <AddBtn>
                <img src='/images/watchlist-icon.svg' alt='watchList' />
            </AddBtn>

            <GrpWatch>
                <div>
                    <img src='/images/group-icon.png' alt='group Image' />
                </div>
            </GrpWatch>
        </Controls>

        <SubTitle>{movieData.subTitle}</SubTitle>
        <Description>{movieData.description}</Description>

        </ContentMeta>

    </Container>
  )
}

const Container = styled.div`
    position:relative;
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
    left:0px;
    opacity: 0.8;
    position: fixed;
    right: 0px;
    top:0px;
    z-index:-1;
    
    img{
        width: 100%;
        height: 100%;
        
        @media (max-width: 768px){
            width: initial;
        }
    }
`;

const TitleImg = styled.div`
    align-items: flex-end;
    display:flex;
    -webkit-box-pack:start;
    justify-content: flex-start;
    margin: 0 auto;
    z-index: 1;
    height:28vw;
    min-height: 170px;
    padding-bottom:24px;
    width: 100%;
    img{
        max-width:600px;
        min-width:200px;
        width:35vw;
    }

`;

const ContentMeta = styled.div`
    max-width:874px;
`;

const Controls = styled.div`
    align-items:center;
    display: flex;
    flex-flow: row nowrap;
    margin:10px 0px;
    min-height:56px;
`;

const PlayBtn = styled.button`
    font-size:15px;
    margin: 0 22px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    border-radius: 6px;
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    letter-spacing: 1.8px;
    text-align:center;
    text-transform:uppercase;
    background rgb(249, 249, 249);
    border:none;
    font-weight: bold;
    color: rgb(0, 0,0);

    img{
        weight: 32px;
    }

    &:hover{
        background: rgb(198, 198, 198);
    }

    @media (max-media: 768px){
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin:0px 10px 0px 0px;

        img{
            width:25px; 
        }
    }

`;

const TrailerBtn = styled(PlayBtn)`
    background: rgba(0, 0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249);
`;

const AddBtn = styled.button`
    margin-right: 16px;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: rgba(0, 0,0 ,0.6);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;

    img{
        width: 100%;
        cursor: pointer;
    } 
`;

const GrpWatch = styled.div`
    height: 48px;
    width: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: white;

    div{
        height: 44px;
        width: 44px;
        background: rgb(0,0,0);
        border-radius: 50%;

        img{
            width: 100%;
        }
    }
`;

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 20px;
    min-height: 20px;

    @media (max-width: 768px){
        font-size: 12px;
    }
`;

const Description = styled.div`
    line-height: 1.4;
    font-size: 25px;
    padding: 16px 0px;
    color: rgb(249, 249, 249);

    @media (max-width: 768px){
        font-size: 14px;
    }
`;

export default Details