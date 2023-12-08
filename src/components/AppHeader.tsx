import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from './Icons';
import {Colors} from '../types/colorType';
import PrimaryText from './atoms/PrimaryText';

interface AppHeaderProps {
  onPress(): void;
  text: string;
  colors: Colors;
}

const AppHeader: React.FC<AppHeaderProps> = ({onPress, colors, text}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconButtonContainer}>
        <TouchableOpacity onPress={onPress}>
          <Icon
            name="caret-back-circle"
            size={25}
            color={colors.primaryText}
            type={'IonIcons'}
          />
        </TouchableOpacity>
      </View>

      <PrimaryText style={{color: colors.primaryText}}>{text}</PrimaryText>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  iconButtonContainer: {
    marginRight: 10,
  },
});
