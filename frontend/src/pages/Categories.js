import React, { useState } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import auxActions from '../redux/actions/auxActions'
const Categories = (props) => {
    const [favConsole, setFavConsole] = useState(
        ''
    )
    console.log(props)
    const consoles = [
        'Not defined yet',
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
    const readInput = e => {

        const value = e.target.value
        setFavConsole(
            value
        )
    }

    const sendConsole = () => {
        props.sendConsole(favConsole, props.username)
    }
    return (
        <>
            <Header />
            <h1 className="text-center text-light">Games</h1>
            {props.firstTime && props.token ? <>
                <select name='favConsole' id='favConsole' onChange={readInput} className="text-center col-6">
                    <option value={-1} className="text-center">Choose your favourite console.</option>
                    {
                        consoles.map((console, i) => {
                            return <option key={'console' + [i]} value={console} className="text-center">{console}</option>
                        })
                    }
                </select>
                <button htmlFor='favConsole' onClick={sendConsole} className="text-center col-6">Send your favorite console</button>
            </> : ''
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        username: state.usersReducer.username,
        firstTime: state.usersReducer.firstTime,
        token: state.usersReducer.token
    }
}

const mapDispatchToProps = {
    sendConsole: auxActions.sendConsole
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
