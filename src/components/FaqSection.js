import React from 'react';
import styled from 'styled-components';
import {About} from '../styles';
import Toggle  from "./Toggle";
import { AnimateSharedLayout } from 'framer-motion';
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const FaqSection = () => {
    const [element, controls ]= useScroll();
    return (
            <Faq variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
                <h2>AnyQuestions ? <span>FAQ</span></h2>
                <AnimateSharedLayout>
                <Toggle title="How do I Start?">
                    <div className="answer">
                        <p>asd sdsad fdgf hjgj</p>
                        <p>asdsa qwew ret vcb zcx gh ojj hbhbu huv klmklftctrtr n mjn fvf</p>
                    </div>
                </Toggle>
                <Toggle title="Daily Schedule">
                    <div className="answer">
                        <p>asd sdsad fdgf hjgj</p>
                        <p>asdsa qwew ret vcb zcx gh ojj hbhbu huv klmklftctrtr n mjn fvf</p>
                    </div>
                </Toggle>
                <Toggle title="Payment Methods">
                    <div className="answer">
                        <p>asd sdsad fdgf hjgj</p>
                        <p>asdsa qwew ret vcb zcx gh ojj hbhbu huv klmklftctrtr n mjn fvf</p>
                    </div>
                </Toggle>
                <Toggle title="What products do you offer?">
                    <div className="answer">
                        <p>asd sdsad fdgf hjgj</p>
                        <p>asdsa qwew ret vcb zcx gh ojj hbhbu huv klmklftctrtr n mjn fvf</p>
                    </div>
                </Toggle>
                </AnimateSharedLayout>
            </Faq>
    )
}

const Faq =styled(About)`

    display:block;
    span{
        display:block;
    }
    h2{
        padding-bottom:2rem;
        font-weight:lighter;
    }
    .faq-line{
        background:#cccccc;
        height:0.2rem;
        margin:2rem 0rem;
        width:100%;
    }
    .question{
        padding:3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding:1rem 0rem;
        }
    }
`;

export default FaqSection;