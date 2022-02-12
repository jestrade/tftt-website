import React from 'react'
import {
  Hr,
  Paragraph,
  Section,
  Table,
  Title
} from '@styles/LaunchpadStyles'

export default () => {
  return (
    <Section>
      <Title>
        FILM<span>COIN</span>
        <br />
        The IDO Exchange Launchpad
      </Title>
      <Paragraph>
        FILMCOIN Token IDO Launchpad Summary:
        Our goal is to raise a maximum of USD $24 million and a minimum
        of USD $1.5 million. Some of the financial assumptions may
        change with ETH / USD exchange rates and volatility,
        but the following numbers are best effort projected
        estimates as of February 28, 2022.

        <span>Projected Assumption – 1 ETH = USD $3000.00</span>
      </Paragraph>
      <Table>
        <tbody>
          <tr>
            <td>Hard Cap</td>
            <td>8,000 ETH - this may change with exchange rates.</td>
          </tr>
          <tr>
            <td>Max Contribution</td>
            <td>Unlimited.</td>
          </tr>
          <tr>
            <td>Exchange Rate</td>
            <td>1 ETH = 10,000 FilmCoin Utility Tokens (FCOIN) - this may change with ETH exchange rates.</td>
          </tr>
          <tr>
            <td>Token Contract Address</td>
            <td>TBD (Published through various channels 48hrs before  the on chain launch date).</td>
          </tr>
          <tr>
            <td>Launch Date and Time</td>
            <td>8AM GMT February 28, 2022 Block Number (TBC)</td>
          </tr>
          <tr>
            <td>Launch Time-Frame</td>
            <td>30 days (based on Block Number TBC).</td>
          </tr>
          <tr>
            <td>Launch Completion </td>
            <td>Token launch will end when either the maximum number of  ETH are raised or block number (TBC) is reached. If less than the minimum ETH is raised, ETH can be  retrieved by holders of the FILMCOIN. </td>
          </tr>
        </tbody>
      </Table>
    </Section>
  )
}
