import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface BoxProps{
  color:string;
}

export const Container = styled.View`
  flex: 1;
`;

export const Box = styled.TouchableOpacity.attrs({
  activeOpacity:.9
})<BoxProps>`
  flex: 2;
  background: ${({color})=>color};
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
 color: #fff;
 font-size: ${RFValue(120)}px;
`;