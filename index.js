export const getTennisResult = (JoeyScore, TomScore) => {
  const scoreMapping = ["Love", "Fifteen", "Thirty", "Forty"]
  if (JoeyScore > 4 || TomScore > 4)
    return getTennisResult(--JoeyScore, --TomScore)

  if (JoeyScore > TomScore && JoeyScore === 4)
    return TomScore === 3 ? "Joey Adv" : "Joey Win"

  if (TomScore > JoeyScore && TomScore === 4)
    return JoeyScore === 3 ? "Tom Adv" : "Tom Win"

  if (JoeyScore === TomScore)
    return TomScore > 2 ? "Deuce" : scoreMapping[JoeyScore] + " All"

  return scoreMapping[JoeyScore] + " " + scoreMapping[TomScore]
}
