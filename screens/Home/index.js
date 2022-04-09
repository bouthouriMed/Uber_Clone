import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import React from 'react'


const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home page</Text>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });