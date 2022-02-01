import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr 1fr;
  }
`;

const MarketsSection = styled.section`
`;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  --width: min(150px, 100%);
  grid-template-columns: repeat(
    auto-fill, minmax(var(--width), 1fr)
  );
`;

const SportsSection = styled.section`
`;

const SportsStories = styled.div`
  display: flex;
  gap: 16px;
  max-width: 600px;
  overflow: auto;
`;

export default SpecialtyStoryGrid;
