import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {SearchBar} from './SearchBar'
import {act} from 'react-dom/test-utils'

test('Should call handler when the user presses search', async () => {
    const handler = jest.fn()
    render(<SearchBar search={handler}/>)

    await act(async () => {
        await userEvent.type(screen.getByRole('textbox'), 'search-term', {delay: 1})
        userEvent.click(screen.getByText('Search'))
    })

    expect(handler).toHaveBeenCalledWith('search-term')
})