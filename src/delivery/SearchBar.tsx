import React from 'react'
import {Field, Form, Formik} from 'formik'

interface SearchBarProps {
    search: (value: string) => void
}

export const SearchBar: React.FC<SearchBarProps> = ({search}) =>
    <Formik initialValues={{search: ''}} onSubmit={values => search(values.search)}>
        <Form>
            <Field name="search" type="text"/>
            <button type="submit">Search</button>
        </Form>
    </Formik>
