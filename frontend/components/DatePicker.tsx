import React, { useEffect, useState } from "react";
import DatePicker from "react-native-date-picker";
import Drawer from "./Drawer";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "@/utils/Colors";
import Button from "./Button";
import { FontFamily } from "@/utils/FontFamily";

type Props = {
  value: Date;
  setValue: (date: Date) => void;
};

const Picker = (props: Props) => {
  const [date, setDate] = useState(new Date());
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    setDate(props.value || new Date());
  }, [props.value]);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const handleOk = () => {
    props.setValue(date); 
    toggleDrawer(); 
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };
  
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={toggleDrawer}>
        <Text style={styles.buttonText}>
        {props.value ? formatDate(props.value) : "Select Date"}
        </Text>
      </TouchableOpacity>
      <Drawer visible={drawerVisible} onClose={toggleDrawer}>
        <View>
          <View style={styles.twoByOne}>
            <TouchableOpacity onPress={toggleDrawer} >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOk}>
              <Text style={styles.cancelButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
          <DatePicker
            date={date}
            onDateChange={setDate}
            mode="date"
            maximumDate={new Date()}
          />
        </View>
      </Drawer>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: Colors.secondary,
    width: "100%",
    height: 64,
    backgroundColor: Colors.white,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    marginVertical: 25,
  },
  buttonText: {
    fontSize: 20,
  },
  twoByOne: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-evenly",
  },
  cancelButtonText: {
    fontSize: 20,
    color: Colors.darkGreen,
    fontFamily: FontFamily.medium
  }
});

export default Picker;
