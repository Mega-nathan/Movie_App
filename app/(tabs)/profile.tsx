import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function Saved() {
  return (
    <ScrollView className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <View className="flex-1 px-5">
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        {/* <SearchBar onPress={() => {}} placeholder="Search for a Movie" /> */}
        <Text className="text-lg text-white font-bold mt-5 mb-3">Profile</Text>
      </View>
    </ScrollView>
  );
}
