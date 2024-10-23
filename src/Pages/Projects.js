import React from 'react';
import {Container} from 'react-bootstrap';
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardLink
} from 'mdb-react-ui-kit';
import UmfaziImage from '../Images/ProjectImages/Umfazi.png';
import TVShows from '../Images/ProjectImages/TVShows.png';
import Recipes from '../Images/ProjectImages/Recipes.png';
import myFinalProject from '../Images/ProjectImages/myFinalProject.png';

const Projects = () => {
    
    return (
        <section className='myProject' id='myProjects'>
            <Container className='project-container'>    
                <div className='project-box'>
                <h2>Projects</h2>
                <MDBRow className='p-3'>
                    <MDBCol className='d-flex flex-column justify-content-space-between p-3'  xs={12} sm={12} md={12} lg={6} xl={4}>
                        <MDBCard className='projectCards' id='projectCards'>
                             <MDBCardBody className='cardsBody' id='cardsBody'>
                                <a href='https://umfazicat.netlify.app/' target='_blank' rel='noopener noreferrer'>
                                    <MDBCardImage className='projectImg' position='top' alt='Umfazi Clean and Tidy' src={UmfaziImage} />
                                </a>
                                <MDBCardTitle><strong>Umfazi Clean and Tidy</strong></MDBCardTitle>
                                <MDBCardText className='cardText'>
                                    This website, <strong>Umfazi Clean and Tidy</strong>, was developed for a community based cleaning company that just started up by 2 school friends who is based and grew up in Elsies river.
                                </MDBCardText>
                                <MDBCardLink href='https://github.com/ChrisKoetzee/Clean-And-Tidy-Bros'>Github Link</MDBCardLink>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='d-flex flex-column justify-content-space-between p-3' xs={12} sm={12} md={12} lg={6} xl={4}>
                            <MDBCard className='projectCards' id='projectCards'>
                                <MDBCardBody className='cardsBody' id='cardsBody'>
                                <a href='https://recipes-galore-jsrv.onrender.com' target='_blank' rel='noopener noreferrer'>
                                    <MDBCardImage className='projectImg' position='top' alt='Recipes Galore website' src={Recipes} />
                                </a>
                                <MDBCardTitle><strong>Recipes Galore Project</strong></MDBCardTitle>
                                <MDBCardText className='cardText'>
                                    This website, <strong>Recipes Galore</strong> was created to have one space where you could have recipes with ingredients and videos all in one with easy access using what ingredients you have on hand already. Here we were 3 developers collaborating on this porject
                                </MDBCardText>
                                <MDBCardLink href='https://github.com/ChrisKoetzee/Recipes-Galore'>Github Link</MDBCardLink>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='d-flex flex-column justify-content-space-between p-3' xs={12} sm={12} md={12} lg={6} xl={4}>
                            <MDBCard className='projectCards' id='projectCards'>
                            <MDBCardBody className='cardsBody' id='cardsBody'>
                            <a href='https://cyf-chriskoetzee-tv.netlify.app/' target='_blank' rel='noopener noreferrer'>
                                    <MDBCardImage className='projectImg' position='top' alt='tv shows project' src={TVShows} />
                                </a>
                                <MDBCardTitle><strong>My TV Shows Project</strong></MDBCardTitle>
                                <MDBCardText className='cardText'>
                                    This website was one of my projects that I had during the Code Your future Bootcamp that I was part of. Here we made use of an API to pull through the relevant information.
                                </MDBCardText>
                                <MDBCardLink href='https://github.com/ChrisKoetzee/tv-show-dom-project'>Github Link</MDBCardLink>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>                 
                    <MDBRow className='p-3'>
                    <MDBCol className='d-flex flex-column justify-content-space-between p-3'xs={12} sm={12} md={12} lg={6} xl={4}>
                       <MDBCard className='projectCards' id='projectCards'>
                            <MDBCardBody className='cardsBody' id='cardsBody'>
                            <a href='https://my-final-project-2.onrender.com/' target='_blank' rel='noopener noreferrer'>
                                <MDBCardImage className='projectImg' position='top' alt='Final project home page' src={myFinalProject} />
                            </a>
                                <MDBCardTitle><strong>My Final Project</strong></MDBCardTitle>
                                <MDBCardText className='cardText'>
                                    This project was created to assist a disadvantaged school with certain tasks that they would have a platform to carry out these tasks. This was a collaboration between 4 developers, a Scrum master and a Project manager where we had weekly sprints as well as standup's mastering our development skills as well as our agile methodologies
                                </MDBCardText>
                                <MDBCardLink href='https://github.com/ChrisKoetzee/my-final-project'>My Github link</MDBCardLink>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        {/* <MDBCol className='d-flex flex-column justify-content-space-between p-3' xs={12} sm={12} md={12} lg={6} xl={4}>
                            <MDBCard className='projectCards' id='projectCards'>
                                <MDBCardBody className='cardsBody' id='cardsBody'>
                                     <a href='#' target='_blank' rel='noopener noreferrer'>
                                        <MDBCardImage className='projectImg' position='top' alt='' src='' />
                                    </a>
                                     <MDBCardTitle>Special title treatment</MDBCardTitle>
                                    <MDBCardText className='cardText'>
                                        With supporting text below as a natural lead-in to additional content.
                                    </MDBCardText>
                                    <MDBCardLink href='#'>Go somewhere</MDBCardLink>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol> */}
                        {/* <MDBCol className='d-flex flex-column justify-content-space-between p-3' xs={12} sm={12} md={12} lg={6} xl={4}>
                            <MDBCard className='projectCards' id='projectCards'>
                                <MDBCardBody className='cardsBody' id='cardsBody'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'>
                                        <MDBCardImage className='projectImg' position='top' alt='' src='' />
                                    </a>
                                    <MDBCardTitle>Special title treatment</MDBCardTitle>
                                    <MDBCardText className='cardText'>
                                        With supporting text below as a natural lead-in to additional content.
                                    </MDBCardText>
                                    <MDBCardLink href='#'>Go somewhere</MDBCardLink>
                                 </MDBCardBody>
                           <MDBCard className='projectCards' id='projectCards'>
                                <MDBCardBody className='cardsBody' id='cardsBody'>
                                    <a href='#' target='_blank' rel='noopener noreferrer'>
                                        <MDBCardImage className='projectImg' position='top' alt='' src='' />
                                    </a>
                                    <MDBCardTitle><strong>Click image to go to the website</strong></MDBCardTitle>
                                    <MDBCardText className='cardText'>
                                        This website was my final project at CYF and was developed to assist a school to have a platform where various tasks could be carried out. This was a collaboration between 4 students having a scrum master and as Project Manager
                                    </MDBCardText>
                                    <MDBCardLink href='https://github.com/ChrisKoetzee/Douglas-Road-Primary'>Github Link</MDBCardLink>
                                 </MDBCardBody>
                            </MDBCard>
                        </MDBCol> */}
                    </MDBRow>
                </div> 
            </Container>
        </section>
    )
};

export default Projects;