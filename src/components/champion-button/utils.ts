export function getChampionColor(cost: number): string {
  switch (cost) {
    case 1:
      return "border-gray-600 bg-gradient-to-b from-gray-800 to-gray-900";
    case 2:
      return "border-green-600 bg-gradient-to-b from-green-800 to-green-900";
    case 3:
      return "border-blue-600 bg-gradient-to-b from-blue-800 to-blue-900";
    case 4:
      return "border-purple-600 bg-gradient-to-b from-purple-800 to-purple-900";
    default:
      return "border-yellow-600 bg-gradient-to-b from-yellow-800 to-yellow-900";
  }
}
