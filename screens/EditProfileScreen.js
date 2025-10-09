import React, { useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ThemeContext } from '../context/ThemeContext';

// 🧩 Schema kiểm tra chặt chẽ hơn
const schema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .matches(/^[A-Za-zÀ-ỹ\s]+$/, 'Name can only contain letters and spaces')
    .test('no-multiple-spaces', 'Too many spaces', value =>
      value ? !value.match(/\s{2,}/) : true
    ),
  bio: Yup.string()
    .trim()
    .required('Bio cannot be empty')
    .min(10, 'Bio must be at least 10 characters')
    .max(120, 'Bio must be under 120 characters'),
});

const EditProfileScreen = ({ route, navigation }) => {
  const { theme, themeStyles } = useContext(ThemeContext);
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
        validateOnChange={true} // ✅ kiểm tra realtime khi nhập
        validateOnBlur={true}
        onSubmit={values => {
          setProfile({
            ...values,
            name: values.name.trim(),
            bio: values.bio.trim(),
          });
          navigation.goBack();
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              style={[
                styles.input,
                {
                  color: themeStyles[theme].color,
                  borderColor:
                    errors.name && touched.name
                      ? 'red'
                      : theme === 'dark'
                      ? '#888'
                      : '#ccc',
                },
              ]}
              value={values.name}
              onChangeText={handleChange('name')}
              placeholder="Enter your name"
              placeholderTextColor={theme === 'dark' ? '#aaa' : '#666'}
            />
            {errors.name && touched.name && (
              <Text style={styles.error}>{errors.name}</Text>
            )}

            <TextInput
              style={[
                styles.input,
                {
                  color: themeStyles[theme].color,
                  borderColor:
                    errors.bio && touched.bio
                      ? 'red'
                      : theme === 'dark'
                      ? '#888'
                      : '#ccc',
                },
              ]}
              value={values.bio}
              onChangeText={handleChange('bio')}
              placeholder="Enter your bio"
              placeholderTextColor={theme === 'dark' ? '#aaa' : '#666'}
              multiline
            />
            {errors.bio && touched.bio && (
              <Text style={styles.error}>{errors.bio}</Text>
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
    color: 'red',
    fontSize: 14,
    marginBottom: 4,
  },
});
