import React from 'react'
import USWDS from "../lib/uswds/src/js/components";
const { table } = USWDS;

const API_KEY =
  process.env.NODE_ENV === "development" && process.env.REACT_APP_DATA_GOV_API;
  // get a key from https://api.data.gov/signup/

    // const TableHeadings = ({ headingData }) => {

    //   return headingData?.map((item) => {
    //     console.log(item)

    //     const headings = Object.keys(data.attributes)

    //     // console.log(headings)

    //     return headings?.map((heading) => {
    //       return (
    //         <th data-sortable scope="col" role="columnheader">
    //           {heading.replace(/-/g, " ").toUpperCase()}
    //         </th>
    //       );
    //     })
    //   });
    // };

  const TableRows = ({ data }) => {

    return data.map((item, i) => {
      console.log(item);
      return (
        <tbody>
          { Object.keys(item).map((k, i) => {
            console.log(item[k])
              return (
                  <tr key={i}>
                    {k}
                  </tr>
              )
            })
          }
          {/* <tr key={i}> */}
            {/* <td data-sort-value={`${data.id}`}>{data[key]}</td> */}
            {/* <td
              data-sort-value={`${data.attributes.subject}`}
              class="font-mono-sm text-tabular"
            >
              {data.attributes.subject}
            </td>
            <td
              data-sort-value={new Date(
                `${data.attributes["violation-date"]}`
              ).getTime()}
              aria-sort="ascending"
              class="font-mono-sm text-tabular text-right"
            >
              {data.attributes["created-date"]}
            </td>
            <td
              data-sort-value={new Date(
                `${data.attributes["violation-date"]}`
              ).getTime()}
              class="font-mono-sm text-tabular text-right"
            >
              {data.attributes["violation-date"]}
            </td>
            <td
              data-sort-value={`${data.attributes["recorded-message-or-robocall"]}`}
              class="font-mono-sm text-tabular text-right"
            >
              {data.attributes["recorded-message-or-robocall"]}
            </td>
            <td
              data-sort-value={`${data.attributes["consumer-area-code"]}`}
              class="font-mono-sm text-tabular text-right"
            >
              {data.attributes["consumer-area-code"]}
            </td>
            <td
              data-sort-value={`${data.attributes["company-phone-number"]}`}
              class="font-mono-sm text-tabular text-right"
            >
              {data.attributes["company-phone-number"]}
            </td>
            <td
              data-sort-value={`${data.attributes["consumer-city"]}`}
              class="font-mono-sm text-tabular text-right"
            >
              {data.attributes["consumer-city"]}
            </td>
            <td
              data-sort-value={`${data.attributes["consumer-state"]}`}
              class="font-mono-sm text-tabular text-right"
            >
              {data.attributes["consumer-state"]}
            </td>*/}
          {/* </tr> */}
        </tbody>
      );
    });
  };

function USATable(props) {
  const [data, setData] = React.useState([]);
  const ref = document.body;

  const getTestData = async () => {
    const response = await fetch(
      `https://api.ftc.gov/v0/dnc-complaints?api_key=${API_KEY}&items_per_page=20`
    );
    const data = await response.json();

    let formatData = [];

    formatData = await data.data?.map((attr, i) => {
      const id = attr.id;
      const items = attr.attributes;
      return { id, ...items };
    })

    setData(formatData);
  };

  React.useEffect(() => {
    getTestData();

    // initialize
    table.on(ref);

    // remove event listeners when component un-mounts.
    return () => {
      table.off();
    };
  }, [ref]);

  console.log({ data });
  // example data
  // {
  //   data: [
  //     0: {
  //       "heading": "value"
  //       "heading": "value",
  //      ...
  //     },
  //     1: {...},
  //    ...
  //   ]
  // }

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <div class="usa-table-container--scrollable usa-table--striped usa-table--stacked-header">
          <table class="usa-table usa-table--borderless usa-table--compact">
            <caption>Do Not Call (DNC) Reported Calls Data</caption>
            <thead>
              <tr>
                <th>ID</th>
                <th data-sortable scope="col" role="columnheader">
                  Subject
                </th>
                <th data-sortable scope="col" role="columnheader">
                  Created Date
                </th>
                <th data-sortable scope="col" role="columnheader">
                  Violation Date
                </th>
                <th data-sortable scope="col" role="columnheader">
                  Recorded Message or Robocall
                </th>
                <th data-sortable scope="col" role="columnheader">
                  Consumer Area Code
                </th>
                <th data-sortable scope="col" role="columnheader">
                  Company Phone Number
                </th>
                <th data-sortable scope="col" role="columnheader">
                  Consumer City
                </th>
                <th data-sortable scope="col" role="columnheader">
                  Consumer State
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.length > 0 ? (
                <TableRows data={data} />
              ) : (
                <div>No Fetched Data {data?.error}</div>
              )}
            </tbody>
          </table>
          <div
            class="usa-sr-only usa-table__announcement-region"
            aria-live="polite"
          />
        </div>
      </main>
    </div>
  );
}

export default USATable;
