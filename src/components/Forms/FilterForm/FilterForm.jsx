import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import {
  selectCurrentBoard,
  selectCurrentBoardId,
} from 'redux/board/boardSelectors';

import defaultBg from '../../../static/images/bgIcons/defaultBg.png';
import defaultBgWhite from '../../../static/images/bgIcons/defaultBgWhite.png';
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
import BgIcon from '../NewBoardAndEditBoard/BgIcon';
import PrioritySelector from '../AddAndEditCard/PrioritySelector/PrioritySelector';
import s from '../NewBoardAndEditBoard/NewBoard.module.scss';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { changeFilter, updateBoardById } from 'redux/board/boardOperations';
import { selectUserTheme } from 'redux/auth/authSelectors';
const initialsValue = {
  priority: 'none',
};
const FilterForm = () => {
  const currentBoardId = useSelector(selectCurrentBoardId);
  const currentBoard = useSelector(selectCurrentBoard);
  const [bg, setBg] = useState(currentBoard.background);
  const theme = useSelector(selectUserTheme);
  const filterStyles = true;
  const dispatch = useDispatch();

  const handleChange = e => {
    setBg(e);
    dispatch(
      updateBoardById({
        id: currentBoardId,
        data: {
          title: currentBoard.title,
          icon: currentBoard.icon,
          background: e,
        },
      })
    );
  };
  return (
    <div>
      <div className={s.topLine} />
      <Formik initialValues={initialsValue}>
        <Form>
          <div>
            <p className={s.title}>Background</p>
            <RadioGroup
              orientation="horizontal"
              aria-label="Backgrounds"
              name="background"
              variant="outlined"
              value={bg}
              onChange={e => handleChange(e.target.value)}
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
                        flowers: <BgIcon name={flowers} alt={flowers} />,
                        leaves: <BgIcon name={leaves} alt={leaves} />,
                        mountainsAndBalloon: (
                          <BgIcon
                            name={mountainsAndBalloon}
                            alt={mountainsAndBalloon}
                          />
                        ),
                        nature: <BgIcon name={nature} alt={nature} />,
                        oceanAndYacht: (
                          <BgIcon name={oceanAndYacht} alt={oceanAndYacht} />
                        ),
                        orangePlanet: (
                          <BgIcon name={orangePlanet} alt={orangePlanet} />
                        ),
                        planets: <BgIcon name={planets} alt={planets} />,

                        rocksAndOcean: (
                          <BgIcon name={rocksAndOcean} alt={rocksAndOcean} />
                        ),
                        sakura: <BgIcon name={sakura} alt={sakura} />,
                        sky: <BgIcon name={sky} alt={sky} />,
                        skyBalloons: (
                          <BgIcon name={skyBalloons} alt={skyBalloons} />
                        ),
                        starsAndShine: (
                          <BgIcon name={starsAndShine} alt={starsAndShine} />
                        ),
                        trailerInTheCanyon: (
                          <BgIcon
                            name={trailerInTheCanyon}
                            alt={trailerInTheCanyon}
                          />
                        ),
                        yacht: <BgIcon name={yacht} alt={yacht} />,
                        youngMonth: (
                          <BgIcon name={youngMonth} alt={youngMonth} />
                        ),
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
            <div className={s.bottomLine} />
            <div className={s.labelWrapper}>
              <div>
                <p className={s.labelTitle}>Label color</p>
                <Field name="priority">
                  {({ field }) => (
                    <PrioritySelector field={field} filter={filterStyles} />
                  )}
                </Field>
              </div>
              <button
                onClick={() => dispatch(changeFilter(''))}
                className={s.showAll}
                type="button"
              >
                Show all
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FilterForm;
