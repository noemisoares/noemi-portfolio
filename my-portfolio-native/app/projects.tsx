import React, { useEffect, useRef } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { theme } from "../constants/theme";
import { Projects } from "../components/Projects";
import { useLocalSearchParams } from "expo-router";

export default function Project() {
  const scrollViewRef = useRef<ScrollView>(null);
  const params = useLocalSearchParams();

  useEffect(() => {
    if (params.sectionToScroll) {
      const sectionId = params.sectionToScroll as string;
      console.log("Rolando para:", sectionId);

      const positions: any = {
        home: 0,
        contact: 2400,
      };

      const position = positions[sectionId] || 0;

      setTimeout(() => {
        scrollViewRef.current?.scrollTo({ y: position, animated: true });
      }, 100);
    }
  }, [params.sectionToScroll]);

  return (
    <ScrollView
      ref={scrollViewRef}
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >

      <View style={styles.section}>
        <Projects />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.md,
  },
  section: {
    marginTop: 4,
  },
});
