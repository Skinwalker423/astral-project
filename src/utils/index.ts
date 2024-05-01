export function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    year: "numeric",
    month: "long",
  };

  return new Date(date).toLocaleDateString(
    undefined,
    options
  );
}
