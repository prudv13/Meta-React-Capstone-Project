import React from 'react'
import DiningTableImg from "../assets/dinner-table.png"
import LogoImg from "../assets/LogoImg.png"

const ConfirmationModal = ({confirmationModal}) => {
    return (
    <div class="modal" id={confirmationModal} tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title d-flex align-items-center gap-2" id="modalVerticallyCenteredLabel">
                    <i class="fa-solid fa-circle-check fa-lg"></i>
                    <span class='fs-4'>Confirmed</span>
                    </h5>
                    <button type="button" class="btn btn-dark btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                    <img src={LogoImg} class='modal-logo-img my-4' alt='modal-logo-img' />
                    <h4 class="fw-bold my-4">Your Reservation is Confirmed!</h4>
                    <img src={DiningTableImg} class="dining-table-img" alt="dining-table-img" />
                    <h6 class='w-75 mx-auto my-4'>A confirmation message has been sent to your email address and phone number.</h6>
                    <h6>Thanks for dining with us!</h6>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ConfirmationModal;