/* eslint-disable no-undef */
// import * as React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ThemeProvider } from '../../ThemeProvider' 
import { Logo } from './logo'


/**
 * Test default values by rendering a context consumer without a
 * matching provider
 */
test('Logo shows default value', () => {
  render(
    <Logo />
)
const rect = document.querySelector('[data-testid="logo"]')
expect(rect).toHaveAttribute('src', 'logoLight.png')
})

test('Logo shows value from provider', () => {
    render(
      <ThemeProvider theme="dark">
         <Logo />
               </ThemeProvider>,
    )
    expect(screen.getByTestId('logo')).toHaveAttribute('src', 'logo.png')
  })
