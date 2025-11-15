import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Overall container for the Home screen
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingTop: 50,
  },

  /** 🔍 Search Section **/
  searchGroup: {
    paddingHorizontal: 16,
    marginBottom: 10,
  },

  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  searchControlGroup: {
    flex: 1,
  },

  searchFormText: {
    fontSize: 14,
    color: "#333",
  },

  searchControl: {
    marginTop: 4,
    fontSize: 14,
    color: "#555",
  },

  searchButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#00b894",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },

  /** 🏷 Filter Section **/
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 16,
  },

  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },

  filterImage: {
    width: 40,
    height: 40,
    marginBottom: 4,
  },

  filterText: {
    fontSize: 12,
    color: "#333",
  },

  /** 🏡 Listing Section **/
  listingContainer: {
    paddingHorizontal: 16,
    marginTop: 10,
  },

  paginationContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },

  showMoreButton: {
    backgroundColor: "#00b894",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },

  showMoreButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
