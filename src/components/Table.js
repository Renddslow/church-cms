import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Button, { ButtonLink } from './Button';

const TableStyled = styled.table`
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: #fff;
  border-radius: 8px;
  border-spacing: 0;
  border-collapse: collapse;
  margin-top: 24px;
  position: relative;
`;

const TableHeaderItem = styled.th`
  text-align: left;
  padding: 12px;
  box-sizing: border-box;
  position: sticky;
  top: 71px;
  background: #000;
  color: #fff;
  border-bottom: 1px solid #eceff5;
  transition: border-radius 0.2s ease-out;

  &:first-child {
    border-top-left-radius: ${({ beCurvy }) => (beCurvy ? `8px` : 0)};
  }

  &:last-child {
    border-top-right-radius: ${({ beCurvy }) => (beCurvy ? `8px` : 0)};
  }

  &::after {
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    position: absolute;
    bottom: -1px;
    background: #eceff5;
    left: 0;
  }
`;

const TableRow = styled.tr`
  width: 100%;

  &:not(:last-child) {
    border-bottom: 1px solid #eceff5;
  }

  &:nth-child(2n) {
    background: #f8fafc;
  }
`;

const TableItem = styled.td`
  text-align: left;
  padding: 12px;
  box-sizing: border-box;
`;

const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, max-content));
  grid-gap: 8px;
  justify-content: end;
`;

const dt = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

export default ({ columns = [], data = [], resourceType }) => {
  const headRef = useRef();
  const [beCurvy, setBeCurvy] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (e) => {
        setBeCurvy(!!e[0].isIntersecting);
      },
      { rootMargin: '-114px 0px 0px 0px' },
    );

    observer.observe(headRef.current);
    return () => observer.disconnect();
  }, [setBeCurvy]);

  return (
    <TableStyled>
      <thead ref={headRef}>
        <tr>
          {columns.map(({ key, label }) => (
            <TableHeaderItem beCurvy={beCurvy} key={key}>
              {label}
            </TableHeaderItem>
          ))}
          <TableHeaderItem beCurvy={beCurvy} />
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <TableRow key={item.permalink}>
            {columns.map(({ key }) => (
              <TableItem key={`${item.permalink}--${key}`}>
                {key.toLowerCase().includes('date') ? dt.format(new Date(item[key])) : item[key]}
              </TableItem>
            ))}
            <TableItem>
              <Actions>
                <ButtonLink to={`${resourceType}/${item.permalink.replace(/(.md)/g, '')}`}>
                  Edit
                </ButtonLink>
                <Button disabled>Published</Button>
                <Button appearance="danger">Delete</Button>
              </Actions>
            </TableItem>
          </TableRow>
        ))}
      </tbody>
    </TableStyled>
  );
};
