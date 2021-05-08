import React from 'react'
import {Field, Form, Formik} from 'formik'

interface SearchBarProps {
    search: (value: string) => void
}

export const SearchBar: React.FC<SearchBarProps> = ({search}) =>
    <Formik initialValues={{search: ''}} onSubmit={values => search(values.search)}>
        <Form className="form-inline">
            <label htmlFor="search" className="sr-only">Search</label>
            <Field className="form-control flex-grow-1 mr-sm-2" id="search" name="search" type="text"/>
            <button className="btn btn-primary px-4 my-2 flex-fill flex-sm-grow-0" type="submit">Search</button>
        </Form>
    </Formik>
