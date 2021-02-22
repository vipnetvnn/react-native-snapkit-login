import { NativeModules } from 'react-native';

type SnapkitLoginType = {
  multiply(a: number, b: number): Promise<number>;
};

const { SnapkitLogin } = NativeModules;

export default SnapkitLogin as SnapkitLoginType;
