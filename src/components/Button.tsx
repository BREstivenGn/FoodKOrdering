import { Pressable, PressableProps } from "react-native";
import Animated, { 
  AnimatedProps, 
  useAnimatedStyle, 
  withSpring,
  FadeIn,
  FadeOut
} from "react-native-reanimated";

const _spacing = 10;
const _buttonHeight = 50;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
function Button({ children, style, className, ...rest }: AnimatedProps<PressableProps>) {
  
  return (
    <AnimatedPressable
      {...rest}
      className={className}
      entering={FadeIn.duration(400).springify()}
      exiting={FadeOut.duration(300).springify()}
      style={[
        {
          height: _buttonHeight,
          borderRadius: _buttonHeight,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: _spacing * 2,
        },
        style,
      ]}
    >
      {children}
    </AnimatedPressable>
  );
}

export default Button;
