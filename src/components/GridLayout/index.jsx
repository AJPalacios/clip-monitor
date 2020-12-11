import { Grid, Paper } from '@material-ui/core'
import React from 'react'

const GridLayout = (props) => {
    return (
        <Grid container spacing={3}>
            {props.children}
        </Grid>
    )
}

export default GridLayout;