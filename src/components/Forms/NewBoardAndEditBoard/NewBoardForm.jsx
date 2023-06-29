import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import clsx from 'clsx';
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import InputField from 'shared/components/InputField/InputField';
import Icon from '../../Icon/Icon';
import ButtonModalWithIcon from 'components/Modal/ButtonModalWithIcon';
import BgIcon from './BgIcon';
import s from './NewBoard.module.scss';

import defaultBg from '../../../static/images/bgIcons/defaultBg.png';
import flowers from '../../../static/images/bgIcons/flowers.png';
import leaves from '../../../static/images/bgIcons/leaves.png';
import mountainsAndBalloon from '../../../static/images/bgIcons/mountainsAndBalloon.png';
import nature from '../../../static/images/bgIcons/nature.png';
import oceanAndYacht from '../../../static/images/bgIcons/oceanAndYacht.png';
import orangePlanet from '../../../static/images/bgIcons/orangePlanet.png';
import planets from '../../../static/images/bgIcons/planets.png';
import rocksAndOcean from '../../../static/images/bgIcons/rocksAndOcean.png';
import sakura from '../../../static/images/bgIcons/sakura.png';
import sky from '../../../static/images/bgIcons/sky.png';
import skyBalloons from '../../../static/images/bgIcons/skyBalloons.png';
import starsAndShine from '../../../static/images/bgIcons/starsAndShine.png';
import trailerInTheCanyon from '../../../static/images/bgIcons/trailerInTheCanyon.png';
import yacht from '../../../static/images/bgIcons/yacht.png';
import youngMonth from '../../../static/images/bgIcons/youngMonth.png';
import { createNewBoard } from 'redux/board/boardOperations';
import { selectUserTheme } from 'redux/auth/authSelectors';
import defaultBgWhite from '../../../static/images/bgIcons/defaultBgWhite.png';
const initialsValue = {
  title: '',
};

const schema = yup.object().shape({
  title: yup.string().required('Title is a required field'),
});

const NewBoard = ({ closeModal }) => {
  const [icon, setIcon] = useState('project');
  const [bg, setBg] = useState('defaultBg');
  const theme = useSelector(selectUserTheme);

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      createNewBoard({ title: values.title, icon: icon, background: bg })
    );
    closeModal();
    resetForm();
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={initialsValue}
    >
      <Form>
        <InputField name="title" placeholder="Title" />
        <div>
          <p className={s.title}>Icons</p>
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
              gap: '8px',
            }}
          >
            {[
              'project',
              'star',
              'loading',
              'puzzle',
              'container',
              'lightnight',
              'colors',
              'hexagon',
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
                      colors: (
                        <Icon
                          name={theme === 'dark' ? 'colors' : 'colors-white'}
                          width={18}
                          height={18}
                          secondaryClassName={clsx(
                            s.svgIcon,
                            icon === 'colors' && s.activeSvgIcon
                          )}
                        />
                      ),
                      hexagon: (
                        <Icon
                          name={theme === 'dark' ? 'hexagon' : 'hexagon-white'}
                          width={18}
                          height={18}
                          secondaryClassName={clsx(
                            s.svgIcon,
                            icon === 'hexagon' && s.activeSvgIcon
                          )}
                        />
                      ),
                      project: (
                        <Icon
                          name={theme === 'dark' ? 'project' : 'project-white'}
                          width={18}
                          height={18}
                          secondaryClassName={clsx(
                            s.svgIcon,
                            icon === 'project' && s.activeSvgIcon
                          )}
                        />
                      ),
                      container: (
                        <Icon
                          name={
                            theme === 'dark' ? 'container' : 'container-white'
                          }
                          width={18}
                          height={18}
                          secondaryClassName={clsx(
                            s.svgIcon,
                            icon === 'container' && s.activeSvgIcon
                          )}
                        />
                      ),
                      lightnight: (
                        <Icon
                          name={
                            theme === 'dark' ? 'lightnight' : 'lightnight-white'
                          }
                          width={18}
                          height={18}
                          secondaryClassName={clsx(
                            s.svgIcon,
                            icon === 'lightnight' && s.activeSvgIcon
                          )}
                        />
                      ),
                      loading: (
                        <Icon
                          name={theme === 'dark' ? 'loading' : 'loading-white'}
                          width={18}
                          height={18}
                          secondaryClassName={clsx(
                            s.svgIcon,
                            icon === 'loading' && s.activeSvgIcon
                          )}
                        />
                      ),
                      puzzle: (
                        <Icon
                          name={theme === 'dark' ? 'puzzle' : 'puzzle-white'}
                          width={18}
                          height={18}
                          secondaryClassName={clsx(
                            s.svgIcon,
                            icon === 'puzzle' && s.activeSvgIcon
                          )}
                        />
                      ),
                      star: (
                        <Icon
                          name={theme === 'dark' ? 'star' : 'star-white'}
                          width={18}
                          height={18}
                          secondaryClassName={clsx(
                            s.svgIcon,
                            icon === 'star' && s.activeSvgIcon
                          )}
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
                      width: '18px',
                      height: '18px',
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
        </div>
        <div>
          <p className={s.title}>Background</p>
          <RadioGroup
            orientation="horizontal"
            aria-label="Backgrounds"
            name="background"
            variant="outlined"
            value={bg}
            onChange={event => setBg(event.target.value)}
            sx={{
              flexWrap: 'wrap',
              width: '260px',
              marginBottom: '24px',
              border: 'none',
              gap: '4px',
            }}
          >
            {[
              'defaultBg',
              'flowers',
              'leaves',
              'mountainsAndBalloon',
              'nature',
              'oceanAndYacht',
              'orangePlanet',
              'planets',
              'rocksAndOcean',
              'sakura',
              'sky',
              'skyBalloons',
              'starsAndShine',
              'trailerInTheCanyon',
              'yacht',
              'youngMonth',
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
                  name="background"
                  label={
                    {
                      defaultBg:
                        theme === 'dark' ? (
                          <BgIcon name={defaultBg} alt={defaultBg} />
                        ) : (
                          <BgIcon name={defaultBgWhite} alt="icon" />
                        ),
                      flowers: <BgIcon name={flowers} alt="icon" />,
                      leaves: <BgIcon name={leaves} alt="icon" />,
                      mountainsAndBalloon: (
                        <BgIcon name={mountainsAndBalloon} alt="icon" />
                      ),
                      nature: <BgIcon name={nature} alt="icon" />,
                      oceanAndYacht: <BgIcon name={oceanAndYacht} alt="icon" />,
                      orangePlanet: <BgIcon name={orangePlanet} alt="icon" />,
                      planets: <BgIcon name={planets} alt="icon" />,

                      rocksAndOcean: <BgIcon name={rocksAndOcean} alt="icon" />,
                      sakura: <BgIcon name={sakura} alt="icon" />,
                      sky: <BgIcon name={sky} alt="icon" />,
                      skyBalloons: <BgIcon name={skyBalloons} alt="icon" />,
                      starsAndShine: <BgIcon name={starsAndShine} alt="icon" />,
                      trailerInTheCanyon: (
                        <BgIcon name={trailerInTheCanyon} alt="icon" />
                      ),
                      yacht: <BgIcon name={yacht} alt="icon" />,
                      youngMonth: <BgIcon name={youngMonth} alt="icon" />,
                    }[item]
                  }
                  variant={bg === item ? 'solid' : 'plain'}
                  sx={
                    theme === 'violet'
                      ? {
                          '& .Joy-checked': {
                            backgroundColor: 'transparent',
                            outline: '2px solid #5255BC',
                            borderRadius: '6px',
                            zIndex: '99',
                          },
                        }
                      : {
                          '& .Joy-checked': {
                            backgroundColor: 'transparent',
                            outline: '2px solid #BEDBB0',
                            borderRadius: '6px',
                            zIndex: '99',
                          },
                        }
                  }
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
        </div>

        <ButtonModalWithIcon text="Create" />
      </Form>
    </Formik>
  );
};

export default NewBoard;
