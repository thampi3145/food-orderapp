import React, { Component } from 'react';
import { React_Bootstrap_Carousel } from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/bootstrap.min.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { getSliderDetails } from 'actions/slider';

@connect(state => ({
  
  errorSliderDetails: state.slider.get('errorSliderDetails'),
  loadingSliderDetails: state.slider.get('loadingSliderDetails'),
  SliderDetails: state.slider.get('SliderDetails'),
}))

export default class SLIDER extends Component {

  static propTypes = {
    slider: PropTypes.object,
    errorSliderDetails: PropTypes.string,
    loadingSliderDetails: PropTypes.bool,
    SliderDetails: PropTypes.object,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  componentWillMount() {
   
    const {
      dispatch,
      SliderDetails,
    } = this.props;
    
    dispatch(getSliderDetails(this.props.selected_id)); 
  }

  

  renderSlider() {
    const styles = { height: 400, width: "100%" };
    let sliderdata= this.props.SliderDetails.data.images;
    if(this.props.SliderDetails) {
      return (
      
        <section>
            <div>
          <React_Bootstrap_Carousel 
          slideshowSpeed={this.props.SliderDetails.data.slide_duration * 1000}
          indicators = {this.props.SliderDetails.data.bullets}>

            {sliderdata.map(function(value, index){
                    return <div key={index} style={{ height: 400 }}>
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={value.media_path}
                    />
                    <div className="carousel-caption">Image</div>
                  </div>;
                  })}
            
           
            
          </React_Bootstrap_Carousel>
          </div>
        </section>

   
);
    }
  }

  render () {
    
    if(this.props.SliderDetails) {
      return (
      
         
         this.renderSlider()
         
         
        
      );
    }
    else {
      return (
        <div>
       <div className="adjust loaderbackground">
                  <div className="loader"></div>
               </div>
   </div>
      );
    }

}




  
    // render () {
    //   const styles = { height: 400, width: "100%" };
    //     return (
    //       <div className="container-fluid">
    //       <div className="row">
    //         <div className="col-md-12" style={{ paddingTop: "20px" }}>
    //           <div className="btn-group">
    //             <button type="button" className="btn btn-primary" onClick={this._changeIcon}>
    //               Change Icon
    //             </button>
    //             <button type="button" className="btn btn-primary" onClick={this.slidePrev}>
    //               Slider prev
    //             </button>
    //             <button type="button" className="btn btn-primary" onClick={this.slideNext}>
    //               Slider next
    //             </button>
    //             <button type="button" className="btn btn-primary" onClick={this.goToSlide}>
    //               Go to slide 4
    //             </button>
    //             <button type="button" className="btn btn-primary">
    //               "Start Autoplay"
    //             </button>
    //           </div>
    //         </div>
    //         <div className="col-md-12" style={{ marginTop: 20 }}>
    //           <React_Bootstrap_Carousel>
    //             <div style={{ height: 400 }}>
    //               <img
    //                 style={{ width: "100%", height: "100%" }}
    //                 src="https://www.w3schools.com/bootstrap/ny.jpg"
    //               />
    //               <div className="carousel-caption">Image</div>
    //             </div>
    //             <div style={{ ...styles, backgroundColor: "aqua" }}>
    //               <video className="carousel-center" controls style={{ width: "75%" }} height="250">
    //                 <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
    //               </video>
    //               <div className="carousel-caption">Video</div>
    //             </div>
    //             <div
    //               style={{
    //                 height: 400,
    //                 width: "100%",
    //                 backgroundColor: "lightpink"
    //               }}
    //             >
    //               <div className="carousel-center">center Text</div>
    //               <div className="carousel-caption">Text</div>
    //             </div>
    //             <div style={{ ...styles, backgroundColor: "lightblue" }}>
    //               <span>text</span>
    //               <div className="carousel-caption">Text</div>
    //             </div>
    //             <div style={{ ...styles, backgroundColor: "lightblue" }}>
    //               <div className="carousel-center">
    //                 <iframe
    //                   style={{ width: 500 }}
    //                   height="250"
    //                   src="https://www.youtube.com/embed/MhkGQAoc7bc?showinfo=0"
    //                   frameBorder="0"
    //                   allowFullScreen
    //                 />
    //               </div>
    //               <div className="carousel-caption">Youtube</div>
    //             </div>
    //           </React_Bootstrap_Carousel>
    //         </div>
    //         <div className="col-md-12" style={{ marginTop: 20 }}>
    //           <React_Bootstrap_Carousel className="carousel-fade">
    //             <div style={{ ...styles, backgroundColor: "darkcyan" }}>
    //               <div className="carousel-center">This carsouel transition is fade</div>
    //               <div className="carousel-caption">Text</div>
    //             </div>
    //             <div style={{ ...styles, backgroundColor: "yellowgreen" }}>
    //               <span className="carousel-center">This carsouel transition is fade</span>
    //               <div className="carousel-caption">Text</div>
    //             </div>
    //           </React_Bootstrap_Carousel>
    //         </div>
    //       </div>
    //     </div>
    //     );
    // }
}