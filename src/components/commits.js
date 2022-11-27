import React from 'react';
import Moment from 'react-moment';
import { useSelector } from 'react-redux';
import {
  Avatar,
  Commit,
  CommitContainer,
  Committer,
  Item,
  Header,
  Heading,
} from './styles';
import { headings } from './utils';
import { MessageContainer } from './messageContainer';

export const Commits = () => {
  const { commits } = useSelector((store) => store.commits);
  return (
    <>
      <CommitContainer>
        <Header>
          {headings.map((item) => (
            <Heading key={item.heading} mw={item.mw} align={item.align}>
              {item.heading}
            </Heading>
          ))}
        </Header>
        {commits.map((item) => {
          return (
            <Commit key={item.sha}>
              <Avatar src={item.committer.avatar_url} alt='' />
              <Committer>
                <Item mw='15'>{item.commit.author.name}</Item>
                <Item>
                  <a href={`mailto:${item.commit.author.email}`}>
                    {item.commit.author.email}
                  </a>
                </Item>
                <Item>
                  <a href={`${item.commit.url}`} target='_blank'>
                    {item.commit.url}
                  </a>
                </Item>
                <Item mw='10' align='center'>
                  <MessageContainer message={item.commit.message} />
                </Item>
                <Item mw='15'>
                  <Moment
                    date={item.commit.author.date}
                    format='DD MMM yyyy hh:mm:ss'
                  />
                </Item>
                <Item mw='10'>
                  <span>
                    <Moment diff={item.commit.author.date} unit='days' />
                    &nbsp;days ago
                  </span>
                </Item>
              </Committer>
            </Commit>
          );
        })}
      </CommitContainer>
    </>
  );
};
