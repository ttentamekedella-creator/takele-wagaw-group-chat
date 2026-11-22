# takele-wagaw-group-chat
takele wagaw group chat ppublic group chat application everyone 
Welcome to Takele Wagaw Group Chatimport React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function App() {
  const [messages, setMessages] = useState([
    {
      id: "1",
      name: "Takele Wagaw",
      message: "እንኳን ወደ Takele Wagaw Group Chat በደህና መጡ!",
      time: "Welcome",
      mine: false,
    },
  ]);
  const [draft, setDraft] = useState("");
  const [userName, setUserName] = useState("Guest");

  const sendMessage = () => {
    const cleanMessage = draft.trim();
    if (!cleanMessage) return;

    const now = new Date();
    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages((oldMessages) => [
      ...oldMessages,
      {
        id: `${Date.now()}`,
        name: userName.trim() || "Guest",
        message: cleanMessage,
        time,
        mine: true,
      },
    ]);
    setDraft("");
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageBubble,
        item.mine ? styles.myMessage : styles.otherMessage,
      ]}
    >
      <Text style={styles.sender}>{item.name}</Text>
      <Text style={styles.messageText}>{item.message}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#0757A6" />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Takele Wagaw Group Chat</Text>
          <Text style={styles.headerSubtitle}>ለሁሉም ክፍት የውይይት ቡድን</Text>
        </View>

        <View style={styles.profileBar}>
          <Text style={styles.profileLabel}>Your name / ስም:</Text>
          <TextInput
            value={userName}
            onChangeText={setUserName}
            placeholder="Enter your name"
            placeholderTextColor="#7A8794"
            style={styles.nameInput}
            maxLength={30}
          />
        </View>

        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          contentContainerStyle={styles.messagesList}
          keyboardShouldPersistTaps="handled"
        />

        <View style={styles.composer}>
          <TextInput
            value={draft}
            onChangeText={setDraft}
            placeholder="Write a message... / መልዕክት ይጻፉ..."
            placeholderTextColor="#7A8794"
            style={styles.messageInput}
            multiline
            maxLength={1000}
          />
          <TouchableOpacity
            onPress={sendMessage}
            style={styles.sendButton}
            accessibilityRole="button"
            accessibilityLabel="Send message"
          >
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.notice}>
          Demo version: messages are stored only on this screen. Online group
          messaging needs a server and user accounts.
        </Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F1F5F9" },
  container: { flex: 1 },
  header: {
    backgroundColor: "#0757A6",
    paddingTop: 18,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  headerSubtitle: {
    color: "#E5F1FF",
    fontSize: 14,
    marginTop: 6,
    textAlign: "center",
  },
  profileBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#DCE4ED",
  },
  profileLabel: { color: "#233548", fontSize: 13, marginRight: 8 },
  nameInput: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 7,
    color: "#172B3A",
  },
  messagesList: { padding: 12, paddingBottom: 20 },
  messageBubble: {
    maxWidth: "86%",
    padding: 11,
    borderRadius: 13,
    marginBottom: 10,
  },
  myMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#D7EAFE",
    borderBottomRightRadius: 3,
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 3,
  },
  sender: {
    color: "#0757A6",
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
  },
  messageText: { color: "#172B3A", fontSize: 16, lineHeight: 23 },
  time: { color: "#6B7C8F", fontSize: 10, textAlign: "right", marginTop: 5 },
  composer: {
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#DCE4ED",
  },
  messageInput: {
    flex: 1,
    minHeight: 44,
    maxHeight: 110,
    backgroundColor: "#F1F5F9",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingTop: 11,
    paddingBottom: 10,
    color: "#172B3A",
    fontSize: 15,
  },
  sendButton: {
    backgroundColor: "#0757A6",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 13,
    marginLeft: 8,
  },
  sendButtonText: { color: "#FFFFFF", fontWeight: "bold" },
  notice: {
    backgroundColor: "#FFF7E6",
    color: "#775A1B",
    fontSize: 10,
    textAlign: "center",
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
});