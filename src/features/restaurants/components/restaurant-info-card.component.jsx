import { StyleSheet, Text } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
export default function RestaurantInfoCard({...restaurant}) {
const {
    name = "Some Restaurant",
    icon,
    photos = [
        "https://komakhaal.com/wp-content/uploads/2018/05/183551-OWW4VX-6499-300x300.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
} = restaurant
return (
    <Card elevation={5} style={styles.card}>
        <Card.Cover key={name} style={styles.cover} source={{ uri:
            photos[0] }} />
            <Text style={styles.title}>{name}</Text>
    </Card>
);
}
const styles = StyleSheet.create({
    card: { backgroundColor: "white" },
    cover: { padding: 20, backgroundColor: "white" },
    title: { padding: 16 },
}
);
