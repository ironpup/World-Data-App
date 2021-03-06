import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import CountryList from '../js/lib/components/CountryList/CountryList';
import FieldNames from '../js/lib/components/CountryList/FieldNames';
import Grouping from '../js/lib/components/CountryList/Grouping';

describe('CountryList contains presentation components', () => {
  // set up the component
  const propCountryData = {
    'Asia': [{'name': 'Japan', 'population': 100},
             {'name': 'Korea', 'population': 200}],
    'Europe': [{'name': 'France', 'population': 300},
               {'name': 'Germany', 'population': 400}]
  };
  const propFields = ['name', 'population'];
  let wrapper;
  beforeEach( () => {
    wrapper = mount(<CountryList countryData={propCountryData}
                     fields={propFields}/>);
  });

  // tests
  it('should contain a FieldNames component', () => {
    expect(wrapper.contains(<FieldNames />));
  });

  it('should contain a FieldNames component with 2 fields', () => {
    expect(wrapper.find('.column-headers')).to.have.length(2);
  });

  it('should contain 2 groupings', () => {
    expect(wrapper.find(Grouping)).to.have.length(2);
  });

  it('should contain 4 countries', () => {
    expect(wrapper.find('.country-row')).to.have.length(4);
  });
});
