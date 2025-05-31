import Avatar from "@/components/ui/avatar/avatar";
import IconButton from "@/components/ui/icon_button/iconButton";
import Card from "@/components/ui/layout/Card";
import GridStack from "@/components/ui/layout/GridStack";
import HStack from "@/components/ui/layout/HStack";
import VStack from "@/components/ui/layout/VStack";
import { screenWidth } from "@/lib/constants/dimention";
import iconsize from "@/styles/icons";
import spacing from "@/styles/spacing";
import typography from "@/styles/typography";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";
import useProfile from "./hooks/useProfile";

const stats = [
  {
    name: "Posts",
    value: 4,
  },
  {
    name: "Followers",
    value: 200,
  },
  {
    name: "Following",
    value: 129,
  },
];

const ProfileDetails = () => {
  const theme = UnistylesRuntime.getTheme();
  const { profile, isProfileLoading } = useProfile();
  return (
    <View style={{ paddingHorizontal: spacing.xs }}>
      <Card style={{ borderWidth: 0 }}>
        <VStack spacing={spacing.lg}>
          <HStack spacing={spacing.lg}>
            <View style={styles.avatarWrapper}>
              <Avatar
                src="https://img.freepik.com/free-photo/medium-shot-people-with-glasses-posing-studio_23-2150169314.jpg?uid=R31019825&ga=GA1.1.63791249.1729798000&semt=ais_hybrid&w=740"
                alt="Avatar"
                size="xlg"
              />
              <View style={styles.addbtn}>
                <IconButton
                  style={{ padding: 0 }}
                  iconType="MaterialIcons"
                  name="add-circle"
                />
              </View>
            </View>
            <View style={{ width: screenWidth / 1.8 }}>
              <VStack spacing={spacing.sm}>
                <Text
                  style={[typography.body, { fontWeight: "700" }, styles.text]}
                >
                  {isProfileLoading ? (
                    <SkeletonPlaceholder.Item
                      width={120}
                      height={20}
                      backgroundColor={"#E1E9EE"}
                      borderRadius={999}
                    />
                  ) : (
                    <React.Fragment>
                      {profile?.firstname} {profile?.lastname}
                    </React.Fragment>
                  )}
                </Text>
                <GridStack columns={3}>
                  {stats.map((item, index) => (
                    <StatItem key={index} {...item} />
                  ))}
                </GridStack>
              </VStack>
            </View>
          </HStack>
          <View>
            <Text style={[typography.body, styles.text]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              cum incidunt corrupti perferendis
            </Text>
          </View>

          <TouchableOpacity activeOpacity={0.8}>
            <Card style={styles.professionWraper}>
              <Text
                style={[typography.bodySm, { fontWeight: "700" }, styles.text]}
              >
                Professional Dashboard
              </Text>
              <Text
                style={[
                  typography.bodySm,
                  { fontWeight: "200", opacity: 0.5 },
                  styles.text,
                ]}
              >
                50 views in the last 30 days
              </Text>
            </Card>
          </TouchableOpacity>
        </VStack>
        <View style={{ marginTop: spacing.sm }}>
          <GridStack spacing={spacing.sm} columns={4}>
            <TouchableOpacity style={styles.actionbtn}>
              <Text
                style={[typography.bodySm, { fontWeight: "700" }, styles.text]}
              >
                Edit Profile
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionbtn}>
              <Text
                style={[typography.bodySm, { fontWeight: "700" }, styles.text]}
              >
                Share Profile
              </Text>
            </TouchableOpacity>
            <HStack spacing={spacing.sm}>
              <TouchableOpacity style={styles.actionbtn}>
                <Text
                  style={[
                    typography.bodySm,
                    { fontWeight: "700" },
                    styles.text,
                  ]}
                >
                  Connect
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionbtn]}>
                <Feather
                  color={theme.colors.text}
                  size={iconsize.xs}
                  name="chevron-down"
                />
              </TouchableOpacity>
            </HStack>
          </GridStack>
        </View>
      </Card>
    </View>
  );
};

function StatItem({ name, value }: { name: string; value: number }) {
  return (
    <VStack>
      <Text
        style={[
          typography.h4,
          {
            fontWeight: "700",
          },
          styles.text,
        ]}
      >
        {value}
      </Text>
      <Text
        style={[
          typography.bodySm,
          {
            fontWeight: "700",
          },
          styles.text,
        ]}
      >
        {name}
      </Text>
    </VStack>
  );
}

const styles = StyleSheet.create(({ colors, radius, spacing }) => ({
  addbtn: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 9999,
    padding: 0,
    width: "auto",
    height: "auto",
  },
  avatarWrapper: {
    position: "relative",
    borderRadius: 9999,
  },
  professionWraper: {
    backgroundColor: colors.swatches?.gray?.[200],
    borderWidth: 0,
  },
  actionbtn: {
    borderWidth: 1,
    borderColor: colors.swatches?.gray?.[200],
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  text: {
    color: colors.text,
  },
}));

export default ProfileDetails;
