import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://i.pinimg.com/736x/1d/97/04/1d9704ffb40d13264ab31f910e96a3c1.jpg",
        }}
        style={styles.banner}
      />

      <View style={styles.card}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.nameTop}>Adinai 👋</Text>

        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={styles.avatar}
        />

        <Text style={styles.name}>Adinai</Text>
        <Text style={styles.job}>Mobile Developer</Text>

        <Text style={styles.about}>
          Passionate about building beautiful mobile experiences with React
          Native and Expo.
        </Text>

        <Text style={styles.hello}>Hello World Text!!</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LEARN MORE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  banner: {
    height: 160,
    backgroundColor: "#6EC1E4",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 14,
    padding: 20,
    alignItems: "center",
    marginTop: -60,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },

  welcome: {
    fontSize: 26,
    fontWeight: "600",
  },

  nameTop: {
    fontSize: 16,
    marginBottom: 8,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginVertical: 10,
  },

  name: {
    fontSize: 20,
    fontWeight: "600",
  },

  job: {
    color: "gray",
    marginBottom: 10,
  },

  about: {
    textAlign: "center",
    color: "#555",
    marginVertical: 10,
    paddingHorizontal: 10,
  },

  hello: {
    fontSize: 16,
    marginVertical: 12,
  },

  button: {
    backgroundColor: "#111",
    width: "100%",
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
