import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { HiringCompanies } from "./HiringCompanies";
import { JobAlertCard } from "./JobAlertCard";
import { SummaryCard } from "./SummaryCard";
import { SavedJobs } from "./SavedJobs";
import { RecruiterMessage } from "./RecruiterMessage";
import { RecruiterConnect } from "./RecruiterConnect";
import { HiringRecruiter } from "./HiringRecruiter";
import {SearchBox} from './SearchBox';
import {Companies} from './Companies'
import {FaqCard} from './FaqCard';
import {UserPage} from '../UserPage/UserPage'
import {UserPostCard} from '../UserPage/UserPostCard'

const Banner = styled.div`
  background: url(https://static.naukimg.com/s/5/105/i/dashboardbg.png) #2e3339;
  height: 240px;
  background-size: cover;
`;
const Dashboard = () => {
  return (
    <div>
      <Banner>
        <SearchBox />
      </Banner>
      <div style={{ display:"flex", width:"100%"}}>

        <div className="left-part" style={{width:"60%", marginLeft:"60px"}}>
          <HiringCompanies />
          <div>
            <Typography style={{margin:"20px" ,fontWeight:600}}>Jobs</Typography>
            {/* Jobs card component */}
            <UserPostCard />
          </div>
          <JobAlertCard />
          <div style={{ display: "flex" }}>
            <SummaryCard />
            <SavedJobs />
          </div>
          <Typography style={{margin:"20px" ,fontWeight:600}}>Recruiters</Typography>
          <RecruiterMessage />
          <RecruiterConnect />
          <HiringRecruiter />
        </div>
        <div>
          <UserPage />
          <Companies />
          <FaqCard />
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
