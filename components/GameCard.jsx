import { Animated, Image, StyleSheet, Text, View } from "react-native";
import { useRef, useEffect } from "react";
import Score from "./Score";

function GameCard({ game }) {
  return (
    <View
      className="flex-row bg-slate-500/10 p-4 rounded-xl gap-4 mb-10"
      key={game.slug}
    >
      <Image source={{ uri: game.image }} style={styles.image} />
      <View>
        <Text className="font-bold text-white" styles={styles.title}>
          {game.title}
        </Text>
        <Score score={game.score} maxScore={100} />

        <Text
          className="font-extralight text-white"
          styles={styles.description}
        >
          {game.description}
        </Text>
      </View>
    </View>
  );
}

export default function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
});
