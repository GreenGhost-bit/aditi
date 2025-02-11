import { StyleSheet, View, ScrollView, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Ionicons } from "@expo/vector-icons"

import { GradientHeader } from "@/components/ui/GradientHeader"
import { Card } from "@/components/ui/Card"

const METRICS = [
  { title: "Active Contracts", value: "24", icon: "document-text" },
  { title: "Total Vendors", value: "156", icon: "people" },
  { title: "Pending Bids", value: "12", icon: "timer" },
  { title: "This Month Spend", value: "$45.2K", icon: "wallet" },
]

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <GradientHeader title="Dashboard" subtitle="Welcome back, John" />

      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        <View style={styles.metricsGrid}>
          {METRICS.map((metric, index) => (
            <Card key={index} style={styles.metricCard}>
              <View style={styles.metricIcon}>
                <LinearGradient
                  colors={["#2563eb", "#3b82f6"]}
                  style={styles.iconGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Ionicons name={metric.icon} size={24} color="#fff" />
                </LinearGradient>
              </View>
              <Text style={styles.metricValue}>{metric.value}</Text>
              <Text style={styles.metricTitle}>{metric.title}</Text>
            </Card>
          ))}
        </View>

        <Card style={styles.activityCard}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          {[1, 2, 3].map((_, index) => (
            <View key={index} style={styles.activityItem}>
              <View style={styles.activityDot} />
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>New Contract Signed</Text>
                <Text style={styles.activityTime}>2 hours ago</Text>
              </View>
            </View>
          ))}
        </Card>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    gap: 16,
  },
  metricsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  metricCard: {
    flex: 1,
    minWidth: "45%",
    alignItems: "flex-start",
    gap: 12,
  },
  metricIcon: {
    borderRadius: 12,
    overflow: "hidden",
  },
  iconGradient: {
    padding: 12,
    borderRadius: 12,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0f172a",
  },
  metricTitle: {
    fontSize: 14,
    color: "#64748b",
  },
  activityCard: {
    gap: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0f172a",
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  activityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#2563eb",
  },
  activityContent: {
    flex: 1,
    gap: 4,
  },
  activityTitle: {
    fontSize: 16,
    color: "#0f172a",
  },
  activityTime: {
    fontSize: 14,
    color: "#64748b",
  },
})

