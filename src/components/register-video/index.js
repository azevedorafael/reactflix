import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { registerVideo } from 'reducers/videos/action-creators'

const RegisterVideo = ({ onSubmit }) => (
    <Form onSubmit={onSubmit}>
        <h2>Cadastrar Video</h2>

        <label htmlFor='id' >ID do vídeo:</label>
        <input type='text' id='id' name='id' />

        <input type='text' id='title' name='title' />

        <label htmlFor='title'>Título do vídeo:</label>
        <button type='submit'>Cadastrar</button>
    </Form>
)

const Form = styled.form`
    padding: 10px 
`

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (e) => {
        e.preventDefault()

        const {
            id: { value: id },
            title: { value: title }
        } = e.target

        dispatch(registerVideo({ id, title }))

        e.target.id.value = ''
        e.target.title.value = ''
    }
})

export default connect(null, mapDispatchToProps)(RegisterVideo)