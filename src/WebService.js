import React, { useEffect, useState } from 'react';

const WebService = () => {
  const [result, setResult] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost/api/yourEndpoint');
        const data = await response.json();
        setResult(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>Result from Spring: {result}</p>
    </div>
  );
};

export default WebService;