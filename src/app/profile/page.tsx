"use client";
import { TreeSite } from "@/entities";
import { CustomButton, Modal } from "@/shared";
import {
  Footer,
  Header,
  HistoryTicket,
  ModalContentProfile,
  ProfileTicket,
  ProfileTripHistory,
} from "@/widgets";
import { useState } from "react";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="container mx-auto sm:px-10 px-5">
        <Header />
      </div>
      <hr />
      <div className="container mx-auto sm:px-10 px-5">
        <div className="max-w-[840px] mx-auto">
          <TreeSite />

          <div className="flex justify-between">
            <ProfileTripHistory />
            <ProfileTicket setShowModal={setShowModal} />
            {/* 
            <div className="w-[65%]">
              <HistoryTicket />
              <HistoryTicket />
            </div> */}
          </div>
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        content={<ModalContentProfile setShowModal={setShowModal} />}
      />

      <Footer />
    </>
  );
};

export default Profile;
