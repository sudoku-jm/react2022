import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import './style.css'
const Main = () => {
    const [form, setForm] = useState({
        username : '',
        age : '',
        addr : '',
        tel : '',
        job : '',
        email : '',
        sex : '',
        inter : ''
    })
    
    const [step , setStep] = useState(0)

    //구조분해
    // const {username, age, addr, tel, job, email, sex, inter} = form

    //글자변경    
    const changeInput = (e) => {
        const {name ,value} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }

    //다음
    const onNext = () => {
        setStep(step + 1)
    }
    //이전
    const onPrev = () => {
        setStep(step - 1)
    }

    return (
        <div className="wrap">
            {
                step === 0 && 
                <Step1 form={form} changeInput={changeInput} onNext={onNext}/>

            }
            {
                step === 1 &&
                <Step2 form={form} changeInput={changeInput} onNext={onNext} onPrev={onPrev} />
            }
            {
                step === 2 &&
                <Step3 form={form} onNext={onNext} onPrev={onPrev}/>
            }
            {
                step === 3 &&
                <Step4 form={form} />
            }
        </div>
    );
};

export default Main;