import { useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Accordion,AccordionSummary,AccordionDetails} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useLocation } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    filterItems:{
        display: "flex",
        '& input':{
            margin: "5px 10px 0px",
        }
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    AccordionDetails : {
        display: "flex",
        flexDirection: "column"
    }
}))

const FilterItem = ({headerName, filterName, handleURL})=>{
    const classes = useStyles();
    const location = useLocation()

    return(
        <>
            <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                <Typography className={classes.heading}>{headerName}</Typography>
            </AccordionSummary>
                <AccordionDetails className={classes.AccordionDetails}>
                    {
                        filterName?.map( item =>{
                            return <div className={classes.filterItems}>
                                <input checked={ location.search.includes(item) } onChange={ e => handleURL(e, item, headerName) } type="checkbox"/>
                                <Typography key={item} value={item}>{item}</Typography>
                            </div>
                        })
                    }
                </AccordionDetails>
            </Accordion>
        </>
    )
}
export {FilterItem}