import axios from "axios";
import React, {useState} from "react";
import getUser from "../components/GetUser";

const ManageRequestCard = (props) =>{

    const [animal, setAnimal] = useState(props.animal)

    const makeRequest = () => {
        const updateToAnimal = {
            animalid:animal.animalid,
            animalname:animal.animalname,
            species:animal.species,
            status:"requested"
        }
        axios.put("http://localhost:8080/animal", updateToAnimal)
            .then((res) => setAnimal(res.data))

        const user = getUser()
        const id = user.userId

        const newRequest = {
            animalid:animal.animalid,
            teacherid:id
        }

        axios.post("http://localhost:8080/request", newRequest)
    }

    return (
    <div className="columns is-centered mb-6">
        <div className="column is-two-thirds">
            <div class="columns card is-vcentered">
                <div className="column has-text-centered">
                    <div class="my-5">
                        <img src="sora.jpg" alt="Sora"></img>
                    </div>
                </div>
                <div className="column">
                    <div class="columns is-vcentered">
                        <div className="column is-one-third">
                            <h1 class="has-text-weight-bold has-text-primary-dark">Id:</h1>
                        </div>
                        <div className="column">
                            <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={animal.animalid}></input>
                        </div>
                    </div>
                    <div class="columns is-vcentered">
                        <div className="column is-one-third">
                            <h1 class="has-text-weight-bold has-text-primary-dark">Name:</h1>
                        </div>
                        <div className="column">
                            <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={animal.animalname}></input>
                        </div>
                    </div>
                    <div class="columns is-vcentered">
                        <div className="column is-one-third">
                            <h1 class="has-text-weight-bold has-text-primary-dark">Species:</h1>
                        </div>
                        <div className="column">
                            <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={animal.species}></input>
                        </div>
                    </div>
                    <div class="columns is-vcentered">
                        <div className="column is-one-third">
                            <h1 class="has-text-weight-bold has-text-primary-dark">Status:</h1>
                        </div>
                        <div className="column">
                            <input class="input is-primary is-rounded has-text-centered" type="text" placeholder={animal.status}></input>
                        </div>
                    </div>
                    <div class ="columns is-centered my-3">
                        <button onClick={makeRequest} className= "button has-text-weight-bold has-text-primary-dark is-rounded my-2">
                            <span class="icon is-small">
                                <i class="fas fa-bookmark"></i>
                            </span>
                            <h3 class="has-text-weight-bold">Request Animal</h3>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default ManageRequestCard;