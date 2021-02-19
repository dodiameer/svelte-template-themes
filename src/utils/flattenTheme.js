export default function flattenTheme(theme) {
  const flattenedObject = {}
  Object.entries(theme).forEach(([themeKey, themeValue]) => {
    if (typeof themeValue === "string") {
      flattenedObject[themeKey] = themeValue
      return
    }

    Object.entries(themeValue).forEach(([colorKey, colorValue]) => {
      const nestedKey = `${themeKey}-${colorKey}`
      flattenedObject[nestedKey] = colorValue
    })
  })
  return flattenedObject
}