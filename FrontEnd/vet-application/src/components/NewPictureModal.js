import axios from "axios";
import React, {useState} from "react";

const NewPictureModal = (props) => {

    const[picture, setPicture] = useState([]);

    var apiEndPoint = ""
    apiEndPoint = "http://localhost:8080/animals/images";
    

    function postImage(){
        console.log(document.getElementById("image_url").value)
        console.log(props.animal.animalid)
        axios.post(apiEndPoint, 
            {
                // userid: sessionStorage.getItem('id'),
                animalid: props.animal.animalid,
                fileurl: document.getElementById("image_url").value
            }

        ).then((response) => {
            setPicture(response.data);
            alert("Picture saved!");
            window.location.reload(true)
        });
    }


    const id = props.animal

    const modalClose = () => {
        document.getElementById('NewPicture').classList.remove('is-active');
    }

    const handleSave = () => {
        // close modal
        // document.getElementById('NewPicture').classList.remove('is-active');
        // var pictureName = document.getElementById("image_url").value
        // props.picture(pictureName)
        // TODO figure out file input
        // handle file input
        // const fileInput = document.querySelector('#picture-file input[type=file]');
        // console.log(fileInput)
        // if (fileInput.files.length > 0) {
        // const fileName = document.querySelector('#picture-file .file-name');
        // fileName.textContent = fileInput.files[0].name;
        // console.log(fileName)
        // }
    }

    return(
        <div className="modal" id="NewPicture">
            <div className="modal-background" onClick={modalClose}></div>
            <div className="modal-card" >
                <header className="modal-card-head has-background-primary">
                    <p className="title modal-card-title has-text-white has-text-centered">Add Picture</p>
                </header>
                <section className="modal-card-body">
                    <div className="file is-centered is-primary is-boxed" id="picture-file">
                        {/* <label className="file-label">
                            <input className="file-input" type="file" name="resume"/>
                            <span className="file-cta">
                                <span className="file-icon">
                                    <i className="fas fa-upload"></i>
                                </span>
                                <span className="file-label">
                                    Upload Image
                                </span>
                            </span>
                        </label> */}

                    </div>
                    <div className="column has-text-centered">
                        <input id = "image_url" class="input is-small is-primary is-rounded" type="text" placeholder="Enter Image URL"/>
                        <button className= "button is-centered has-text-weight-bold has-text-primary-dark is-rounded my-2" onClick={()=> {modalClose(); postImage()}} >Save</button>
                    </div>
                </section>
            </div>
        </div>
    )

}

export default NewPictureModal;