// screens/ProfileScreen.js
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import ProfileCard from '../components/ProfileCard';

const ProfileScreen = ({ navigation }) => {
  const [profile, setProfile] = useState({
    name: 'Đại ca Quang',
    bio: 'React Native Developer | ☕ Code & Coffee',
    avatar: 'https://cdn-icons-png.flaticon.com/512/847/847969.png',
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ProfileCard profile={profile} />
      <Button title="Edit Profile" onPress={() => navigation.navigate('EditProfile', { profile, setProfile })} />
    </View>
  );
};

export default ProfileScreen;
