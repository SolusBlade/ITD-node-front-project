import Icon from '../../Icon/Icon';
import { Formik, Form, Field } from 'formik';
import ButtonModalWithIcon from 'components/Modal/ButtonModalWithIcon';

import s from './NewBoard.module.scss';

import { useState } from 'react';
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';

const initialsValue = {
  title: '',
  icons: 'colors',
};

const NewBoard = () => {
  const [icon, setIcon] = useState('colors');

  const hendleSubmit = (values, { resetForm }) => {
    console.log(values);

    resetForm();
  };
  return (
    <Formik onSubmit={hendleSubmit} initialValues={initialsValue}>
      <Form>
        <Field
          className={s.title}
          name="title"
          type="text"
          placeholder="Title"
        />
        <RadioGroup
          orientation="horizontal"
          aria-label="Icons"
          name="icons"
          variant="outlined"
          value={icon}
          onChange={event => setIcon(event.target.value)}
          sx={{
            marginBottom: '24px',
            border: 'none',
          }}
        >
          {[
            'colors',
            'hexagon',
            'project',
            'container',
            'lightnight',
            'loading',
            'puzzle',
            'star',
          ].map(item => (
            <Box
              key={item}
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Radio
                value={item}
                disableIcon
                overlay
                label={
                  {
                    colors: (
                      <Icon
                        name="colors"
                        width={26}
                        height={26}
                        className={s.icon}
                      />
                    ),
                    hexagon: (
                      <Icon
                        name="hexagon"
                        width={26}
                        height={26}
                        className={s.icon}
                      />
                    ),
                    project: (
                      <Icon
                        name="project"
                        width={26}
                        height={26}
                        className={s.icon}
                      />
                    ),
                    container: (
                      <Icon
                        name="container"
                        width={26}
                        height={26}
                        className={s.icon}
                      />
                    ),
                    lightnight: (
                      <Icon
                        name="lightnight"
                        width={26}
                        height={26}
                        className={s.icon}
                      />
                    ),
                    loading: (
                      <Icon
                        name="loading"
                        width={26}
                        height={26}
                        className={s.icon}
                      />
                    ),
                    puzzle: (
                      <Icon
                        name="puzzle"
                        width={26}
                        height={26}
                        className={s.icon}
                      />
                    ),
                    star: (
                      <Icon
                        name="star"
                        width={26}
                        height={26}
                        secondaryClassName={s.icon}
                      />
                    ),
                  }[item]
                }
                variant={icon === item ? 'solid' : 'plain'}
                sx={{
                  '& .Joy-checked': {
                    backgroundColor: 'transparent',
                  },
                  '& .MuiRadio-label': {
                    width: '20px',
                    height: '20px',
                    marginLeft: '4px',
                  },
                }}
                slotProps={{
                  input: { 'aria-label': item },
                  action: {
                    sx: {
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                      borderRadius: 0,
                      transition: 'none',
                    },
                  },
                  label: { sx: { lineHeight: 0 } },
                }}
              />
            </Box>
          ))}
        </RadioGroup>
        <ButtonModalWithIcon text={'Add board'} />
      </Form>
    </Formik>
  );
};

export default NewBoard;
