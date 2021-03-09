// import React from 'react'
import './lib/uswds/dist/css/uswds.min.css';
import USATable from './components/table'

const components = [
  // USATable
];


function App() {

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <section>
          <h2 id="usa-table">Modal</h2>
          {/* <USATable /> */}
        </section>
        {components.find(USATable) && (
          <section>
            <h2 id="usa-table">USA Table</h2>
            <USATable />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
