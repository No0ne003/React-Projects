import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Modal } from "./Modal";

const ModalPopup = () => {
  const [showModalPopup, setShowModalPopup] = useState(false)

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup)
  }
  function onClose(){
    setShowModalPopup(false)
  }

  return (
    <div className="flex flex-col gap-3 justify-start items-center py-5">
      <Button onClick={handleToggleModalPopup} >Open Modal Popup</Button>
      {
        showModalPopup && <Modal onClose={onClose} body={<div>Customized Body</div>} />
      }
    </div>
  );
};

export default ModalPopup
