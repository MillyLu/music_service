/* eslint-disable no-undef */
import { Provider } from 'react-redux';

import * as ShallowRenderer from 'react-shallow-renderer';
import { Router } from 'react-router-dom';
import { Menu } from './menu';


describe("<Menu />", () => {
    it("should render successfully and match snapshot", () => {

        const mockedUsedNavigate = jest.fn();

        jest.mock('react-router-dom', () => ({
           ...jest.requireActual('react-router-dom') ,
          useNavigate: () => mockedUsedNavigate,
        }));
        
        const store = {
            dispatch: jest.fn(),
            getState: jest.fn(() => ({})),
         };

         const shallowRenderer = ShallowRenderer.createRenderer();
         const renderer = shallowRenderer;
         renderer.render(<Provider store={store}><Router><Menu /></Router></Provider>);
         const result = renderer.getRenderOutput();
         expect(result).toMatchSnapshot();  


    });
  });



















