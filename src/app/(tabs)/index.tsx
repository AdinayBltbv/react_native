import ProfileCard from "@/src/components/profileCard";
import { ScrollView, View } from "react-native";

export default function HomeScreen() {
  const data = [
    {
      id: "1",
      name: "Adinai",
      role: "Travel Blogger",
      desc: "Exploring Korea 🇰🇷",
      img: "https://i.pinimg.com/736x/e6/70/fd/e670fdf936dab5ff8069beca9eee65a3.jpg",
    },
    {
      id: "2",
      name: "Albina",
      role: "Content Creator",
      desc: "Filming my daily life 🎥",
      img: "https://i.pinimg.com/736x/7f/e9/51/7fe951e4ec3e4ee2c1ce2342fc9a8b4f.jpg",
    },
    {
      id: "3",
      name: "Alexander",
      role: "SMM Manager",
      desc: "Working & traveling ✈️",
      img: "https://i.pinimg.com/736x/9b/fd/3a/9bfd3a198e682e08e6be2c01035b77c2.jpg",
    },
    {
      id: "4",
      name: "Baiaman",
      role: "Dreamer",
      desc: "Traveling and living my best Life✈️",
      img: "https://i.pinimg.com/736x/fd/38/2a/fd382ac7eb4b78ce14e8fb7a9bc1d3c8.jpg",
    },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#000000" }}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: 10,
          gap: 12,
        }}
      >
        {data.map((item) => (
          <View key={item.id} style={{ width: "32%" }}>
            <ProfileCard
              name={item.name}
              role={item.role}
              desc={item.desc}
              img={item.img}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
