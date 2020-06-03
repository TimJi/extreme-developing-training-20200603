import { getTennisResult } from "../../index"
describe("getTennisResult 20200603", () => {
  it("Joey Win", () => {
    expect(getTennisResult(5, 3)).to.equal("Joey Win")
  })

  it("Deuce", () => {
    expect(getTennisResult(4, 4)).to.equal("Deuce")
  })

  it("Tom Adv", () => {
    expect(getTennisResult(3, 4)).to.equal("Tom Adv")
  })

  it("Joey Adv", () => {
    expect(getTennisResult(4, 3)).to.equal("Joey Adv")
  })

  it("Love All", () => {
    expect(getTennisResult(0, 0)).to.equal("Love All")
  })

  it("Fifteen Love", () => {
    expect(getTennisResult(1, 0)).to.equal("Fifteen Love")
  })

  it("Thirty Love", () => {
    expect(getTennisResult(2, 0)).to.equal("Thirty Love")
  })

  it("Forty Love", () => {
    expect(getTennisResult(3, 0)).to.equal("Forty Love")
  })

  it("Love Fifteen", () => {
    expect(getTennisResult(0, 1)).to.equal("Love Fifteen")
  })

  it("Love Thirty", () => {
    expect(getTennisResult(0, 2)).to.equal("Love Thirty")
  })

  it("Fifteen All", () => {
    expect(getTennisResult(1, 1)).to.equal("Fifteen All")
  })

  it("Thirty All", () => {
    expect(getTennisResult(2, 2)).to.equal("Thirty All")
  })

  it("Deuce", () => {
    expect(getTennisResult(3, 3)).to.equal("Deuce")
  })
})
