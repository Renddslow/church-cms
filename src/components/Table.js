import React from 'react';
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
`;

const TableHeader = styled.thead`
  background: #f8fafc;
  border-bottom: 1px solid #eceff5;
`;

const TableHeaderItem = styled.th`
  text-align: left;
  padding: 12px;
  box-sizing: border-box;
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

export default ({ columns = [], data = [] }) => {
  return (
    <TableStyled>
      <TableHeader>
        <tr>
          {columns.map(({ key, label }) => (
            <TableHeaderItem key={key}>{label}</TableHeaderItem>
          ))}
          <TableHeaderItem />
        </tr>
      </TableHeader>
      <tbody>
        {data.map((item) => (
          <TableRow key={item.permalink}>
            {columns.map(({ key }) => (
              <TableItem key={`${item.permalink}--${key}`}>{item[key]}</TableItem>
            ))}
            <TableItem>
              <Actions>
                <ButtonLink to={item.permalink.replace(/(.md)/g, '')}>Edit</ButtonLink>
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
