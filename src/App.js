// import React from 'react';
// import { Button } from 'react-bootstrap';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h3>Hi, my name is </h3>
//         <h1><strong>Christopher Koetzee</strong></h1>
//         <h1>Full stack Developer !!!</h1>
//         <h2>Welcome to my Portfolio Page</h2>
//         <Button variant="primary">Primary Button</Button>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { MDBBtn, MDBContainer, MDBAlert } from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer className="mt-5">
      <h1>Welcome to MDB React</h1>
      <MDBBtn color="primary">Primary Button</MDBBtn>
      <MDBAlert color="success" className="mt-3">
        This is a success alert!
      </MDBAlert>
    </MDBContainer>
  );
}

export default App;
