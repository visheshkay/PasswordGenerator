import React, { useState } from 'react'
import { StyleSheet, Text, View,ScrollView, SafeAreaView, TouchableOpacity, TextInput} from 'react-native'
import * as Yup from 'yup'
import {Formik} from 'formik'
import BouncyCheckBox from 'react-native-bouncy-checkbox'


const PasswordSchema = Yup.object().shape({
   passwordLength : Yup.number()
   .min(4,'The minimum length of password is 4')
   .max(30,'The maximum length of password is 16')
   .required('This is a required field')
})

export default function App() {


  let [password,setPassword] = useState('')
  let [isGenerated,setIsGenerated] = useState(false)
  let [lowercase,setLowercase] = useState(false)
  let [uppercase,setUppercase] = useState(false)
  let [number,setNumber] = useState(false)
  let [symbol,setSymbol] = useState(false)
  const generatePassword = (passLen: number)=>{
    let charList = '';
    let upc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lpc = 'abcdefghijklmnopqrstuvwxyz';
    let nums = '0123456789';
    let sym = '$@#!^%()_=><?/'
    if(uppercase){
      charList+=upc
    }
    if(lowercase){
      charList+=lpc;
    }
    if(number){
      charList+=nums
    }
    if(symbol){
      charList += sym
    }
    let res = createPassword(charList,passLen);
    setIsGenerated(true)
    console.log(res);
    setPassword(res)
    return res;
  }
  const createPassword = (characters :string, length:number)=>{
        let res = ''
        for(let i=0;i<length;i++){
          let ind =Math.round(Math.random()*characters.length);
          res+=characters.charAt(ind)
        }
        return res;
  }
  const resetPassword = ()=>{
    setPassword('')
    setIsGenerated(false)
    setUppercase(false)
    setLowercase(false)
    setNumber(false)
    setSymbol(false)
  }
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style = {styles.appContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Password Generator</Text>
            <Formik
       initialValues={{ passwordLength: '' }}
       validationSchema={PasswordSchema}
       onSubmit={values=>{
         console.log(values)
         generatePassword(Number(values.passwordLength))//change text length here
       }}
     >
       {({
         values,
         errors,
         touched,
         isValid,
         handleChange,
         handleSubmit,
         isSubmitting,
         handleReset,
         /* and other goodies */
       }) => (
         <>
          <View style={styles.inputWrapper}>
                <View style={styles.inputColumn}>
                  {touched.passwordLength && errors.passwordLength && (
                    <Text>{errors.passwordLength}</Text>
                  )}
                  <Text style = {styles.heading}>Password Length</Text>
                    <TextInput style={styles.inputStyle} value = {values.passwordLength}  onChangeText={handleChange('passwordLength')} placeholder='Enter Password Length' keyboardType='numeric'/>
                </View>
          </View>
          <View style={styles.inputWrapper}>
            <View style = {styles.inputBGroup}>
              <Text style = {styles.heading}>Include Lowercase</Text>
              <BouncyCheckBox
                isChecked={lowercase}
                onPress={()=>setLowercase(!lowercase)}
                fillColor="orange"

              />
              </View>
          </View>
          <View style={styles.inputWrapper}>
          <View style = {styles.inputBGroup}>
              <Text style = {styles.heading}>Include Uppercase</Text>
              <BouncyCheckBox
                isChecked={uppercase}
                onPress={()=>setUppercase(!uppercase)}
                fillColor="orange"

              />
              </View>
          </View>
          <View style={styles.inputWrapper}>
          <View style = {styles.inputBGroup}>
              <Text style = {styles.heading}>Include Numbers</Text>
              <BouncyCheckBox
                isChecked={number}
                onPress={()=>setNumber(!number)}
                fillColor="orange"

              />
              </View>
          </View>
          <View style={styles.inputWrapper}>
          <View style = {styles.inputBGroup}>
              <Text style = {styles.heading}>Include Symbols</Text>
              <BouncyCheckBox
                isChecked={symbol}
                onPress={()=>setSymbol(!symbol)}
                fillColor="orange"

              />
              </View>
          </View>
          <View style = {styles.formActions}>
              <TouchableOpacity
              disabled={!isValid}
              style={styles.primaryBtn}
              onPress={()=>handleSubmit()}
              ><Text>Generate Password</Text></TouchableOpacity>
              <TouchableOpacity
              style={styles.primaryBtn}
              onPress={()=>{
                handleReset()
                resetPassword()
              }}
              ><Text>Reset</Text></TouchableOpacity>
          </View>
         </>
       )}
     </Formik>
          </View>
          {isGenerated ? (
            <View style={styles.generatedContent}><Text selectable={true} style={styles.passText}>{password}</Text></View>
          ):null}
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  appContainer:{},
  formContainer:{},
  inputBGroup:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    margin:7
  },
  title:{
    flex:1,
    fontSize:24,
    fontWeight:'bold',
    margin:3,
    textAlign:'center'
    
  },
  inputWrapper:{
    flex:1,
    margin:5,
    marginTop:10,
    padding:2,
    justifyContent:'center'
  },
  formActions:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    margin:7
  },
  inputColumn:{
    marginTop:10,
  },
  inputStyle:{
    width:'80%',
    margin:'auto',
    justifyContent:'center',
    elevation:10,
    borderColor:'black',
    borderWidth:1,
    height:25
  },
  heading:{
    fontSize:17,
    paddingBottom:4
  },
  primaryBtn:{
    padding:6,
    margin:2,
    backgroundColor:'orange',
    width:'40%',
    borderRadius:5,
    flexDirection:'row',
    justifyContent:'center'
  },
  generatedContent:{
    width:'60%',
    margin:'auto',
    marginTop:25,
    padding:5,
    backgroundColor:'silver',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    elevation:5
  },
  passText:{}
})
