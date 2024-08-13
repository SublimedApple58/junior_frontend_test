import { useRef, useState } from 'react';
import './Input.css';
import SecurityHelper from '../../helper/securityHelper';

function Input(props: {type: string, description: string, subscribed?: boolean}){

    enum Security{
        easy, 
        medium,
        safe
    }

    let message: string = "don't let me down";
    const bar = useRef<HTMLDivElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const [safety, setSafety] = useState<Security | null>(null);

    const handlePasswordBlur = () => {
        if (password.current) {
            setSafety(SecurityHelper.ratePassword(password.current.value));
            console.log(SecurityHelper.ratePassword(password.current.value));
            console.log(password.current.value);
        }
    };


    switch(safety){
        case Security.easy:
            if(bar.current){
                message = 'too easy my friend';
                bar.current.style.width = '33%';
                bar.current.style.backgroundColor = 'red'
            }
            break;
        
        case Security.medium:
            if(bar.current){
                message = 'you can do better';
                bar.current.style.width = '66%';
                bar.current.style.backgroundColor = 'yellow'
            }
            break;
        
        default:
            if(bar.current){
                message = 'oookay here we go';
                bar.current.style.width = '100%';
                bar.current.style.backgroundColor = 'green'
            }
    }

    switch(props.type){
        case 'button':
            return(
                <>
                    <button>{props.description}</button>
                </>
            );
        
        case 'checkbox':
            return(
                <>
                    <div id="agreement">
                        <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span id='label-agreement' dangerouslySetInnerHTML={{ __html: props.description }}></span>
                        </label>
                    </div>
                </>
            );

        case 'password':
            return(
                <>
                    <input 
                        type={props.type} 
                        id={props.description} 
                        placeholder={props.description} 
                        className='text' 
                        ref={password}
                        onBlur={handlePasswordBlur}/>
                    
                    {!props.subscribed && (
                        <div className="check">
                            <div className="bar">
                                <div id='level' ref={bar}></div>
                            </div>
                            <p>{message}</p>
                        </div>
                    )}
                </>
            )

        default:
            return(
                <>
                    <input type={props.type} id={props.description} placeholder={props.description} className='text'/>
                </>
            )
    }
}

export default Input;