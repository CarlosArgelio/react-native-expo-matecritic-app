import { useState, useEffect } from "react";
import { Link } from "expo-router";
import { FlatList, View, ActivityIndicator } from "react-native";
import { getLatestGames } from "./../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AnimatedGameCard from "./GameCard";

export default function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => setGames(games));
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Link href="/about" className="text-blue-400 text-xl">
        about
      </Link>
      {games.length === 0 ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </View>
  );
}
