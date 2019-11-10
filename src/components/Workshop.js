import React, { Component } from 'react';

import withStyles from "@material-ui/core/styles/withStyles";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
    card: {
        display: 'flex',
        marginBottom: '1rem',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    image: {
        height: 0,
        paddingTop: '56%',
        marginRight: '1rem',
        marginLeft: '1rem'
    },
    content: {
        padding: '2rem',
        objectFit: 'cover',
        align: 'center'
    },
};

class Workshop extends Component {
    render() {
        const { classes, workshop : { workshopTitle, presenterName, session, maxCapacity, workshopDescription, imageUrl } } = this.props;
        return(
            <Card className={classes.card}>
                <CardContent className={classes.title}>
                    <Typography variant="h5" color="primary">{workshopTitle}</Typography>
                </CardContent>
                <CardMedia image={imageUrl} title={presenterName} className={classes.image}/>
                <CardContent className={classes.content}>
                    <Typography variant="h6">{presenterName}</Typography>
                    <Typography variant="body2" color="textPrimary">{workshopDescription}</Typography>
                    <Typography variant="body2" color="textPrimary">Session: {session} | Spots: {maxCapacity}</Typography>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(Workshop)