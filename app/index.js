import React, { useState } from "react";
import InputForm from '../components/InputForm';
import IDCard from '../components/IDCard';
import { StyleSheet, View } from "react-native";

export default function Index() {
  const [studentDetails, setStudentDetails] = useState(null);

  return (
    <View style={styles.container}>
      {!studentDetails ? (
        <InputForm setStudentDetails={setStudentDetails} />
      ) : (
        <IDCard studentDetails={studentDetails} setStudentDetails={setStudentDetails} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
});
