import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  Image,
} from "@nextui-org/react";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import { HiX } from "react-icons/hi";

type LightBoxModalType = {
  clickedImg: string,
  setClickedImg: React.Dispatch<React.SetStateAction<string>>,
  handelRotationRight: any,
  handelRotationLeft: any,
}

const LightBoxModal = ({
  clickedImg,
  setClickedImg,
  handelRotationRight,
  handelRotationLeft,
}: LightBoxModalType) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={visible}
        onOpenChange={() => setClickedImg("")}
        hideCloseButton={true}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-primary-500 to-primary/10 backdrop-opacity-20",
        }}
      >
        <ModalContent className="bg-transparent border-0 shadow-none">
          {(onClose) => (
            <>
              <ModalBody className="relative">
                <div
                  className="cursor-pointer flex justify-end"
                  onClick={() => setClickedImg("")}
                >
                  <HiX className="size-6 text-white" />
                </div>
                <Button
                  color="primary"
                  className="absolute right-0 z-20 top-1/2 bottom-1/2 p-3"
                  onPress={handelRotationRight}
                >
                  <BiChevronsRight className="size-8 text-primary" />
                </Button>
                <Image
                  width={400}
                  height={711}
                  alt="ghorbani-dev.ir"
                  src={clickedImg}
                  className="object-fill"
                />
                <Button
                  color="primary"
                  className="absolute left-0 z-20 top-1/2 bottom-1/2 p-3"
                  onPress={handelRotationLeft}
                >
                  <BiChevronsLeft className="size-8 text-primary" />
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default LightBoxModal;
