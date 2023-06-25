import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import InputField from 'shared/components/InputField/InputField';
import Icon from '../../Icon/Icon';
import ButtonModalWithIcon from 'components/Modal/ButtonModalWithIcon';

const initialsValue = {
  title: '',
};

const schema = yup.object().shape({
  title: yup
    .string()
    .min(2, '*Не меньше 2 символів')
    .required('*Обовязкове поле'),
});

const NewBoard = () => {
  const [icon, setIcon] = useState('colors');

  const hendleSubmit = (values, { resetForm }) => {
    console.log(values);
    console.log(icon);
    resetForm();
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={hendleSubmit}
      initialValues={initialsValue}
    >
      <Form>
        <InputField name="title" placeholder="Title" />
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
                name="icons"
                label={
                  {
                    colors: <Icon name="colors" width={26} height={26} />,
                    hexagon: <Icon name="hexagon" width={26} height={26} />,
                    project: <Icon name="project" width={26} height={26} />,
                    container: <Icon name="container" width={26} height={26} />,
                    lightnight: (
                      <Icon name="lightnight" width={26} height={26} />
                    ),
                    loading: <Icon name="loading" width={26} height={26} />,
                    puzzle: <Icon name="puzzle" width={26} height={26} />,
                    star: <Icon name="star" width={26} height={26} />,
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

        <ButtonModalWithIcon text="Create" />
      </Form>
    </Formik>
  );
};

export default NewBoard;
