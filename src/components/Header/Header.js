import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <HeaderWrapper>
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
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
      <MainCTA>
        <Button>
          Subscribe
        </Button>
        <Link>
          Already a subscriber?
        </Link>
      </MainCTA>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  @media ${QUERIES.laptopAndUp} {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 72px;
    margin-left: 120px;
    margin-right: 120px;
  }
`;

const SuperHeader = styled.div`
  padding: 16px;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    background: var(--color-gray-100);
    padding-left: 0;
    padding-right: 0;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  padding: 0px;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  @media ${QUERIES.laptopAndUp} {
    color: var(--color-gray-900);

    &:last-child {
      display: none;
    }
  }

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    margin-top: 16px;
    margin-bottom: 0px;
  }

  @media ${QUERIES.tabletOnly} {
    margin-top: 48px;
    margin-bottom: 72px;
  }
`;

const MainCTA = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;

const Link = styled.a`
  font-size: calc(14 / 16 * 1rem);
  font-style: italic;
  text-decoration: underline;
`;

export default Header;
