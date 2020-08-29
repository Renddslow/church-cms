import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const LoadingBar = styled.div`
  width: ${(props) => props.width}%;
  height: 4px;
  display: block;
  transition: width 0.8s ease-in, opacity 0.3s ease-out;
  background: #51b6d5;
  opacity: ${({ width }) => (width === 100 ? 0 : 1)};
`;

const Loading = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleLoading = () => setWidth(90);

    window.addEventListener('loading-start', handleLoading);
    return () => window.removeEventListener('loading-start', handleLoading);
  }, []);

  useEffect(() => {
    const handleLoading = () => {
      setWidth(99.9);

      setTimeout(() => {
        setWidth(100);
      }, 1200);
    };

    window.addEventListener('loading-end', handleLoading);
    return () => window.removeEventListener('loading-end', handleLoading);
  }, []);

  return <LoadingBar width={width} />;
};

export default Loading;
