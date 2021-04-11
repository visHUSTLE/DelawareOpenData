import React from 'react';
import delphoto from './static/delphoto.png';

const AboutUs = () => (
  <div className="container">
    <h2>About Us</h2><br></br>
    <p style={{textAlign:'center'}}>DeSODP is committed to making data open and accessible to Delaware State University’s community</p>
    {/* <p>The Stanford Open Data Project (SODP) is making data about Stanford University more accessible and transparent. Our Open Data Portal aims to allow anyone to find and analyze Stanford-related data, including information about university finances, public health, and student life. We also promote data-driven advocacy at Stanford by creating educational resources for nascent data scientists, organizing Stanford’s first general-interest datathon, and working with student advocates to identify and acquire important datasets. In turn, we hope to provide the infrastructure and resources for campus stakeholders to realize the promise of open data.</p> */}

    <p>Our mission here at Delaware State University Open Data Portal is to offer a free and public tool for public use. We want to empower everyday people to find truth in their individual situations through reliably-sourced and trusted data. Not only truthful but unlimited access to information promotes our values of growth and understanding, where it all matters.</p>
    <img src={delphoto} alt="Team members" style={{height: '15.rem'}} />
    <br></br>
    <br></br>
    <h2>How we Pull our data:</h2>
    <p> Most of our data comes from Delaware State University’s annual Fact Book. We scraped the data from the PDF files and cleaned it to make it easier to use. Moving forward, we hope to develop a relationship with the university to make such data readily available</p>
    
    <p>We encourage you to get involved with our open data endeavor, though! Open data works best when more of the local community gets involved with the process. In doing so, we can create a robust collection of data that better represents all of us.</p>
    <p>Below are a few tips and resources you get started working with data. Have fun!</p>
    <ul>
              <li>A lot of data is presented in PDF format. We used Tabula to scrape the datasets we have here.</li>
              <li>Cleaning data is an important step of the process. It ensures that others are able to use it across different programs. You can use Microsoft Excel or Google Sheets to trim, format, and export your data into a machine-readable format.</li>
              <li>You don’t have to rely on academic or government sources to find data. You can provide us with datasets that better represent you and your community, whether it’s a club, organization, or some other entity. Feel free to submit your dataset for consideration here</li>
    </ul>
    
  </div>
);

export default AboutUs;
