export function getFormattedValue(value) {
  switch (value) {
    case 'low':
      return 'Low';
    case 'medium':
      return 'Medium';
    case 'high':
      return 'High';
    case 'none':
      return 'Without';
    default:
      return value;
  }
};
