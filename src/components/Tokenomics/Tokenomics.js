import React, { useEffect } from 'react';
import './tokenomics.scss';
import Chart from "react-google-charts";

const pieOptions = {
    title: "",
    pieHole: 0.3,
    slices: [
      {
        color: "#1f78b4"
      },
      {
        color: "#a6cee3"
      },
      {
        color: "#8ecb58"
      },
      {
        color: "#33a02c"
      },
      {
        color: "#c50055"
      },
      {
        color: "#fb9a99"
      },
      {
        color: "#6a1ae3"
      },
      {
        color: "#fdbf6f"
      },
      {
        color: "#ff7f00"
      },
      {
        color: "#cab2d6"
      }
    ],
    legend: {
      position: "right",
      alignment: "center",
      textStyle: {
        color: "233238",
        fontSize: 16
      }
    },
    tooltip: {
      showColorCode: true
    },
    chartArea: {
      left: 0,
      top: 0,
      bottom:0,
      right:0,
      width: "100%",
      height: "100%"
    },
    fontName: "Proxima Nova Rg"
  };

const Tokenomics = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="cmspages-wrapper">
            <div className="cmspagesbanner">
                <div className="container">
                    <h2>Tokenomics</h2>
                    <p>Spherium Labs and the Foundation are deeply committed to the long-term vesting that demonstrates our dedication to make Spherium the de-facto DeFi platform.</p> 
                </div>
            </div>
            <div className="tokenomics-wrapper">    
                <div className="container">
                    <div className="row">
                        <div className="pagedesription">
                            <p>The process of the SPHRI token allocation will be based on a community-type distribution, whereby each of these stakeholders will play an important role in the ecosystem. We intend to use the following distribution chart:</p>
                        </div>
                        <div className="infotable-wrapper">
                            <table className="tableinfo">
                                <thead>
                                    <tr>
                                        <th>SPHRI Token Distribution</th>
                                        <th>Per %</th>
                                        <th>Tokens</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Seed</td>
                                        <td>10.00%</td>
                                        <td>10,000,000</td>
                                    </tr>
                                    <tr>
                                        <td>Private Sale</td>
                                        <td>12.99%</td>
                                        <td>12,993,750</td>
                                    </tr>
                                    <tr>
                                        <td>Strategic Investment Round</td>
                                        <td>1.71%</td>
                                        <td>1,705,556</td>
                                    </tr>
                                    <tr>
                                        <td>Public Sale/IDO</td>
                                        <td>1.65%</td>
                                        <td>1,648,206</td>
                                    </tr>
                                    <tr>
                                        <td>Initial Liquidity Provision</td>
                                        <td>5.00%</td>
                                        <td>5,000,000</td>
                                    </tr>
                                    <tr>
                                        <td>Team</td>
                                        <td>15.00%</td>
                                        <td>15,000,000</td>
                                    </tr>
                                    <tr>
                                        <td>Advisors</td>
                                        <td>1.00%</td>
                                        <td>1,000,000</td>
                                    </tr>
                                    <tr>
                                        <td>Marketing</td>
                                        <td>12.00%</td>
                                        <td>12,000,000</td>
                                    </tr>
                                    <tr>
                                        <td>Legal & Admin</td>
                                        <td>3.00%</td>
                                        <td>3,000,000</td>
                                    </tr>
                                    <tr>
                                        <td>Protocol Emission and LP Rewards</td>
                                        <td>15.00%</td>
                                        <td>15,000,000</td>
                                    </tr>
                                    <tr>
                                        <td>Ecosystem Development</td>
                                        <td>22.65%</td>
                                        <td>22,652,488</td>
                                    </tr>
                                    <tr>
                                        <td>Total Token Supply</td>
                                        <td>100%</td>
                                        <td>100,000,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="chart-wrapper">
                            <div className="chart-inner">
                                <div className="customcanvas">
                                    <Chart
                                        chartType="PieChart"
                                        data={
                                            [
                                                ["Sales", "Counts"], 
                                                ["Seed", 10], 
                                                ["Private Sale", 13],
                                                ["Strategic Investment Round", 5],
                                                ["Public Sale/IDO", 4],
                                                ["Initial Liquidity Provision", 5],
                                                ["Team", 15],
                                                ["Advisors", 9],
                                                ["Marketing", 12],
                                                ["Legal & Admin", 8],
                                                ["Protocol Emission and LP", 15],
                                                ["Ecosystem Development", 23]
                                            ]
                                        }
                                        options={pieOptions}
                                        graph_id="PieChart"
                                        width={"100%"}
                                        height={"400px"}
                                        legend_toggle
                                    />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tokenomics;