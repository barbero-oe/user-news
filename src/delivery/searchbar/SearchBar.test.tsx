import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {SearchBar} from './SearchBar'
import {act} from 'react-dom/test-utils'

test('Should call handler when the user presses search', async () => {
    const handler = jest.fn()
    render(<SearchBar loading={false} validationMessage="" search={handler}/>)

    await act(async () => {
        await userEvent.type(screen.getByRole('textbox'), 'term', {delay: 1})
        userEvent.click(screen.getByRole('button'))
    })

    expect(handler).toHaveBeenCalledWith('term')
})

test('Should validate empty queries', async () => {
    const handler = jest.fn()
    render(<SearchBar loading={false} validationMessage="What news interests you?" search={handler}/>)

    await act(async () => {
        userEvent.click(screen.getByRole('button'))
    })

    expect(screen.getByText('What news interests you?')).toBeInTheDocument()
})
