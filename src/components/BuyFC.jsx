import React from 'react'
import {
  Asset,
  AssetsContainer,
  AssetTitle,
  Button,
  BuyFCSection,
  Container,
  Content,
  DownloadContainer,
  DownloadTitle,
  TextContainer,
  Title,
  Text
} from '@styles/BuyFCStyles'
// Images
import DocIcon from '@images/icon1.svg'
import AssetIcon from '@images/icon2.svg'

export default () => {
  return (
    <BuyFCSection>
      <Container>
        <TextContainer>
          <Title>Participate in FILM<span>COIN</span></Title>
          <Content>The Motion Picture Digital Currency Of Choice</Content>
        </TextContainer>
        <Button
          href='https://thefilmcoin.io/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Buy Now
        </Button>
        <DownloadContainer>
          <DownloadTitle>Download</DownloadTitle>
          <AssetsContainer>
            <Asset
              href='https://drive.google.com/file/d/1ClGjZSNDBe91Svnx5QefAxQWOiSEWZc-/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={DocIcon} alt='Icon White Papper' />
              <AssetTitle>Whitepaper</AssetTitle>
            </Asset>
            <Asset
              href='https://drive.google.com/file/d/1ltU_AIBqkt8FdpJHDKgAr0UXsltYQtMm/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={AssetIcon} alt='Icon Deck' />
              <AssetTitle>Deck</AssetTitle>
            </Asset>
          </AssetsContainer>
        </DownloadContainer>
        <Text>
          The FilmCoin Utility Token will be created on the
          28th February 2022 using the ERC-20 standard and
          deployed to the Ethereum blockchain acting as a native
          currency for the Darkhorse Film Studios decentralized
          application program (DAPP)
        </Text>
      </Container>
    </BuyFCSection>
  )
}
