export const buildTestId = (str: string) => {
  const text = str.replace(/\s+/g, '_').toLowerCase();
  return {
    testID: text,
    accessibilityLabel: text,
  };
};
