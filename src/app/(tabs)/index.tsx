import products from '@/assets/data/products';
import Colors from '@/constants/Colors';
import { Text, View } from '@/components/Themed';
import { Image,  } from 'react-native';


const product = products[1];
export default function TabOneScreen() {

  return (
    <>
    <View className='items-center justify-center p-3 '>
      <Image source={{ uri: product.image }} className='w-full aspect-[1]' />

      <Text className='text-lg my-5 font-bold'>{product.name}</Text>
      <Text className='text-sm font-[600]' style={{color: Colors.light.tint}}>{product.price}</Text>
    </View>
    </>
  );
}

