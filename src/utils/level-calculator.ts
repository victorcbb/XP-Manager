export function levelCalculator(experienceAmount: number): number {
  let level = 1

  switch (true) {
    case experienceAmount >= 5350000:
      level = 20
      break
    case experienceAmount >= 3850000:
      level = 19
      break
    case experienceAmount >= 2700000:
      level = 18
      break
    case experienceAmount >= 1900000:
      level = 17
      break
    case experienceAmount >= 1350000:
      level = 16
      break
    case experienceAmount >= 955000:
      level = 15
      break
    case experienceAmount >= 665000:
      level = 14
      break
    case experienceAmount >= 315000:
      level = 13
      break
    case experienceAmount >= 220000:
      level = 12
      break
    case experienceAmount >= 155000:
      level = 11
      break
    case experienceAmount >= 105000:
      level = 10
      break
    case experienceAmount >= 55000:
      level = 9
      break
    case experienceAmount >= 51000:
      level = 8
      break
    case experienceAmount >= 23000:
      level = 7
      break
    case experienceAmount >= 15000:
      level = 6
      break
    case experienceAmount >= 10000:
      level = 5
      break
    case experienceAmount >= 6000:
      level = 4
      break
    case experienceAmount >= 3300:
      level = 3
      break
    case experienceAmount >= 1300:
      level = 2
      break
    // default:
    //   alert('none')
    //   break
  }

  return level
}
