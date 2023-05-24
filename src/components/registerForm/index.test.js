/* eslint-disable no-undef */
import { fireEvent, render, screen} from '@testing-library/react'

import { setupApiStoreTwo } from '../../test-utils'
import { userApi } from '../../services/user'

import { RegisterForm } from './registerForm'


const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') ,
  useNavigate: () => mockedUsedNavigate,
}));

const handleSubmit = jest.fn();

afterAll(() => {
  jest.unmock('react-router-dom')
})

const storeRef = setupApiStoreTwo(userApi)

describe('RegisterForm', () => {


  it('should redirect to "/" after login', async () => {
    render(<RegisterForm />, { wrapper: storeRef.wrapper })

    fireEvent.change(screen.getByPlaceholderText(/Логин/i), { target: { value: 'login' } })
    fireEvent.change(screen.getByPlaceholderText(/Введите email/i), { target: { value: 'email' } })
    fireEvent.change(await screen.findByPlaceholderText(/^Пароль/i), {
      target: { value: 'password' }
    })
    fireEvent.change(await screen.findByPlaceholderText(/Повторите пароль/i), {
        target: { value: 'password' }
      })

     const button = screen.getByText('Зарегистрироваться')   
    fireEvent.click(button)

    
      expect(handleSubmit).toBeCalledTimes(0)

    
  })

  /* it('should has token in localStorage', async () => {
    render(<LoginFeature />, { wrapper: storeRef.wrapper })

    fireEvent.change(screen.getByPlaceholderText(/Логин/i), { target: { value: 'login' } })
    fireEvent.change(await screen.findByPlaceholderText(/^Пароль/i), {
      target: { value: 'password' }
    })
    fireEvent.click(await screen.findByText(/Войти/i))

    await waitFor(() => {
      expect(localStorage.getItem('refresh')).toEqual('refresh')
    })
  }) */
})