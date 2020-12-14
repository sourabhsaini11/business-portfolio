import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";

import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import clock from '../img/clock.svg';

const ContactUs = () => {
  return (
    // <ContactStyle
    //   exit="exit"
    //   variants={pageAnimation}
    //   initial="hidden"
    //   animate="show"
    //   style={{ background: "#fff" }}
    // >
    //   <Title>
    //     <Hide>
    //       <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
    //     </Hide>
    //   </Title>
    //   <div>
    //     <Hide>
    //       <Social variants={titleAnim}>
    //         <Circle />
    //         <h2>Send Us A Message</h2>
    //       </Social>
    //     </Hide>
    //     <Hide>
    //       <Social variants={titleAnim}>
    //         <Circle />
    //         <h2>Send an email.</h2>
    //       </Social>
    //     </Hide>
    //     <Hide>
    //       <Social variants={titleAnim}>
    //         <Circle />
    //         <h2>Social Media</h2>
    //       </Social>
    //     </Hide>
    //   </div>
    //   <ScrollTop />
    // </ContactStyle>
      <div className="contact">
        <Main>
        <One>
          <Oneone>
              <h2>Location</h2>
              <p>1600 Amphitheatre Parkway
                Mountain View, CA 94043</p>
          </Oneone>
          <Onetwo>
            <h2>Follow Us</h2>
            <Icon>
              <img src={diaphragm} alt="icon" />
              <img src={money} alt="icon" />
              <img src={teamwork} alt="icon" />
              <img src={clock} alt="icon" />
            </Icon>
            <p>2020 copyright issued.</p>
          </Onetwo>
        </One>
        <Two>
          <Button type="submit">Submit</Button>
        </Two>
        <div className="three"></div>
        </Main>
        <Form>
      
          <h2>Contact Form</h2>
          <Content>
          <Form2>
              <Input1 type="text" placeholder="Enter Your Name" />
              <Input2 type="text" placeholder="Enter Your Mail" /> 
          </Form2>
          <Textarea rows="4" cols="47" name="comment" form="usrform" placeholder="Enter Your Message"></Textarea>
          </Content>
        </Form>
        
      </div>
  );
};

const Main =styled.div`
  display:flex;
  padding:5rem;
  h2{
    color:white;
    font-weight:lighter;
  }
`;

const One =styled.div`
  display:flex;
  flex-direction:column;
  padding-top:1 rem;
  padding-left:6rem ;
  width:43%;
`;

const Oneone=styled.div`
  width:80%;
`;
const Onetwo=styled.div`
  padding-top:6rem;
  
`;
const Icon=styled.div`
  padding-top:2rem;
  display:flex;
  justify-content:space-between;
  width:75%;
`;

const Two=styled.div`
  background: #23d997;
  width:20%;
`;
const Button=styled.button`
  background:transparent;
  border:4px solid white;
  margin-top:27rem;
  margin-left:9rem;
`;
const Form=styled.div`
  position:absolute;
  top:10.2rem;
  left:55rem;
  background: transparent;
  color:white;
  height:25rem;
`;
const Content=styled.div`
  padding-top:3rem;
`;
const Form2=styled.form`
  display:flex;
  flex-direction:column;
  justify-content:space-between;  
`;
const Input1=styled.input`
  
  padding: 1rem;
`;
const Input2=styled.input`
  margin-top:2rem;
  padding: 1rem;

`;
const Textarea=styled.textarea`
  margin-top:2rem;
  padding: 1rem;
  width:100%;
`;



// const ContactStyle = styled(motion.div)`
//   padding: 5rem 10rem;
//   color: #353535;
//   min-height: 90vh;
//   @media (max-width: 1500px) {
//     padding: 2rem;
//     font-size: 1rem;
//   }
// `;
// const Title = styled.div`
//   margin-bottom: 4rem;
//   color: black;
//   @media (max-width: 1500px) {
//     margin-top: 5rem;
//   }
// `;
// const Hide = styled.div`
//   overflow: hidden;
// `;
// const Circle = styled.div`
//   border-radius: 50%;
//   width: 3rem;
//   height: 3rem;
//   background: #353535;
// `;
// const Social = styled(motion.div)`
//   display: flex;
//   align-items: center;
//   h2 {
//     margin: 2rem;
//   }
// `;


export default ContactUs;
