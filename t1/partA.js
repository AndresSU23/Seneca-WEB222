function isNumber(value) {
  return typeof value === "number";
}

function isString(value) {
  return typeof value === "string";
}

let toInt = (a) => parseInt(a);

function between(value, min, max = 100) {
  if (!isNumber(value) || !isNumber(min) || !isNumber(max))
    throw new Error("Non numeric type provided");
  if (min > max) throw new Error("Minimum is higher than Maximum");
  return value >= min && value <= max;
}

function createIpAddress(...param) {
  if (param.length !== 4)
    throw new Error("There were not provided 4 arguments");
  if (
    !isString(param[0]) ||
    !isString(param[1]) ||
    !isString(param[2]) ||
    !isString(param[3])
  )
    throw new Error("The parameters were not strings");
  for (let i = 0; i < param.length; i++) {
    param[i] = toInt(param[i]);
    if (!between(param[i], 0, 255))
      throw new Error("Parameter not in range 0 - 255");
  }
  return `${param[0]}.${param[1]}.${param[2]}.${param[3]}`;
}
