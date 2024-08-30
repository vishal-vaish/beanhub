import Colors from "@/utils/Colors";
import React from "react";
import { View, Modal, TouchableWithoutFeedback, StyleSheet  } from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer = (props:Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onClose}
    >
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={props.onClose}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
        <View style={styles.drawer}>
          {props.children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.black,
    opacity: 0.5,

  },
  drawer: {
    backgroundColor: "#fff",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1,
    alignItems: "center", // Center horizontally
    justifyContent: "center",
    paddingVertical: 30
  },
});

export default Drawer;
