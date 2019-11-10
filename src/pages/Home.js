import React, {Component} from 'react'
import Grid from "@material-ui/core/Grid";
import axios from 'axios';

import Workshop from '../components/Workshop';

class Home extends Component{
    state = {
        workshops: null
    };

    componentDidMount() {
        axios.get('/workshops')
            .then(response => {
                console.log(response.data);
                this.setState({
                    workshops: response.data
                })
            })
            .catch(error => console.error(error));
    }

    render() {
        let workshopList = this.state.workshops ? (
            this.state.workshops.map(workshop => <Workshop workshop={workshop}/>)
        ) : <p>Loading...</p>;
        return(
            <Grid container spacing={6}>
                <Grid item sm={2}/>
                <Grid item sm={4} xs={12}>
                    {workshopList}
                </Grid>
                <Grid item sm={2}/>
                <Grid item sm={4} xs={12}>
                    <p>This is where profile content will be </p>
                </Grid>
            </Grid>
        )
    }
}

export default Home