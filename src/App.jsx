import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { Form } from './components/Form/Form.jsx';
import { ImageList } from './components';
import { ModalCard } from './components/ModalCard/ModalCard.jsx';
import { Container, GlobalStyle } from './styles.js';
import { formatDate } from './misc/formatDate.js';
import { removeFromStateById } from './misc/removeFromStateById.js';

function App() {
  const [data, setData] = useState([]);
  const [modalInfoIsOpen, setModalInfoOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState({});

  const removeCard = (id) => removeFromStateById(id, data, setData);

  const client_id = 'IltA_mu3sdV8kcY7sxVKyaBVsuVTSVoh9FStCW00iL0';

  const fetchImages = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?count=5&client_id=${client_id}`,
      );

      const result = await response.json();

      const cleanResult = result.map(
        ({ alt_description, created_at, urls }, index) => {
          return {
            name: `image-${index + 1}`,
            date: formatDate(new Date(created_at)) || 'date unknown',
            description: alt_description,
            url: urls.small,
            id: nanoid(),
          };
        },
      );

      setData(cleanResult);
      sessionStorage.setItem('unsplashData', JSON.stringify(cleanResult));

      return cleanResult;
    } catch (error) {
      console.error('Error fetching images', error);
    }
  };

  useEffect(() => {
    const storedData = sessionStorage.getItem('unsplashData');

    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      fetchImages();
    }
  }, []);

  return (
    <Container>
      <GlobalStyle />
      <ModalCard
        isOpen={modalInfoIsOpen}
        onClose={() => setModalInfoOpen(false)}
        currentCard={currentCard}
        setModalInfoOpen={setModalInfoOpen}
      />
      <Form
        setData={setData}
        formatDate={formatDate}
        data={data}
        fetchImages={fetchImages}
        nanoid={nanoid}
      />
      <ImageList
        removeCard={removeCard}
        openModal={setModalInfoOpen}
        data={data}
        setCurrentCard={setCurrentCard}
      />
    </Container>
  );
}

export default App;
