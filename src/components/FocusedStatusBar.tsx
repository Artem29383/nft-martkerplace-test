import React from 'react';
import {
  Platform,
  StatusBar,
  StatusBarProps,
  StyleSheet,
  View,
} from 'react-native';
import {useIsFocused} from '@react-navigation/core';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight;

const FocusedStatusBar = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<StatusBar> &
    Readonly<StatusBarProps>,
) => {
  const isFocused = useIsFocused();
  console.info(isFocused);
  return isFocused ? (
    <View style={[styles.statusBar, {backgroundColor: props.backgroundColor}]}>
      <StatusBar translucent animated={true} {...props} />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

export default FocusedStatusBar;
