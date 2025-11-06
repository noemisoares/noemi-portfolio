import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  Pressable,
  StyleSheet,
} from "react-native";
import { theme } from "../constants/theme";

const { width } = Dimensions.get("window");

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: Props) {
  const anim = useRef(new Animated.Value(width)).current;

  useEffect(() => {
    if (isOpen) {
      Animated.timing(anim, {
        toValue: 0,
        duration: 280,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(anim, {
        toValue: width,
        duration: 240,
        useNativeDriver: true,
      }).start();
    }
  }, [isOpen, anim]);

  if (!isOpen) return null;

  return (
    <View style={styles.overlayContainer} pointerEvents="box-none">
      <Pressable style={styles.backdrop} onPress={onClose} />

      <Animated.View
        style={[styles.sidebar, { transform: [{ translateX: anim }] }]}
      >
        <TouchableOpacity
          onPress={onClose}
          style={styles.closeBtn}
          accessibilityLabel="Fechar menu"
        >
          <Text style={styles.closeText}>×</Text>
        </TouchableOpacity>

        <View style={styles.menu}>
          <TouchableOpacity onPress={onClose} style={styles.item}>
            <Text style={styles.itemText}>Início</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={styles.item}>
            <Text style={styles.itemText}>Sobre</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={styles.item}>
            <Text style={styles.itemText}>Projetos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={styles.item}>
            <Text style={styles.itemText}>Contatos</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}

const SIDEBAR_WIDTH = Math.min(width * 0.78, 340);

const styles = StyleSheet.create({
  overlayContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1000,
  },
  backdrop: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#0a1c75ff",
  },
  sidebar: {
    position: "absolute",
    right: 0,
    top: 0,
    width: SIDEBAR_WIDTH,
    height: "100%",
    backgroundColor: theme.dark.background,
    padding: 20,
    shadowColor: "#0a1c75ff",
    shadowOffset: { width: -3, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 12,
  },
  closeBtn: {
    alignSelf: "flex-end",
  },
  closeText: {
    fontSize: 32,
    color: theme.dark.text,
  },
  menu: {
    marginTop: 12,
  },
  item: {
    paddingVertical: 12,
  },
  itemText: {
    color: theme.dark.text,
    fontSize: 18,
  },
});
