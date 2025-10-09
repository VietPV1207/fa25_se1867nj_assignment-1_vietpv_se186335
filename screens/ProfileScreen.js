import React, { useState, useContext } from "react";
import { View, Button, StyleSheet } from "react-native";
import ProfileCard from "../components/ProfileCard";
import { ThemeContext } from "../context/ThemeContext"; // ✅ import Context

const ProfileScreen = ({ navigation }) => {
  const { theme, themeStyles } = useContext(ThemeContext); // ✅ lấy theme hiện tại

  const [profile, setProfile] = useState({
    name: "Viet",
    bio: "React Native Developer | Code & Coffee",
    avatar: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
  });

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: themeStyles[theme].backgroundColor }, // ✅ đổi màu nền
      ]}
    >
      <ProfileCard profile={profile} />
      <View style={styles.buttonWrapper}>
        <Button
          title="Edit Profile"
          onPress={() =>
            navigation.navigate("EditProfile", { profile, setProfile })
          }
          color={theme === "dark" ? "#999" : "#007bff"} // ✅ đổi màu nút
        />
        <View style={{ height: 10 }} />
        <Button
          title="Settings"
          onPress={() => navigation.navigate("Settings")}
          color={theme === "dark" ? "#aaa" : "#007bff"}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  buttonWrapper: {
    marginTop: 20,
    width: "80%",
  },
});
