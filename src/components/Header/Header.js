import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <Wrapper>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <UserButton>
              <User size={24} />
            </UserButton>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
      <SubscribeGroup>
        <Button>
          Subscribe
        </Button>
        <UnderlinedLink href="https://www.yepz.dk">Already a subscriber?</UnderlinedLink>
      </SubscribeGroup>
    </Wrapper>
  );
};

const Wrapper = styled(MaxWidthWrapper)`
  padding: 0;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    align-items: center;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    background: none;
    color: var(--color-gray-900);
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;

  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const UserButton = styled.div`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

const SubscribeGroup = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    padding-left: 32px;
    padding-right: 32px;
    display: flex;
    flex-direction: column;
  }
`;

const UnderlinedLink = styled.a`
  font-style: italic;
  text-align: center;
  text-decoration: underline;

  &:hover {
    text-decoration: revert;
  }
`;

export default Header;
