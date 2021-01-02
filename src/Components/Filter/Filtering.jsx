import {Typography, Accordion, AccordionSummary, 
AccordionDetails, Slider} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import filter from '../../filter.json'
import { FilterItem } from './FilterItem'

const useStyles = makeStyles( theme => ({
    root: {
        width: '300px',
        padding: '0 20px',

        '& .freshness': {
            display: "flex", 
            padding: "0 10px 0 15px",
            height: '50px',
            alignItems: 'center',
            justifyContent:'space-between',
            background:'white',
            overflow:'hidden'
        },
        '& .MuiSelect-select':{
            background:'white',
            height:'35px'
        }
    },
    slider:{
        color: "#4a90e2"
    },
    typography: {
        fontWeight: 600,
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
const valuetext = (value) =>{
    return `${value}`;
}

export const Filtering = ({addToUrl, freshness, setFreshness, setSliderValue})=>{
    const classes = useStyles()

    const handleChange = value => {
        setSliderValue(value)
    }

    return(
        <div className={classes.root}>
            <div className='freshness'>
                <Typography className={classes.heading}>
                    Freshness
                </Typography>
                <Select
                    value={freshness}
                    onChange={ e => setFreshness(e.target.value) }
                    variant="filled"
                >
                    {filter.Freshness.map(item=> {
                        let no = item.trim().split(" ")
                        return <MenuItem key={item} value={Number(no[1])}>{item}</MenuItem>
                    })}

                </Select>
            </div>
            <FilterItem handleURL={ addToUrl } headerName="Location" filterName={filter.Location}/>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.heading}>Experience</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.AccordionDetails}>
                    <Slider
                        className={classes.slider}
                        defaultValue={1}
                        getAriaValueText={handleChange}
                        aria-labelledBy="discrete-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={0}
                        max={30}
                    />
                    </AccordionDetails>
                </Accordion>
            <FilterItem handleURL={ addToUrl } headerName="Salary" filterName={filter.Salary}/>
            <FilterItem handleURL={ addToUrl } headerName="Job Type" filterName={filter.Job_type}/>
            <FilterItem handleURL={ addToUrl } headerName="Posted by" filterName={filter.Posted_by}/>
            <FilterItem handleURL={ addToUrl } headerName="Top Companies" filterName={filter.Top_componies}/>
            <FilterItem handleURL={ addToUrl } headerName="Education" filterName={filter.Education}/>
            <FilterItem handleURL={ addToUrl } headerName="Industries" filterName={filter.Industries}/>

        </div>
    )
}