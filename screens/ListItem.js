import React, {useState} from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

export default function ListItem(props) {
    const { name } = props;
    const [pressed, setPressed] = useState(false);

    const onPress = () => {
        setPressed(prevPressed => !prevPressed);
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ backgroundColor : pressed ? 'red' : 'blue' }}>
                <Text style={styles.item}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 7,
    fontSize: 14,
  }
});