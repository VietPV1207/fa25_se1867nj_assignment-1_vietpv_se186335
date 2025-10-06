// screens/EditProfileScreen.js
import React from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  bio: Yup.string().max(100, 'Bio must be under 100 characters'),
});

const EditProfileScreen = ({ route, navigation }) => {
  const { profile, setProfile } = route.params;

  return (
    <View style={styles.container}>
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
              style={styles.input}
              value={values.name}
              onChangeText={handleChange('name')}
              placeholder="Enter your name"
            />
            {errors.name && <Text style={styles.error}>{errors.name}</Text>}

            <TextInput
              style={styles.input}
              value={values.bio}
              onChangeText={handleChange('bio')}
              placeholder="Enter your bio"
            />
            {errors.bio && <Text style={styles.error}>{errors.bio}</Text>}

            <Button title="Save Changes" onPress={handleSubmit} />
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
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
  },
  error: {
    color: 'red',
  },
});
