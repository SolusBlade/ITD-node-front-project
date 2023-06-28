export const findPriorityColor = value => {
  const matchedOption = priorityOptions.filter(
    option => option.value === value
  )[0];
  if (matchedOption) {
    return matchedOption.color;
  }
};

export const priorityOptions = [
  { value: 'low', color: 'var(--priority-low)' },
  { value: 'medium', color: 'var(--priority-medium)' },
  { value: 'high', color: 'var(--priority-high)' },
  { value: 'none', color: 'var(--priority-without-priority)' },
];
