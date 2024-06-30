/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { Pressable, Text, View} from 'react-native';
import { globalStyles } from '../../theme/theme';



interface Props {
    onPress: ()=> void;
    label: string;
    
}

export const PrimaryButton = ({onPress, label}: Props) => {
  return (
    // eslint-disable-next-line prettier/prettier
    <Pressable 
        onPress={onPress}
        style={globalStyles.primaryBtn}>
        <View>

          <Text style={globalStyles.textBtn}>{label}</Text>
        </View>
     
  </Pressable>
  );
};
