import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { setStorageItem, clearAll } from './storage';

const STORAGE_KEY = 'user_input';

const App = () => {
  const [input, setInput] = useState('');
  const [storedValue, setStoredValue] = useState<string | null>(null);

  const handleSave = () => {
    if (input.trim()) {
      setStorageItem(STORAGE_KEY, input);
      setStoredValue(input);
      setInput('');
    }
  };

  const handleClear = () => {
    clearAll();
    setStoredValue(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native MMKV Storage</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter something..."
        value={input}
        onChangeText={setInput}
      />

      <Button title="Save to Storage" onPress={handleSave} />

      <Text style={styles.storedText}>
        Stored Value: {storedValue ?? 'No data'}
      </Text>

      <Button title="Clear Storage" onPress={handleClear} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  input: {
    width: '100%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  storedText: { marginTop: 20, fontSize: 16, fontWeight: 'bold' },
});

export default App;
