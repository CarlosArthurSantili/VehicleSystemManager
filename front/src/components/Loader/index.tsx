import Lottie from "react-lottie";
import * as animationData from "../../assets/loading.json";

interface Props {
  width?: number;
  height?: number;
}

export function Loader({ width = 250, height= 250 }: Props) {
  return (
    <Lottie
      options={{ animationData: animationData }}
      height={width}
      width={height}
    />
  );
}
