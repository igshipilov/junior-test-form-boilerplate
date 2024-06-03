import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Break,
  Button,
  ContainerButton,
  ErrorMessage,
  Field,
  Fields,
  Input,
  Label,
  P,
  StyledForm,
  TextArea,
} from './styles.js';

export const Form = ({ data, setData, formatDate, fetchImages, nanoid }) => {
  const {
    register,
    handleSubmit,
    resetField,
    setFocus,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      url: '',
    },
  });

  const [checked, setChecked] = useState(false);
  const [textDescription, setTextDescription] = useState('');

  const handleCheck = () => {
    setChecked(!checked);
  };
  const handleDescription = (e) => setTextDescription(e.target.value);

  useEffect(() => resetField('description'), [textDescription]);

  return (
    <StyledForm
      onSubmit={handleSubmit((inputData) => {
        const currentDate = formatDate(new Date());

        inputData.date = currentDate;
        inputData.id = nanoid();
        inputData.description = checked ? textDescription : '';
        setData([...data, inputData]);

        sessionStorage.setItem(
          'unsplashData',
          JSON.stringify([...data, inputData]),
        );

        resetField('name');
        resetField('url');
        setTextDescription('');
        setFocus('name');
      })}
    >
      <Fields>
        <Field>
          <Label>Название фото</Label>
          <Input
            {...register('name', { required: 'Обязательно' })}
            placeholder="Yosemite National Park"
            hasError={!!errors.name}
          />
          <ErrorMessage>
            <P>{errors.name?.message}</P>
          </ErrorMessage>
        </Field>

        <Field>
          <Label>Ссылка на фото</Label>
          <Input
            type="url"
            {...register('url', { required: 'Обязательно' })}
            placeholder="https://images.unsplash.com/photo-1715108046177-0d8987aeb96a?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            hasError={!!errors.name}
          />
          <ErrorMessage>
            <P>{errors.url?.message}</P>
          </ErrorMessage>
        </Field>
      </Fields>

      <div className="margin-top">
        <Checkbox
          label="Есть описание"
          value={checked}
          onChange={handleCheck}
        />
      </div>

      {checked && (
        <Field className="margin-top width-100">
          <Label>Описание</Label>
          <TextArea
            {...register('description', { required: 'Обязательно' })}
            placeholder="Describe the picture"
            hasError={!!errors.name}
            onChange={handleDescription}
            value={textDescription}
          />
          <ErrorMessage>
            <P>{errors.description?.message}</P>
          </ErrorMessage>
        </Field>
      )}

      <ContainerButton className="flex">
        {/* <Button type="reset" onClick={fetchImages}>
          <span>Подгрузить изображения</span>
        </Button> */}
        <Button type="submit" value="Добавить фото">
          <span>Добавить фото</span>
        </Button>
      </ContainerButton>

      <Break />
    </StyledForm>
  );
};

const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange}></input>
      {label}
    </label>
  );
};
