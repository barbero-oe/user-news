import React from 'react'
import * as Yup from 'yup'
import {ErrorMessage, Field, Form, Formik} from 'formik'

interface SearchBarProps {
    search: (value: string) => void
    validationMessage: string
    loading: boolean
}

const validation = (message: string) => Yup.object().shape({
    search: Yup.string().trim().required(message),
})

export const SearchBar: React.FC<SearchBarProps> = ({search, validationMessage, loading}) =>
    <Formik initialValues={{search: ''}} validationSchema={validation(validationMessage)}
            onSubmit={values => search(values.search)}>
        {({errors}) =>
            <Form className="form-inline position-relative">
                <label htmlFor="search" className="sr-only">Search</label>
                <Field className={`form-control flex-grow-1 mr-sm-2 ${errors.search ? 'is-invalid' : ''}`} id="search"
                       name="search" type="text"/>
                <ErrorMessage className="invalid-tooltip" component="span" name="search"/>
                <button className="btn btn-primary px-4 my-2 flex-fill flex-sm-grow-0"
                        disabled={loading} type="submit">Search
                </button>
            </Form>
        }
    </Formik>
