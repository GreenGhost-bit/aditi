import { StyleSheet, View, ScrollView, Text, Image, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"

import { GradientHeader } from "@/components/ui/GradientHeader"
import { Card } from "@/components/ui/Card"

const VENDORS = [
  {
    id: 1,
    name: "TechSupply Co.",
    rating: 4.8,
    category: "Electronics",
    verified: true,
    image: "https://picsum.photos/200",
  },
  {
    id: 2,
    name: "Global Logistics",
    rating: 4.5,
    category: "Transportation",
    verified: true,
    image: "https://picsum.photos/201",
  },
  {
    id: 3,
    name: "EcoMaterials",
    rating: 4.2,
    category: "Raw Materials",
    verified: false,
    image: "https://picsum.photos/202",
  },
]

export default function VendorsScreen() {
  return (
    <View style={styles.container}>
      <GradientHeader title="Vendors" subtitle="Manage your supplier network" />

      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        <View style={styles.searchContainer}>
          <Card style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#64748b" />
            <Text style={styles.searchPlaceholder}>Search vendors...</Text>
          </Card>
          <Pressable style={styles.filterButton}>
            <Ionicons name="filter" size={20} color="#2563eb" />
          </Pressable>
        </View>

        <View style={styles.vendorsList}>
          {VENDORS.map((vendor) => (
            <Card key={vendor.id} style={styles.vendorCard}>
              <Image source={{ uri: vendor.image }} style={styles.vendorImage} />
              <View style={styles.vendorInfo}>
                <View style={styles.vendorHeader}>
                  <Text style={styles.vendorName}>{vendor.name}</Text>
                  {vendor.verified && <Ionicons name="checkmark-circle" size={16} color="#2563eb" />}
                </View>
                <Text style={styles.vendorCategory}>{vendor.category}</Text>
                <View style={styles.vendorRating}>
                  <Ionicons name="star" size={16} color="#eab308" />
                  <Text style={styles.ratingText}>{vendor.rating}</Text>
                </View>
              </View>
              <Pressable style={styles.moreButton}>
                <Ionicons name="ellipsis-vertical" size={20} color="#64748b" />
              </Pressable>
            </Card>
          ))}
        </View>
      </ScrollView>

      <Pressable style={styles.fab}>
        <Ionicons name="add" size={24} color="#ffffff" />
      </Pressable>
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
  searchContainer: {
    flexDirection: "row",
    gap: 12,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 12,
  },
  searchPlaceholder: {
    color: "#94a3b8",
    fontSize: 16,
  },
  filterButton: {
    width: 48,
    height: 48,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2,
  },
  vendorsList: {
    gap: 12,
  },
  vendorCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  vendorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  vendorInfo: {
    flex: 1,
    gap: 4,
  },
  vendorHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  vendorName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0f172a",
  },
  vendorCategory: {
    fontSize: 14,
    color: "#64748b",
  },
  vendorRating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 14,
    color: "#64748b",
  },
  moreButton: {
    padding: 8,
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#2563eb",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#2563eb",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
})

