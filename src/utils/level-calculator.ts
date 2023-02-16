export function levelCalculator(
  experienceAmount: number,
  experienceTableTemplate: string,
): number {
  let level = 1

  switch (true) {
    case experienceTableTemplate === 'Pathfinder-BloodBrothers-template':
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
        case experienceAmount >= 75000:
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
      }
      break
    case experienceTableTemplate === 'Pathfinder-fast-template':
      switch (true) {
        case experienceAmount >= 2400000:
          level = 20
          break
        case experienceAmount >= 1700000:
          level = 19
          break
        case experienceAmount >= 1200000:
          level = 18
          break
        case experienceAmount >= 850000:
          level = 17
          break
        case experienceAmount >= 600000:
          level = 16
          break
        case experienceAmount >= 425000:
          level = 15
          break
        case experienceAmount >= 295000:
          level = 14
          break
        case experienceAmount >= 210000:
          level = 13
          break
        case experienceAmount >= 145000:
          level = 12
          break
        case experienceAmount >= 105000:
          level = 11
          break
        case experienceAmount >= 71000:
          level = 10
          break
        case experienceAmount >= 50000:
          level = 9
          break
        case experienceAmount >= 34000:
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
      }
      break
    case experienceTableTemplate === 'Pathfinder-medium-template':
      switch (true) {
        case experienceAmount >= 3600000:
          level = 20
          break
        case experienceAmount >= 2550000:
          level = 19
          break
        case experienceAmount >= 1800000:
          level = 18
          break
        case experienceAmount >= 1300000:
          level = 17
          break
        case experienceAmount >= 890000:
          level = 16
          break
        case experienceAmount >= 635000:
          level = 15
          break
        case experienceAmount >= 445000:
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
        case experienceAmount >= 75000:
          level = 9
          break
        case experienceAmount >= 51000:
          level = 8
          break
        case experienceAmount >= 35000:
          level = 7
          break
        case experienceAmount >= 23000:
          level = 6
          break
        case experienceAmount >= 15000:
          level = 5
          break
        case experienceAmount >= 9000:
          level = 4
          break
        case experienceAmount >= 5000:
          level = 3
          break
        case experienceAmount >= 2000:
          level = 2
          break
      }
      break
    case experienceTableTemplate === 'Pathfinder-slow-template':
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
        case experienceAmount >= 475000:
          level = 13
          break
        case experienceAmount >= 330000:
          level = 12
          break
        case experienceAmount >= 235000:
          level = 11
          break
        case experienceAmount >= 160000:
          level = 10
          break
        case experienceAmount >= 115000:
          level = 9
          break
        case experienceAmount >= 77000:
          level = 8
          break
        case experienceAmount >= 53000:
          level = 7
          break
        case experienceAmount >= 35000:
          level = 6
          break
        case experienceAmount >= 23000:
          level = 5
          break
        case experienceAmount >= 14000:
          level = 4
          break
        case experienceAmount >= 7500:
          level = 3
          break
        case experienceAmount >= 3000:
          level = 2
          break
      }
      break
    case experienceTableTemplate === 'D&D5e-template':
      switch (true) {
        case experienceAmount >= 355000:
          level = 20
          break
        case experienceAmount >= 305000:
          level = 19
          break
        case experienceAmount >= 265000:
          level = 18
          break
        case experienceAmount >= 225000:
          level = 17
          break
        case experienceAmount >= 195000:
          level = 16
          break
        case experienceAmount >= 165000:
          level = 15
          break
        case experienceAmount >= 140000:
          level = 14
          break
        case experienceAmount >= 120000:
          level = 13
          break
        case experienceAmount >= 100000:
          level = 12
          break
        case experienceAmount >= 85000:
          level = 11
          break
        case experienceAmount >= 64000:
          level = 10
          break
        case experienceAmount >= 48000:
          level = 9
          break
        case experienceAmount >= 34000:
          level = 8
          break
        case experienceAmount >= 23000:
          level = 7
          break
        case experienceAmount >= 14000:
          level = 6
          break
        case experienceAmount >= 6500:
          level = 5
          break
        case experienceAmount >= 2700:
          level = 4
          break
        case experienceAmount >= 900:
          level = 3
          break
        case experienceAmount >= 300:
          level = 2
          break
      }
      break
  }

  return level
}
