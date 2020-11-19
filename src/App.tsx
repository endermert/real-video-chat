import React from 'react';
import { PageHeader, Button } from 'antd';

function App() {
  return (
    <div className="App">
      <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title="Real Video Chat App"
          subTitle=""
          extra={[
            <Button key="2">Start</Button>,
            <Button key="1" type="primary">Stop</Button>,
          ]}
      ></PageHeader>
    </div>
  );
}

export default App;
