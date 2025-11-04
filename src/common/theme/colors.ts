const generateColor = (colorHex: string) => {
  const r = parseInt(colorHex.slice(1, 3), 16);
  const g = parseInt(colorHex.slice(3, 5), 16);
  const b = parseInt(colorHex.slice(5, 7), 16);

  return (opacity: number = 1) => `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const Colors = {
  black: generateColor('#000000'),
  white: generateColor('#FFFFFF'),
  blue: {
    50: generateColor('#E3F2FD'),
    100: generateColor('#BBDEFB'),
    200: generateColor('#90CAF9'),
    300: generateColor('#64B5F6'),
    400: generateColor('#42A5F5'),
    500: generateColor('#2196F3'),
    600: generateColor('#1E88E5'),
    700: generateColor('#1976D2'),
    800: generateColor('#1565C0'),
    900: generateColor('#0D47A1'),
  },
  indigo: {
    50: generateColor('#E8EAF6'),
    100: generateColor('#C5CAE9'),
    200: generateColor('#9FA8DA'),
    300: generateColor('#7986CB'),
    400: generateColor('#5C6BC0'),
    500: generateColor('#3F51B5'),
    600: generateColor('#3949AB'),
    700: generateColor('#303F9F'),
    800: generateColor('#283593'),
    900: generateColor('#1A237E'),
  },
  grey: {
    50: generateColor('#FAFAFA'),
    100: generateColor('#F5F5F5'),
    200: generateColor('#EEEEEE'),
    300: generateColor('#E0E0E0'),
    400: generateColor('#BDBDBD'),
    500: generateColor('#9E9E9E'),
    600: generateColor('#757575'),
    700: generateColor('#616161'),
    800: generateColor('#424242'),
    900: generateColor('#212121'),
  },
};
