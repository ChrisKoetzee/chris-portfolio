import React, {useState, useEffect} from 'react';
import { 
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBFooter,
} from 'mdb-react-ui-kit';
import ModalContact from "./ModalContact";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Footer = () => {
    
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    },[])

    return (
        <MDBFooter className='footer' style={{ 
            backgroundColor: '#000000',
            color: '#7FFF00'
            }}>
            <MDBContainer className='p-4 pb-0'>
                <MDBRow>
                    <MDBCol>
                        <div>
                            <p>Click here to contact me</p>
                            <ModalContact  />
                            <ToastContainer />
                        </div>
                    </MDBCol>
                    <MDBCol>
                        <section className='mb-4'>
                            {/* <MDBBtn
                                floating
                                className='m-1'
                                style={{ backgroundColor: '#3b5998' }}
                                href='https://web.facebook.com/chris.koetzee.9'
                                role='button'
                            >
                                <MDBIcon fab icon='facebook-f' />
                            </MDBBtn>
                            <MDBBtn
                                floating
                                className='m-1'
                                style={{ backgroundColor: '#ac2bac' }}
                                href='https://www.instagram.com/chriskoe81'
                                role='button'
                            >
                                <MDBIcon fab icon='instagram' />
                            </MDBBtn> */}
                            <MDBBtn
                                floating
                                className='m-1'
                                style={{ backgroundColor: '#0082ca' }}
                                href='https://www.linkedin.com/in/christopherkoetzee/'
                                role='button'
                            >
                                <MDBIcon fab icon='linkedin-in' />
                            </MDBBtn>
                            <MDBBtn
                                floating
                                className='m-1'
                                style={{ backgroundColor: '#333333' }}
                                href='https://github.com/ChrisKoetzee'
                                role='button'
                            >
                                <MDBIcon fab icon='github' />
                            </MDBBtn>
                        </section>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBRow>
                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © {currentYear} Copyright:
                    <a className='text-white' href='https://mdbootstrap.com/'>
                    TnT-Development
                    </a>
                </div>
            </MDBRow>
        </MDBFooter>
        
    )
};

export default Footer;