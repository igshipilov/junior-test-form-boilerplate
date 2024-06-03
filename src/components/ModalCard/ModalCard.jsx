import { ReactComponent as IconClose } from '../Icons/icons8-close.svg';

import { Body } from './styles.js';

export const ModalCard = ({
  isOpen,
  onClose,
  currentCard,
  setModalInfoOpen,
}) => {
  const { date, id, name, url, description } = currentCard;

  return (
    <>
      {isOpen && (
        <Body onClick={() => setModalInfoOpen(false)}>
          <div className="modal-wrapper">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-head">
                <div className="modal-title">{name}</div>
                <IconClose
                  className="modal-icon-close"
                  onClick={() => onClose()}
                />
              </div>
              <div className="modal-date">
                <div className="modal-date-text">Дата добавления:</div>
                <div className="modal-date-actual">{date}</div>
              </div>
              <div className="modal-image-container">
                <img src={url} alt={name} className="modal-image" />
              </div>
              <div className="modal-description">{description}</div>
            </div>
          </div>
        </Body>
      )}
    </>
  );
};
