let str = "fadsgffdgasdhdfgjhnfgxzcvcbn";

const findFirstUnique1 = (s) => {
  let rtnVal = -1;
  for (let i = 0; i < s.length; i++) {
    if (str.indexOf(s[i]) === str.lastIndexOf(s[i])) {
      rtnVal = s[i];
      break;
    }
  }
  return rtnVal;
};

const findFirstUnique2 = (s) => {
  let arr = s.split("");
  let uniqueArr = arr.filter((val, index, self) => {
    return self.indexOf(val) === self.lastIndexOf(val);
  });

  return uniqueArr.length > 0 ? uniqueArr[0] : -1;
};

const findFirstUnique3 = (s) => {
  let arr = s.split("");
  let uniqueArr = arr.filter((val, index) => {
    let letterCount = arr.filter((v) => v === val);

    console.log(letterCount);

    return letterCount.length < 2 ? true : false;
  });

  return uniqueArr.length > 0 ? uniqueArr[0] : -1;
};

const mostRepeated = (s) => {
  let arr = s.split("");
  let set = [...new Set(arr)];
  let repeatedArr = [];
  for (let i = 0; i < set.length; i++) {
    let count = arr.filter((val) => set[i] === val).length;
    repeatedArr.push({ [set[i]]: count });
  }

  let mostCount2 = repeatedArr.sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);

  let mostCount = repeatedArr.reduce((curr, next) => {
    if (Object.values(next)[0] > curr) {
      curr[0] = Object.keys(next)[0];
      curr[1] = Object.values(next)[0];
      return curr;
    } else {
      return curr;
    }
  }, []);

  let twiceCount = repeatedArr.filter((val) => {
    if (Object.values(val)[0] === 2) {
      return val;
    }
  });

  console.log("mostCount", mostCount);
  console.log("mostCount2[0]", mostCount2[0]);
  console.log("twiceCount", twiceCount);

  return "";
};

/* console.log(findFirstUnique1(str));
console.log(findFirstUnique2(str));
console.log(findFirstUnique3(str)); */
console.log(mostRepeated(str));
