import { FC } from "react";

const CustomModal: FC<CustomFixedModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="custom-modal__overlay" onClick={onClose} />
      <div className="custom-modal__content">
        <div className="custom-modal__inner">{children}</div>
      </div>
    </>
  );
};

export default CustomModal;
