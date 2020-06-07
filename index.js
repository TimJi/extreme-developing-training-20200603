export const getTennisGameScore = (joeyScore, tomScore) => {
    const scoreMapping = ["Love", "Fifteen", "Thirty", "Forty"]

    function isSameScore() {
        return joeyScore === tomScore;
    }

    function getResultFromScoreMapping() {
        return scoreMapping[joeyScore] + " " + scoreMapping[tomScore]
    }

    function isDeuce() {
        return isSameScore() && joeyScore >= 3;
    }

    function isEndGamePoint() {
        return joeyScore >= 4 || tomScore >= 4;
    }

    function getBigPlayer() {
        return joeyScore > tomScore ? "Joey" : "Tom";
    }

    function getGameResult() {
        return Math.abs(joeyScore - tomScore) === 1 ? "Adv" : "Win";
    }

    if (isSameScore()) return isDeuce() ? "Deuce" : scoreMapping[joeyScore] + " All"
    if (isEndGamePoint()) {
        return getBigPlayer() + " " + getGameResult()
    } else {
        return getResultFromScoreMapping()
    }
}
