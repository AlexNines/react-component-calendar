import React from 'react'
import './index.css'

export default class Calendar extends React.Component {

    render() {
        return (
            <div className="calendar">
                <header>
                    <button>{'<'}</button>

                    <select></select>

                    <select></select>


                    <button>{'>'}</button>
                </header>

                <table>
                    <thead>
                        <tr>

                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        )
    }
}