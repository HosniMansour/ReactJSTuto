import React, {Component} from 'react';
import { Form, FormControl, Button } from 'react-bootstrap'
import './app.css'
import AgeStats from './AgeStats'

class App extends Component{
    constructor(){
        super();
        this.state = {
            newDate: '',
            birthday: '1995-02-25',
            showStats: false
        }
    }

    changeBirthday(){
        console.log(this.state);
        this.setState({
            birthday: this.state.newDate,
        showStats:true})
    }

    render(){
        return (
            <div className="App">
                <Form>
                    <FormControl
                        type="date"
                        onChange={event => this.setState({newDate: event.target.value})} />
                    {' '}<br/>
                    <Button onClick={() => this.changeBirthday()}>Submit</Button>
                </Form>
                {
                    this.state.showStats ?
                        <div className="fade-in age-stats">
                            <AgeStats date={this.state.birthday} />
                        </div>
                        :
                        <div></div>
                }

            </div>
        );
    }
}

export default App;