import { ReactComponent as IconTrash } from '../Icons/icons8-trash.svg';

import {
  Card,
  CardHead,
  Date,
  Div,
  Image,
  ImageListWrapper,
  Section,
} from './styles';

const getCurrentCard = (e, data, openModal, setCurrentCard) => {
  const id = e.currentTarget.id;

  const currentCard = data.find((card) => card.id === id);

  setCurrentCard(currentCard);
  openModal(true);
};

export const ImageList = ({ removeCard, openModal, data, setCurrentCard }) => {
  console.log(data);

  return (
    <ImageListWrapper>
      {data.map(({ id, name, date, url, description = false }) => (
        <Card
          key={id}
          id={id}
          onClick={(e) => getCurrentCard(e, data, openModal, setCurrentCard)}
        >
          <CardHead>
            <div className="flex gap-half flex-column">
              <Section className="bold">{name}</Section>
              <Date>
                <section className="text textDate bold">
                  Дата добавления:{' '}
                </section>
                <section className="date">{date}</section>
              </Date>
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                removeCard(id);
              }}
            >
              <IconTrash className="icon icon-trash" />
            </div>
          </CardHead>
          <Image url={url} />
          <Div>{description}</Div>
        </Card>
      ))}
    </ImageListWrapper>
  );
};
