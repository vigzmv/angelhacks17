import React, {Component} from 'react';

class Post extends Component {
  render() {
    return (
      <div className="container">

        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">Portfolio Item
              <small>Item Subheading</small>
            </h1>
          </div>
        </div>

        <div className="row">

          <div className="col-md-8">
            <img className="img-responsive" src="http://placehold.it/750x500" alt=""/>
          </div>

          <div className="col-md-4">
            <h3>Project Description</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod
              odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in
              adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis
              placerat, felis enim.</p>
            <h3>Project Details</h3>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Dolor Sit Amet</li>
              <li>Consectetur</li>
              <li>Adipiscing Elit</li>
            </ul>
          </div>

        </div>

        <div className="row">

          <div className="col-lg-12">
            <h3 className="page-header">Related Projects</h3>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a href="#">
              <img
                className="img-responsive portfolio-item"
                src="http://placehold.it/500x300"
                alt=""/>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a href="#">
              <img
                className="img-responsive portfolio-item"
                src="http://placehold.it/500x300"
                alt=""/>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a href="#">
              <img
                className="img-responsive portfolio-item"
                src="http://placehold.it/500x300"
                alt=""/>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a href="#">
              <img
                className="img-responsive portfolio-item"
                src="http://placehold.it/500x300"
                alt=""/>
            </a>
          </div>

        </div>

        <hr/>

        <footer>
          <div className="row">
            <div className="col-lg-12">
              <p>Copyright &copy; Your Website 2014</p>
            </div>
          </div>
        </footer>

      </div>
    )
  }
}

export default Post;