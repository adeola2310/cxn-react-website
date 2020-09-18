import React from "react";
import './Home.css'
import Card from "../../components/card/card";
import CardTwo from "../../components/card-two/CardTwo";
import Footer from "../../components/Footer/Footer";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";
import ContentTwo from "../../components/contentTwo/ContentTwo";
import ContentOne from "../../components/contentOne/ContentOne";
import logo from '../../images/lo.svg'



const Home = () => {
    return (
        <>
            <div className="home">
                <div className="nav">
                    <img src={logo} alt="logo" className="logo"/>
                    <button className="connect">connect</button>
                </div>
            </div>

            <div className="components">
                <Card
                    title="Verified CXN Staking Contract"
                    value="0"
                />
                <Card
                    title="Your Staked CXN"
                    value="0"
                />
                <Card
                    title="Your CXN wallet"
                    value="0"
                />
                <Card
                    title="Total CXN stakers"
                    value="0"
                />
                <Card
                    title="Total Staked CXN"
                    value="0"
                />
                <Card
                    title="Total CXN"
                    value="0"
                />
            </div>


            <div className="tab-area">
                 <Tabs>
                     <TabList>
                        <Tab>Stake</Tab>
                        <Tab>Unstake</Tab>
                        <Tab>Reward</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>

                            <ContentOne
                                header="Stake CXN"
                                fee="Your registration fee will be 400 LID."
                            title="Initial fee for staking registration is 400 LID. With a referral code, intitial fee is 200 LID."/>
                        </TabPanel>
                        <TabPanel>
                            <ContentOne
                                header="Unstake CXN"
                                fee="Fee is paid as dividends to stakers."
                                title="2% fee to unstake."
                            />
                        </TabPanel>
                        <TabPanel>
                            <ContentTwo
                                header="Rewards"
                                title="Fee to withdraw or invest."
                                fee="0"

                            />
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </div>


            <div className="referral">
                <div className="ref-details">
                    <div className="referral-details">
                        <h2>Referral code</h2>
                        <span>200 LID for each referral who registers.
                        Rewards are automated, you do not need to claim.</span>
                        <button className="copy">Copy</button>
                    </div>
                    <input className="referral-input" value="https://www.example.com" readOnly/>
                </div>

            </div>

            <div className="number">
                <CardTwo title="Account number of referrals" value="0"/>
                <CardTwo title="Referral CXN Earned" value="200"/>
            </div>

            <Footer/>
        </>
    )
}


export default Home;