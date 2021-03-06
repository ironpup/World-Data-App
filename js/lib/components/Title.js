'use strict';
import React from 'react';

const title = 'World Data Viewer';
const description = 'Glossier cred keffiyeh kinfolk. Etsy 8-bit seitan 3 wolf' +
                    'moon, kombucha street art master cleanse yr lo-fi roof' +
                    'party vinyl chillwave meggings. Salvia 3 wolf moon' +
                    'master cleanse enamel pin scenester post-ironic, ' +
                    'authentic humblebrag coloring book green juice ' +
                    'gluten-free put a bird on it 90s.  Lumbersexual fam ' +
                    'chillwave live-edge swag, sustainable copper mug. ' +
                    'Hot chicken distillery bushwick, master cleanse air ' +
                    'plantforage marfa austin migas. Affogato actually ' +
                    'portland, offal disrupt swag readymade pabst etsy man.';

class Title extends React.Component{
  render() {
    return (
      <div className="cover-image title-image">
      <div className="card title-box">
        <h1 className="title"> {title} </h1>
        <p className="description">  {description} </p>
        <br />
        <p className="description">  {'Check out the '}
          <a target="_blank" href="https://github.com/ironpup/World-Data-App">
           Github</a>
        </p>
      </div>
      </div>
    );
  }
}

export default Title;
