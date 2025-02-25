import products from "@/assets/data/products";
import Colors from "@/constants/Colors";
import { Text, View } from "@/components/Themed";
import Button from "@/components/Button";
import { Image } from "react-native";
import NotificationLocal from "../../components/NotificationLocal";
import AnimationTextInput from "../../components/animation-text-input/Index";

const product = products[1];
export default function TabOneScreen() {
  return (
    <>
      <View className="items-center justify-center p-3 ">
        <AnimationTextInput placeholder="Nombre" 
        activeColor={Colors.light.tint}
        />
        <Image source={{ uri: product.image }} className="w-full aspect-[1]" />

        <Text className="text-lg my-5 font-bold">{product.name}</Text>
        <Text
          className="text-sm font-[600]"
          style={{ color: Colors.light.tint }}
        >
          {product.price}
        </Text>

        <Button className="bg-black">
          <Text className=" font-bold" style={{ color: Colors.light.tint }}>
            Add to Cart
          </Text>
        </Button>
      </View>
    </>
  );
}
