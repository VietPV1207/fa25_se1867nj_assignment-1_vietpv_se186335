// screens/EditProfileScreen.js
import React, { useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ThemeContext } from '../context/ThemeContext'; // ✅ import Context

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  bio: Yup.string().max(100, 'Bio must be under 100 characters'),
});

const EditProfileScreen = ({ route, navigation }) => {
  const { theme, themeStyles } = useContext(ThemeContext); // ✅ lấy theme hiện tại
  const { profile, setProfile } = route.params;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: themeStyles[theme].backgroundColor },
      ]}
    >
      <Formik
        initialValues={profile}
        validationSchema={schema}
        onSubmit={values => {
          setProfile(values);
          navigation.goBack();
        }}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <TextInput
              style={[
                styles.input,
                {
                  color: themeStyles[theme].color,
                  borderColor: theme === 'dark' ? '#888' : '#ccc',
                },
              ]}
              value={values.name}
              onChangeText={handleChange('name')}
              placeholder="Enter your name"
              placeholderTextColor={theme === 'dark' ? '#aaa' : '#666'}
            />
            {errors.name && (
              <Text style={[styles.error, { color: 'red' }]}>{errors.name}</Text>
            )}

            <TextInput
              style={[
                styles.input,
                {
                  color: themeStyles[theme].color,
                  borderColor: theme === 'dark' ? '#888' : '#ccc',
                },
              ]}
              value={values.bio}
              onChangeText={handleChange('bio')}
              placeholder="Enter your bio"
              placeholderTextColor={theme === 'dark' ? '#aaa' : '#666'}
            />
            {errors.bio && (
              <Text style={[styles.error, { color: 'red' }]}>{errors.bio}</Text>
            )}

            <Button
              title="Save Changes"
              onPress={handleSubmit}
              color={theme === 'dark' ? '#888' : '#007bff'}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
  },
  error: {
    marginBottom: 5,
  },
});
