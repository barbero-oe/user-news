import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Paginator} from './Paginator'

test('Should display five pages at the same time', () => {
    render(<Paginator pages={20} current={1}/>)

    expect(screen.getAllByRole('link').map(el => el.textContent))
        .toEqual(expect.arrayContaining(['1', '2', '3', '4', '5']))
})

test('Should show previous and next pages', () => {
    render(<Paginator pages={20} current={10}/>)

    expect(screen.getAllByRole('link').map(el => el.textContent))
        .toEqual(expect.arrayContaining(['8', '9', '10', '11', '12']))
})

test('Should show current page', () => {
    render(<Paginator pages={20} current={10}/>)

    expect(screen.getByText('10').parentElement!.classList).toContain('active')
})

test('Should show last elements at the end of the pages', () => {
    render(<Paginator pages={20} current={20}/>)

    expect(screen.getAllByRole('link').map(el => el.textContent))
        .toEqual(expect.arrayContaining(['15', '16', '17', '18', '19', '20']))
})

test('Should call the callback on page selection', () => {
    const handler = jest.fn()
    render(<Paginator pages={20} current={5} onPageChange={handler}/>)

    userEvent.click(screen.getByText('7'))

    expect(handler).toHaveBeenCalledWith(7)
})

test('Should call the callback with next value', () => {
    const handler = jest.fn()
    render(<Paginator pages={20} current={5} onPageChange={handler}/>)

    userEvent.click(screen.getByLabelText('Next'))

    expect(handler).toHaveBeenCalledWith(6)
})

test('Should call the callback with previous value', () => {
    const handler = jest.fn()
    render(<Paginator pages={20} current={5} onPageChange={handler}/>)

    userEvent.click(screen.getByLabelText('Previous'))

    expect(handler).toHaveBeenCalledWith(4)
})

test('Should not call the callback if there is no previous element', () => {
    const handler = jest.fn()
    render(<Paginator pages={20} current={1} onPageChange={handler}/>)

    userEvent.click(screen.getByLabelText('Previous'))

    expect(handler).not.toHaveBeenCalled()
})
