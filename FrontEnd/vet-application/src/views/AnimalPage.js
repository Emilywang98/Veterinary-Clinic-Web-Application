import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import AnimalCard from "../components/AnimalCard";
import TreatmentCard from "../components/TreatmentCard";
import CommentCard from "../components/CommentCard";
import PictureCard from "../components/PictureCard";
import WeightHistoryModal from "../components/WeightHistoryModal";
import TreatmentHistoryModal from "../components/TreatmentHistoryModal";
import CreateCommentModal from "../components/CreateCommentModal";
import NewPictureModal from "../components/NewPictureModal";
import RequestTreatmentModal from "../components/RequestTreatmentModal";
import { useParams } from "react-router";


const AnimalPage = () => {
    const {id} = useParams();
    // TODO MAKE API CALL HERE TO GET INFORMATION OF ANIMAL USING ID

    const weightModal = () => {
        document.getElementById("WeightModal").classList.add('is-active')
    }

    const treatementHistory = () => {
        document.getElementById("TreatmentHistory").classList.add('is-active')
    }

    const newCommentModal = () => {
        document.getElementById("NewComment").classList.add('is-active')
    }

    const newPictureModal = () => {
        document.getElementById("NewPicture").classList.add('is-active')
    }

    const newTreatmentModal = () => {
        document.getElementById("TreatmentModal").classList.add('is-active')
    }

    return(
        <div className="columns">
            <WeightHistoryModal id={id}/>
            <TreatmentHistoryModal id={id}/>
            <CreateCommentModal id= {id}/>
            <NewPictureModal id = {id}/>
            <RequestTreatmentModal id= {id}/>
            <SideBar/>
            <div className="column">
                <Header/>
                <AnimalCard weightModal = {weightModal}/>
                <TreatmentCard id={id} treatmentHistory={treatementHistory} newTreatment = {newTreatmentModal}/>
                <CommentCard id= {id} newCommentModal={newCommentModal}/>
                <PictureCard id={id} newPictureModal = {newPictureModal}/>
            </div>
        </div>
    )
};

export default AnimalPage;