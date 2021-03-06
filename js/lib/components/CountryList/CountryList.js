'use strict';
import React from 'react';
import Grouping from './Grouping.js';
import FieldNames from './FieldNames.js';

class CountryList extends React.Component{
  render() {
    // a level is a possible answer for the group chosen
    let levels = Object.keys(this.props.countryData);
    return (
      <table className="card">
        <FieldNames fields={this.props.fields}/>
        {
          levels.map((level) => {
            let levelCountries = this.props.countryData[level];
            if (level === 'undefined') {
              level = 'None Selected';
            }
            return (
              <Grouping spanAll={this.props.fields.length} key={level}
               level={level} countryList={levelCountries} id={this.props.id}/>
            );
          })
        }
      </table>
    );
  }
}

export default CountryList;
