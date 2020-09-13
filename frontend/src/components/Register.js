import React from 'react'
import { useState, useEffect } from 'react'
import Header from './Header'
import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";
import auxActions from '../redux/actions/auxActions';


const Register = (props) => {

    useEffect(() => {
        if (props.token) {
            alert(`Welcome to scape community ${props.name}!`)
            // props.history.push("/home")
        }

        props.getCountries()

    }, [props.token])

    const [newUser, setNewUser] = useState({
        name: '',
        lastname: '',
        username: '',
        password: '',
        email: '',
        country: '',
        favConsole: '',
        urlpic: '',
    })


    const readInput = e => {
        const camp = e.target.name
        const value = e.target.value
        setNewUser({
            ...newUser,
            [camp]: value
        })
    }

    const sendInfo = async e => {
        e.preventDefault()

        await props.createAccount(newUser)

    }


    const consoles = [
        'Pc',
        'PlayStation, Sony',
        'PlayStation2, Sony',
        'PlayStation3, Sony',
        'PlayStation4, Sony',
        'PSP, Sony',
        'GameBoy, Nintendo',
        'GameBoyColor, Nintendo',
        'GameBoyAdvance, Nintendo',
        'Nintendo, Nintendo',
        'Nintendo64, Nintendo',
        'Nintendo3DS, Nintendo',
        'NintendoSwitch, Nintendo',
        'NintendoDS, Nintendo',
        'SuperNintendo, Nintendo',
        'GameCube, Nintendo',
        'NintendoSwitch, Nintendo',
        'Wii, Nintendo',
        'Xbox360, Microsoft',
        'XboxOne, Microsoft',
        'Xbox, Microsoft',
        'SegaGameGear, Sega',
        'Dreamcast, Sega',
        'Atari2600, Atari',
        'Atari5200, Atari'
    ]


    return (
        <>
            <Header />
            <div className='form section container center'>
                <h1>Create new account</h1>
                <input type='text' name='name' placeholder='Type your name'
                    onChange={readInput} />
                <input type='text' name='lastname' placeholder='Type your lastname'
                    onChange={readInput} />
                <input type='text' name='username' placeholder='Choose your username (Min 5 characters)'
                    onChange={readInput} />
                <input type='password' name='password' placeholder='Choose your password (Min 5 characters)'
                    onChange={readInput} />
                <input type='text' name='email' placeholder='Type an email correct'
                    onChange={readInput} />
                <p>(Development version) Copy an URL with your Profile Photo:</p>
                <input type='text' name='urlpic' placeholder='Photo URL'
                    onChange={readInput} />
                <p>Share us from wich country are you from:</p>
                <select name='country' id='Selector' onChange={readInput}>
                    <option value={-1}>Please, select your native country.</option>
                    {
                        props.countries.map((country, i) => {
                            return <option key={'country' + [i]} value={country.name}>{country.name}</option>
                        })
                    }
                </select>
                <select name='favConsole' id='Selector' onChange={readInput}>
                    <option value={-1}>Choose your favourite console.</option>
                    {
                        consoles.map((console, i) => {
                            return <option key={'console' + [i]} value={console}>{console}</option>
                        })
                    }
                </select>

                <button onClick={sendInfo}>Create new account</button>
            </div>
            {/* <Footer/> */}
        </>
    )
}


const mapStateToProps = state => {
    return {
        countries: state.auxReducer.countries,
        name: state.usersReducer.name,
        token: state.usersReducer.token
    }
}

const mapDispatchToProps = {
    createAccount: usersActions.createAccount,
    getCountries: auxActions.getCountries
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);