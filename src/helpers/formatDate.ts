import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";

const formatDate = (date: Date) => {
  const formattedDate = format(date, "yyyy-MM-dd", { locale: ruLocale });
  const dayOfWeek = format(date, "eee", { locale: ruLocale });
  return `${formattedDate}`;
};

export default formatDate;
