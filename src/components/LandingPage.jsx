import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";
import heroImage from './static/Datathon Hero.png';
import MainLogo from './static/Logo + Type@2x.png'
import axios from 'axios';
import Moment from 'moment';
import Image from 'react-bootstrap/Image'
import DeSODP from './static/DeSODP.png';

export default class LandingPage extends React.Component {
  state = {
    selectedOption: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      articles: [],
      randomfact: "Stanford University was established in 1891.",
    };
  }


  componentDidMount() {
    var targetUrl = 'https://wp.stanforddaily.com/wp-json/wp/v2/posts?_embed&categories=58277' 
      // embed adds featured image

    axios.get(targetUrl)
      .then(result => {
        let stories = result.data.slice(0, 3);
        this.setState({
          isLoaded: true,
          articles: stories
        });
      },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

    axios.get('https://open-data-portal.s3.us-east-2.amazonaws.com/metadata.json')
      .then(result => {
          this.setState({
            isLoaded: true,
            items: result.data,
          });
        },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
      /*.then(() => {
        let slugs = this.state.items.filter(dataset => dataset.stories !== "").slice(0, 3).map(dataset => dataset.stories);
        console.log(this.state.items);
        for (var i = 0; i < slugs.length; i++) {
          let multipleSlugs = slugs[i].split(",")
          for (var j = 0; j < multipleSlugs.length; j++) {
            targetUrl += '&slug[]=' + multipleSlugs[j];
          }
        }
        console.log(targetUrl);

        fetch(targetUrl)
        .then(blob => blob.json())
        .then(result => {
          this.setState({
            isLoaded: true,
            articles: result,
          });
        },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
      })*/
  }

  getRandomFact = () => { // updates random fact displayed
    var randomfacts = ["Stanford has won 270 overall Olympic medals (139 gold, 73 silver, 58 bronze), as of the 2016 Rio Olympics.", 
                      "Stanford has 165 overall Olympic medalists, as of the 2016 Rio Olympics",
                      "Stanford won 27 medals at the 2016 Rio de Janeiro Olympic Games, a school record!", 
                      "The Cardinal has produced at least one medalist in every Olympics the U.S. has competed in since 1912.",
                      "There are over 800 (registered) parties yearly on Stanford campus.",
                      "Over 10,000 students were driven home by 5-SURE in the 2017-2018 school year.",
                      "Stanford offers over 15,000 courses annually, as of 2020."]
    var randfact = this.state.randomfact;
    if (randomfacts.length > 1) {
      while (randfact === this.state.randomfact) {
        randfact = randomfacts[Math.floor(Math.random()*randomfacts.length)]
      }
    }
    this.setState({randomfact: randfact}) 
  }

  getRandomDataset = () => { // gets a random pathname & redirects to a random dataset
    var randpath = '/#/datasets/' + this.state.items[Math.floor(Math.random()*this.state.items.length)].name
    window.location.href = (randpath);
  }

  render() {
    function html_entity_decode(message) {
      /* decodes UTF8 punctuation into HTML */
      var element = document.createElement("div");
      element.innerHTML = message;
      return element.innerHTML;
    }

    return (
      <div className="home">
        <header>
          <div id='info'>
            <h1 style={{textAlign:'center'}} >The Open Data of Delaware State University</h1>
            
            <div id='lpbuttons'>
              <Link to="/datasets" className="btnPrimary">Explore data</Link>
              {/*<a href="#" className="btnTertiary">Get alerts</a>  */}

              {/* <button onClick={this.getRandomDataset} class="btnPrimary" id="randomdataset"> Random Dataset</button> */}
            </div>

            {/* <div id="randomfactdiv">
              <button onClick={this.getRandomFact} type = "button" className="btnPrimary" id="randomfactcontainer">  
                <p id="randomfact">{this.state.randomfact}</p>
                <p id="newfact">Click for Another Fun Data Fact!</p> 
              </button>
            </div> */}
          </div>
        </header>
        
        {/* <div className="newArticles">
          <h3>Articles Featuring Open Data</h3>
          <div className="mini">
            {this.state.articles.map(function (article) {
              var names = []
              for (var i = 0; i < article._embedded.author.length; i++) {
                names += html_entity_decode(article._embedded.author[i].name);
              }

              return (
                <a href={article.link} target="_blank" rel="noopener noreferrer">
                  <div className="title">
                    {html_entity_decode(article.title.rendered)}
                  </div>
                  <div className="lightTitle">
                    {names} ??? {Moment(Date.parse(article.date)).format("LL")}
                  </div>
                  <div></div>
                  <img className="articleImg" style={{objectFit:"cover"}} src={article._embedded['wp:featuredmedia'][0].source_url} alt=""/>
                </a>
              )
            })
            }
          </div>
          <a href="https://www.stanforddaily.com/category/data-vizzes/" className="seeMore" target="_blank" rel="noopener noreferrer">See more</a>
        </div> */}

        {/* <div className="newDatasets">
          <h3>Featured Datasets</h3>
          <div className="mini">
            {this.state.items.slice(0, 3).map(dataset =>
              <Link to={{
                pathname: '/datasets/' + dataset.name,
                state: {
                  data: dataset,
                }
              }} className="seeMore">
                <div className="title">
                {dataset.display_name}
              </div>
              <div className="lightTitle">
                {dataset.tags}
              </div>
              </Link>
            )
            }
          </div>
          <Link to="/datasets" className="seeMore">See more</Link>
        </div> */}

        <div className="secondHeader">
          <div className="column">
            <img src={DeSODP} alt="Delaware Open Data Project" style={{paddingTop: '4em'}} />
          </div>
          <div className="column">
            <div className="right">
            <div className="title">DeSODP is committed to making data open and accessible to the Delaware State University Community</div>
          </div>
          </div>
          {/* <div style={{clear:"both"}}></div> */}
        </div>
      </div>
    );
  }
}
