import styled from 'styled-components';

export const CommitContainer = styled.section`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
`;

export const Header = styled.section`
  display: flex;
  position: sticky;
  flex-flow: row no-wrap;
  background-color: #333;
  padding: 0 2rem;
  border-bottom: 0.5rem solid #fff;
  top: 0;
  z-index: 10;
`;

export const Commit = styled.section`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: flex-start;
  gap: 2.4rem;
  padding: 0.8rem;
  background-color: #dedede;
  border-bottom: 0.1rem solid #999999;
  &:nth-child(odd) {
    background-color: #f2f2f2;
  }
`;

export const Avatar = styled.img`
  display: inline-flex;
  width: 4rem;
  height: 4rem;
  border: 0.3rem solid #000;
  border-radius: 50%;
  margin-left: 1rem;
`;

export const Committer = styled.section`
  display: flex;
  align-self: center;
  width: 100%;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.618;
  letter-spacing: 0.15ch;
  flex-basis: ${(props) => (props.mw ? `${props.mw}rem` : '20rem')};
  max-width: ${(props) => (props.mw ? `${props.mw}rem` : '20rem')};
  align-items: ${(props) => (props.align ? props.align : 'left')};
  margin-right: 2rem;
  font-size: 1.6rem;
  font-wight: 700;
  color: #fff;
`;

export const Item = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-self: center;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.618;
  letter-spacing: 0.15ch;
  flex-basis: ${(props) => (props.mw ? `${props.mw}rem` : '20rem')};
  max-width: ${(props) => (props.mw ? `${props.mw}rem` : '20rem')};
  align-items: ${(props) => (props.align ? props.align : 'left')};
  margin-right: 2rem;
  &.limit,
  a {
    color: #3366cc;
    text-decoration: underline;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  position: relative;
`;

export const Message = styled.div`
  display: ${(props) => (props.active ? `block` : 'none')};
  min-width: 35rem;
  padding: 1rem;
  background-color: #fff;
  border: 0.2rem solid #999999;
  border-radius: 0.8rem;
  position: absolute;
  top: -1rem;
  left: 7rem;
  z-index: 1;
`;
