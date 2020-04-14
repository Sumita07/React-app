import React from 'react';
import './MemberAdd.css';
import $ from 'jquery';


class MemberAdd extends React.Component {
  constructor(props){
		super(props);
    this.state = {file: '',
    imagePreviewUrl: '',
    memberDet:[]
  };
  
    this.picRemove = this.picRemove.bind(this);
    this.memeberAdd = this.memeberAdd.bind(this);
    this._handleImageChange= this._handleImageChange.bind(this);
  }
  

  

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result

      }
      
     
      );
      
      
    }
    // this.props.propic(this.state.imagePreviewUrl),
    console.log(this.state.imagePreviewUrl)
    reader.readAsDataURL(file);
   
  }

 picRemove(){
      this.setState({
        imagePreviewUrl: null
      }); 

    }

    memeberAdd(e){
      e.preventDefault();
      $('#memeberAdd-form').each(function(i, e){
        $('<span className="form-register"></span>')
            .attr("id", "id_" + i)
            .appendTo(this);
    });
   
		var serialize = require('form-serialize');
		var form = document.querySelector('#memeberAdd-form');
		var obj = serialize(form, { hash: true });
		var str = serialize(form);
    this.setState({ memberDet:obj });
    console.log(obj)
    this.props.memberData(obj);
   
    this.props.history.push('/dashboard'); 
		
    }
  


  render() {
    let {imagePreviewUrl} = this.state;
    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = (<img src={imagePreviewUrl} />);
    
    } else {
      imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    
    
    return (
      <main id="main" >
      <section>
        <div className="negmargin">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card p-2 p-md-4 mb-4">
                  <div className="card-body">
                
                    <form  className="form form-register form-group col-8" method="post"  
      
                     id="memeberAdd-form" onSubmit={this.memeberAdd} >
                     

                      <div className="form-field  flex-wrap">
											<input name="name" id="memeber-username" type="text" 
											className="form-input form-control order-last mb-1 js-usabilla-secure-blur" autoComplete="off"  
											/>
											<label className="user  label label-align" htmlFor="memeber-username">Name</label>
										</div>
                    <div className="form-field  flex-wrap">
											<input name="email" id="memeber-email" type="text" 
												className="form-input form-control order-last mb-1 js-usabilla-secure-blur" autoComplete="off"  
												/>
											<label className="user  label label-align" htmlFor="memeber-email">Email</label>
										</div>
                    <div className="form-field  flex-wrap">
											<input name="phone" id="memeber-phone" type="text"
											className="form-input form-control order-last mb-1 js-usabilla-secure-blur"   autoComplete="off"
										 />
										<label className="user  label label-align" htmlFor="memeber-phone">Phone Number</label>
										</div>
                  
                    <div className="previewComponent form-field  flex-wrap">
                    <span className="user  label label-align" htmlFor="memeber-photo">Profile pic</span>
                      <input className="fileInput p-1" 
                        type="file" name="profilePic"
                        onChange={(e)=>this._handleImageChange(e)} />
                        
                          <input type="button" className="btn btn-warning mt-4 p-2" onClick={this.picRemove} value="Delete"/>
                       
                    </div>
                   
                    
                    <div className="imgPreview ml-5 pl-5">
                          {imagePreview}
                        </div>

                        <div className="form-field ml-5 mt-4">
											<input type="submit" className="btn btn-primary" value="Submit Details" />
										</div>
                 
                   
                    </form>
                 
                        
                       
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
      );
  }
}

export default MemberAdd;

 
