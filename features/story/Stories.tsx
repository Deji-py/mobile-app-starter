import Avatar from "@/components/ui/avatar/avatar";
import HStack from "@/components/ui/layout/HStack";
import spacing from "@/styles/spacing";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const Stories = () => {
  return (
    <View style={{ width: "100%", marginTop: spacing.sm }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: spacing.lg }}
        horizontal
      >
        <HStack spacing={10} style={{ width: "100%" }}>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar alt="User" withRing size="lg" />
            <Text>You</Text>
          </View>

          {Array.from({ length: 10 }).map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                alt="User"
                size="lg"
                withRing
                src="https://img.freepik.com/free-photo/portrait-young-african-american-man_23-2148932869.jpg?uid=R31019825&ga=GA1.1.63791249.1729798000&semt=ais_hybrid&w=740"
              />
              <Text>User</Text>
            </View>
          ))}
        </HStack>
      </ScrollView>
    </View>
  );
};

export default Stories;
