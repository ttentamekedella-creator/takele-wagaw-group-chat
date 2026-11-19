import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);

  const sendMessage = () => {
    if (message.trim() === '') return;
    setMessages([...messages, { id: Date.now().toString(), text: message }]);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Takele Wagaw Group Chat</Text>
      <Text style={styles.subtitle}>Welcome • እንኳን ደህና መጡ</Text>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.message}>
            <Text>{item.text}</Text>
          </View>
        )}
      />

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Write a message..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.button} onPress={sendMessage}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#eef4ff', padding: 15, paddingTop: 50 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#0756b5', textAlign: 'center' },
  subtitle: { textAlign: 'center', margin: 10, color: '#555' },
  message: { backgroundColor: 'white', padding: 12, marginVertical: 5, borderRadius: 10 },
  inputRow: { flexDirection: 'row', marginBottom: 10 },
  input: { flex: 1, backgroundColor: 'white', padding: 12, borderRadius: 10 },
  button: { backgroundColor: '#0756b5', padding: 12, marginLeft: 5, borderRadius: 10 },
  buttonText: { color: 'white', fontWeight: 'bold' }
});