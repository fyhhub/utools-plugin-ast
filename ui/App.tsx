import { useState } from 'react'
import './app.less'
import classes from './app.module.less'

function App() {
    const [msg] = useState('React')

    return (
        <div>
            <div className={classes.hello}>Hello {msg}</div>
        </div>
    )
}
export default App
