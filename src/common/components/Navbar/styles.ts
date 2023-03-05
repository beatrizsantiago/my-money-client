import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
  width: 100%;
  height: 60px;
`;

export const Nav = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  padding: 0px 32px;
  background-color: #ffffff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  z-index: 999;
`;

type ItemType = {
  active: number;
};

export const Item = styled(Link)<ItemType>`
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(${({ active }) => (active ? '--medium-gray' : '--main-gray')});
  font-weight: ${({ active }) => (active ? 700 : 500)};
  font-size: 16px;
  border-bottom: ${({ active }) =>
    active ? 'solid 3px var(--medium-gray)' : 'none'};
`;

export const IconBox = styled.div`
  margin-right: 8px;
  margin-top: 2px;
`;
