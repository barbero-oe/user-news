import React from 'react'
import {render, screen} from '@testing-library/react'
import {App} from './App'
import userEvent from '@testing-library/user-event'
import {act} from 'react-dom/test-utils'
import {Page} from '../domain/model/Page'
import {News} from '../domain/model/News'

test('Should request news when user searches', async () => {
    const search = jest.fn().mockReturnValue({pages: 1, current: 1, values: [], totalResults: 0} as Page<News>)
    render(<App searchNews={search}/>)

    await act(async () => {
        await userEvent.type(screen.getByRole('textbox'), 'search-term', {delay: 1})
        userEvent.click(screen.getByRole('button'))
    })

    expect(search).toHaveBeenCalledWith('search-term', 6, 1)
})
