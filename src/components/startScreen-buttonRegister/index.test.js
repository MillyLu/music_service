/* eslint-disable react/jsx-no-undef */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import { StartscreenButtonRegister } from "./buttonRegister";
import * as Styled from './styles';


const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') ,
  useNavigate: () => mockedUsedNavigate,
}));


describe('<StartscreenButtonRegister>', () => {
    it('should render and call handleClick on click', () => {
        const { container} = render(<StartscreenButtonRegister>Зарегистрироваться</StartscreenButtonRegister>);
        expect(container).toMatchSnapshot();
     });

    it('call handleClick on click', () => {
        const handleClick = jest.fn();


        render(
            <Styled.StartscreenButtonReg onClick={handleClick}>Зарегистрироваться</Styled.StartscreenButtonReg>
          );
   
          fireEvent.click(screen.getByText('Зарегистрироваться'));
   
          expect(handleClick).toBeCalledTimes(1);
    }) 
})