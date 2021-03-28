import { Typography, Box } from '@material-ui/core'
import React from 'react'
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import PriorityHighRoundedIcon from '@material-ui/icons/PriorityHighRounded';
import OfflineBoltRoundedIcon from '@material-ui/icons/OfflineBoltRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';


function About() {
    return (
        <div>
            <div className="about_title">
                <Typography component="div">
                    <Box fontWeight="fontWeightBold" m={1} fontSize="h3.fontSize">
                        Latest News. <br />Be updated.
                        </Box>
                    <Box fontWeight="fontWeightRegular" m={1}>
                        Update the latest tech news. What matters in technology daily
                        </Box>
                </Typography>
            </div>
            <div className="about_features">
                <div className="about_features_item">
                    <LocationSearchingIcon />
                    <Typography component="div">
                        <Box fontWeight="fontWeightBold" m={1}>
                            Search latest news
                        </Box>
                        <Box fontWeight="fontWeightRegular" m={1}>
                            Just search for the topic that you are interested and read.
                        </Box>
                    </Typography>
                </div>
                <div className="about_features_item">
                    <OfflineBoltRoundedIcon />
                    <Typography component="div">
                        <Box fontWeight="fontWeightBold" m={1}>
                            Download news and read offline.
                        </Box>
                        <Box fontWeight="fontWeightRegular" m={1}>
                            Just search for the topic that you are interested and read.
                        </Box>
                    </Typography>
                </div>
                <div className="about_features_item">
                    <PriorityHighRoundedIcon />
                    <Typography component="div">
                        <Box fontWeight="fontWeightBold" m={1}>
                            No ads
                        </Box>
                        <Box fontWeight="fontWeightRegular" m={1}>
                            Get smoothly experiences
                        </Box>
                    </Typography>
                </div>
                <div className="about_features_item">
                    <CheckCircleRoundedIcon />
                    <Typography component="div">
                        <Box fontWeight="fontWeightBold" m={1}>
                            Accurateness
                        </Box>
                        <Box fontWeight="fontWeightRegular" m={1}>
                            Reported from the good sources.
                        </Box>
                    </Typography>
                </div>
            </div>
            <div className="about_footer">
                <Typography component="div">
                    <Box fontWeight="fontWeightRegular" m={1}>
                        All right reserved.
                        </Box>
                </Typography>
            </div>
        </div>
    )
}

export default About
