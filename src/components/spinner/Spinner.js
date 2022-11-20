import React from 'react';
import {Image} from 'react-native';
import LoaderGif from '../../assets/gifs/dojutsu.gif';
import {Container, styles} from './Spinner.style';

const Spinner = () => (
  <Container>
    <Image style={styles.spinner} source={LoaderGif} />
  </Container>
);

export default Spinner;
