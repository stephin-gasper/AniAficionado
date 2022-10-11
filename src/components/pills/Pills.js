import {ScrollView} from 'react-native';
import React, {memo, useState} from 'react';
import PropTypes from 'prop-types';
import {useTheme} from 'styled-components/native';

import {Pill, PillText, styles} from './Pills.style';

const Pills = memo(({list, onPillPress}) => {
  const theme = useTheme();
  const [activePillIndex, setActivePillIndex] = useState(0);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      horizontal
      contentContainerStyle={styles.contentContainer}>
      <For each="text" index="index" of={list}>
        <Pill
          key={`pill-${text}`}
          initialColor={
            index === 0 ? theme.tertiaryColor : theme.secondaryColor
          }
          activeColor={
            index === activePillIndex
              ? theme.tertiaryColor
              : theme.secondaryColor
          }
          testID={`pill-${index}`}>
          <PillText
            onPress={() => {
              setActivePillIndex(index);
              onPillPress(text);
            }}
            testID={`pill-text-${index}`}>
            {text}
          </PillText>
        </Pill>
      </For>
    </ScrollView>
  );
});

Pills.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  onPillPress: PropTypes.func.isRequired,
};

export default Pills;
