import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../constants/theme";

const { width } = Dimensions.get("window");

type MenuItem = {
  label: string;
  icon: string;
  id: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: Props) {
  const anim = useRef(new Animated.Value(width)).current;

  const menuItems: MenuItem[] = [
    { label: "Início", icon: "home", id: "home" },
    { label: "Sobre", icon: "information", id: "about" },
    { label: "Formação", icon: "school", id: "resume" },
    { label: "Tecnologias", icon: "tools", id: "tech" },
    { label: "Projetos", icon: "briefcase", id: "projects" },
    { label: "Contato", icon: "email", id: "contact" },
  ];

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
        <SafeAreaView edges={["top", "right", "bottom"]} style={{ flex: 1 }}>
          <View style={styles.header}>
            <View>
              <Text style={styles.headerTitle}>Noemi Soares</Text>
              <Text style={styles.headerSubtitle}>Dev & Designer</Text>
            </View>
            <TouchableOpacity
              onPress={onClose}
              style={styles.closeBtn}
              activeOpacity={0.7}
            >
              <MaterialCommunityIcons
                name="close"
                size={28}
                color={theme.colors.text}
              />
            </TouchableOpacity>
          </View>

          <ScrollView
            style={styles.menu}
            showsVerticalScrollIndicator={false}
            bounces={false}
          >
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={onClose}
                style={styles.item}
                activeOpacity={0.7}
              >
                <MaterialCommunityIcons
                  name={item.icon as any}
                  size={24}
                  color={theme.colors.primary}
                  style={styles.itemIcon}
                />
                <Text style={styles.itemText}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.footer}>
            <View style={styles.divider} />
            <Text style={styles.footerText}>
              © {new Date().getFullYear()} Noemi Soares
            </Text>
          </View>
        </SafeAreaView>
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  sidebar: {
    position: "absolute",
    right: 0,
    top: 0,
    width: SIDEBAR_WIDTH,
    height: "100%",
    backgroundColor: theme.colors.background,
    shadowColor: "#000",
    shadowOffset: { width: -3, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primary + "15",
  },
  headerTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 18,
    color: theme.colors.text,
  },
  headerSubtitle: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.primary,
    marginTop: 2,
  },
  closeBtn: {
    padding: theme.spacing.sm,
  },
  menu: {
    flex: 1,
    paddingVertical: theme.spacing.md,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    marginHorizontal: theme.spacing.sm,
    marginVertical: 4,
    borderRadius: theme.radius.md,
  },
  itemIcon: {
    marginRight: theme.spacing.md,
  },
  itemText: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.text,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.primary + "15",
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.primary + "15",
    marginBottom: theme.spacing.sm,
  },
  footerText: {
    fontFamily: theme.fonts.regular,
    fontSize: 11,
    color: "#888",
    textAlign: "center",
  },
});
