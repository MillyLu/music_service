import { useState, useEffect, useContext } from 'react';
import * as Styled from './styles';
import { ThemeContext } from '../../ThemeProvider';

export function FilterButtonYear(props) {  


    
    const [year,setYear] = useState();

    const changeChoose = (e) => {

        setYear(e.target.value)
    }

    useEffect(() => {
        console.log(year);
        props.getTracksByData(year)

    }, [changeChoose]);

    const {theme} = useContext(ThemeContext);
    return(
        <Styled.Year theme={theme}>
            <Styled.Item>
                <Styled.RadioButton
                theme={theme}
                    type="radio"
                    name="year"
                    value="new"
                    checked={year==="new"}
                    onChange={changeChoose}
                  
                />
                <Styled.RadioButtonLabel />
                <div style={{color:theme === "light" ? "#000000" : "#FFFFFF"}}>Более новые</div>
            </Styled.Item>
            <Styled.Item>
                <Styled.RadioButton
                theme={theme}
                type="radio"
                name="year"
                value="old"
                checked={year==="old"}
                onChange={changeChoose}
                 />
                <Styled.RadioButtonLabel />
                <div style={{color:theme === "light" ? "#000000" : "#FFFFFF"}}>Более старые</div>
            </Styled.Item>
            
        </Styled.Year>
    )
}
