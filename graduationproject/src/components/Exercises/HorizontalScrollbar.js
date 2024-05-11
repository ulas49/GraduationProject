import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import 'react-horizontal-scrolling-menu/dist/styles.css';


// import ExerciseCard from './ExerciseCard';
import RightArrowIcon from '@/assets/icons/right-arrow.png';
import LeftArrowIcon from '../../assets/icons/left-arrow.png';
import BodyPart from './BodyPart';
import Image from 'next/image';

import './hideScrollbar.css';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <Image src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};


const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <Image src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : '' }
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;