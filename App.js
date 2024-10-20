import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ColorSelector = ({ colors, onSelect }) => {
  return (
    <View style={styles.selectorContainer}>
      {colors.map((color, index) => (
        <TouchableOpacity 
          key={index} 
          onPress={() => onSelect(color.value)} 
          style={[styles.button, { backgroundColor: color.value }]}
        >
          <Text style={styles.buttonText}>{color.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const ColorBox = ({ colorName, colorValue }) => {
  return (
    <View style={[styles.colorBox, { backgroundColor: colorValue }]}>
      <Text style={styles.colorText}>Kiválasztott szín: {colorName}</Text>
    </View>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState({ name: 'fehér', value: 'white' });

  const colors = [
    { name: 'piros', value: 'red' },
    { name: 'zöld', value: 'green' },
    { name: 'kék', value: 'blue' },
    { name: 'sárga', value: 'yellow' },
    { name: 'rózsaszín', value: 'pink' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Színválasztó</Text>
      <ColorSelector 
        colors={colors} 
        onSelect={(colorValue) => {
          const selected = colors.find(color => color.value === colorValue);
          setSelectedColor(selected);
        }} 
      />
      <ColorBox colorName={selectedColor.name} colorValue={selectedColor.value} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  selectorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    minWidth: 80,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
  },
  colorBox: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  colorText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default App;
