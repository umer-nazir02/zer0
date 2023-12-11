import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import PrimaryButton from '../../components/atoms/PrimaryButton';
import styles from './style';
import usePersonalize from './usePersonalize';
import PrimaryView from '../../components/atoms/PrimaryView';
import PrimaryText from '../../components/atoms/PrimaryText';
import CustomInput from '../../components/atoms/CustomInput';

const PersonalizeScreen = () => {
  const {colors, setName, name, handleSubmit, handleSkip} = usePersonalize();
  return (
    <PrimaryView colors={colors}>
      <TouchableOpacity style={styles.skipButtonContainer} onPress={handleSkip}>
        <PrimaryText style={{color: colors.accentGreen, fontSize: 12}}>
          skip
        </PrimaryText>
      </TouchableOpacity>

      <View style={styles.titleTextContainer}>
        <PrimaryText style={{fontSize: 24}}>Let's Personlize your</PrimaryText>
        <PrimaryText style={{fontSize: 24}}>experience</PrimaryText>
      </View>

      <View style={styles.subtitleTextContainer}>
        <PrimaryText style={{color: colors.accentGreen, fontSize: 15}}>
          Hi, It's zero! What Do Your Friends
        </PrimaryText>
        <PrimaryText style={{color: colors.accentGreen, fontSize: 15}}>
          Call You?
        </PrimaryText>
      </View>

      <View style={styles.textInputContainer}>
        <CustomInput
          input={name}
          label={'Name'}
          colors={colors}
          placeholder={'eg. John Doe'}
          setInput={setName}
        />
      </View>

      <PrimaryButton
        onPress={handleSubmit}
        colors={colors}
        buttonTitle={'Continue'}
      />
    </PrimaryView>
  );
};

export default PersonalizeScreen;
