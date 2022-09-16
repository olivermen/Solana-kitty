import React, { useEffect, useState, FC } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import Grid from '@mui/material/Grid';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MyWallet from './MyWallet';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    marginBottom:'16px',
    background: '#243562',
    borderRadius: '15px',
    color: 'white',
  }));
  
const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon=
    {<img
        src={"down-arrow.png"}
        width={"22px"}
    />}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'left',
}));




const Sweeper: FC = props => {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

    
    return (
        <div className={"gradient-lottery"}>
            <div style={{height: "100px"}}></div>
            <div className={"center width70"}>
                <Grid container>
                    <Grid xs={12} md={6}>
                        <img
                            src={"kitties_sweepers.png"}
                            width={"100%"}
                        />
                    </Grid>
                    <Grid xs={12} md={6} style={{position: 'relative'}}>
                        <MyWallet/>
                    </Grid>
                </Grid>

                <Grid container direction="row" className={"prize-border"} alignItems="stretch">
                    <Grid xs={12} md={6} style={{
                        padding: '35px',
                    }}>
                        <Stack className={"lucky-winner-left"}>
                            <img
                                src={"sweeping_clock.png"}
                                width={"100%"}
                            />
                            <div className={"sweeprs-label-div"}>
                                <label className={"sweepers-label"}>Sweeping In</label>
                                <p className={"sweepers-p"}>00d:00h:00m:00s</p>
                            </div>
                        </Stack>
                    </Grid>
                    <Grid xs={12} md={6} style={{
                        padding: '35px',
                    }}>
                        <Stack className="ticket">
                            <label className={"center ticket-p"}>Ticket Sold : <span className="lucky-winner-span">22</span></label>
                            <div className={"center ticket-sold-img"}>
                                <img
                                    src="ticket.gif"
                                    width={"230px"}
                                />
                            </div>
                            <img
                                src="listing_down_floor_price_up.png"
                                className={"center listing-down"}
                                style={{marginTop: '15px'}}
                            />
                            
                            <Grid container spacing={2}>
                                <Grid xs={12} md={3}>
                                    <span className="ticket-p">Price</span>
                                    <button className={"price-btn-inner center"}>
                                        <img
                                            src={"price.png"}
                                            className="price-icon"
                                            alt="price icon"
                                            width={"18px"}
                                            style={{marginRight: '5px'}}/> 0.15
                                    </button>
                                </Grid>
                                <Grid xs={12} md={6}>
                                    <button className="buy_tickets">Connect</button>
                                </Grid>
                                <Grid xs={12} md={3}>
                                    <span className="ticket-p">Amount</span>
                                    <Stack direction="row" className={"kitty-number-field"}>
                                        <a href="#!" className="left-number-btn">-</a>
                                        <input className="kitty-number center" type='number' min='1' max='9' value='8' readOnly={true}/>
                                        <a href="#!" className="right-number-btn">+</a>
                                    </Stack>
                                </Grid>
                            </Grid>

                            <div>
                                <p className="max-ticket">Kitties Family Sweeps Together</p>
                            </div>
                        </Stack>
                    </Grid>
                </Grid>

                <Stack className={"center FAQ mt0"}>
                    <Stack direction="row" className={"center"}>
                        <p className="faq-left"></p>
                        <h1>FAQ</h1>
                        <p className="faq-right"></p>
                    </Stack>
                </Stack>
                <div>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>Q: What is Kitties Sweepers?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <Stack direction="row">
                                <div style={{marginRight: '5px'}}>
                                    A:
                                </div>
                                <div>
                                    Kitties Sweepers is a special community sweep event for 3D Sol Kitties on Magic Eden.
                                </div>
                            </Stack>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography>Q: How do I create and fund my Solana wallet?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <Stack direction="row">
                                <div style={{marginRight: '5px'}}>
                                    A:
                                </div>
                                <div>
                                    Using Chrome, go to Phantom, download and install the Phantom wallet extension. Once the extension is installed, run the program and create a wallet. Then, to fund it, go to Coinbase or Binance (any exchange that sells and supports Solana token transfer) and purchase SOL. Once you have SOL, send it to your SOL address in your Phantom wallet.
                                </div>
                            </Stack>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>Q: Why would I want to buy a sweeper ticket?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <Stack direction="row">
                                <div style={{marginRight: '5px'}}>
                                    A:
                                </div>
                                <div>
                                    Post event, we will be airdropping 50% of the swept kitties to sweeper ticket owners (the other 50% will be burnt).
                                </div>
                            </Stack>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                        <Typography>Q: What was the thought behind Kitties Sweepers?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <Stack direction="row">
                                <div style={{marginRight: '5px'}}>
                                    A:
                                </div>
                                <div>
                                    Our aim is to develop a community centric approach for market stabilization that is sustainable long-term, unlike individual sweeps.
                                </div>
                            </Stack>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                        <Typography>Q: What would the project gain from this event?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            <Stack direction="row">
                                <div style={{marginRight: '5px'}}>
                                    A:
                                </div>
                                <div>
                                    Kitties Sweepers would reduce the supply for the 3D Collection and develop higher demand, likely resulting an increase of the Floor Price.
                                </div>
                            </Stack>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <div className="solanaAvatarArea">
                <Stack direction="row" className={"width70 center height186"}>
                    <div className={"kitty-img"}>
                        <img
                            src="kitty-footer.png"
                            width={"380px"}
                        />
                    </div>
                    <div className={"center solana-img-div"}>
                        <p className={"solana-label"}>POWERED BY</p>
                        <img src="solana.png" className={"solana-img"}/>
                    </div>
                </Stack>
            </div>
        </div>
    );
}

export default Sweeper