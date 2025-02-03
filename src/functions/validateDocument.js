export default function validateDocument(type, value) {
  switch (type) {
    case "series":
      return !!value.match(/^\d{4}$/);
    case "adult":
      return !!value.match(/^\d{6}$/);
    case "child":
      return !!value.match(/^\d{12}$/);
    default:
      return;
  }
}
