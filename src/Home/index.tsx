import React, {useState} from 'react';
import { GestureResponderEvent } from 'react-native';
import { Dimensions } from 'react-native'

import { Box, Container, Label } from './styles';


export function Home() {
  const [score, setScore] = useState({
    red:0,
    blue:0
  });
  const screenDimension = Dimensions.get('screen').width / 2;

  const handleGesture = (evt:GestureResponderEvent, scoreType:'red'|'blue') => {
    const { nativeEvent:{locationX} } = evt;

    if(locationX < screenDimension){
      setScore(prev => {
        return {
          ...prev,
          [scoreType]:prev[scoreType]-1
        }
      });
    }else{
      setScore(prev => {
        return {
          ...prev,
          [scoreType]:prev[scoreType]+1
        }
      });
    }
    
  };
  
  return (
    <Container>
      
      <Box color="#e74c3c" onPress={(_)=>handleGesture(_, 'red')}>
        <Label>
          {score.red}
        </Label>
      </Box>
      
      <Box color="#3498db" onPress={(_)=>handleGesture(_, 'blue')}>
        <Label>
          {score.blue}
        </Label>
      </Box>

    </Container>
  )
}