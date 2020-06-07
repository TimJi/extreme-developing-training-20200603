import {getTennisGameScore} from "../../index";

describe("Tennis Game", ()=>{
    it('Love All', ()=>{
        expect('Love All').equal(getTennisGameScore(0, 0))
    })

    it('Fifteen Love', ()=>{
        expect('Fifteen Love').equal(getTennisGameScore(1, 0))
    })

    it('Thirty Love', ()=>{
        expect('Thirty Love').equal(getTennisGameScore(2, 0))
    })

    it('Forty Love', ()=>{
        expect('Forty Love').equal(getTennisGameScore(3, 0))
    })

    it('Love Fifteen', ()=>{
        expect('Love Fifteen').equal(getTennisGameScore(0, 1))
    })

    it('Love Thirty', ()=>{
        expect('Love Thirty').equal(getTennisGameScore(0, 2))
    })

    it('Fifteen All', ()=>{
        expect('Fifteen All').equal(getTennisGameScore(1, 1))
    })

    it('Thirty All', ()=>{
        expect('Thirty All').equal(getTennisGameScore(2, 2))
    })

    it('Deuce', ()=>{
        expect('Deuce').equal(getTennisGameScore(3, 3))
    })

    it('Joey Adv', ()=>{
        expect('Joey Adv').equal(getTennisGameScore(4, 3))
    })

    it('Tom Adv', ()=>{
        expect('Tom Adv').equal(getTennisGameScore(3, 4))
    })

    it('Deuce', ()=>{
        expect('Deuce').equal(getTennisGameScore(4, 4))
    })

    it('Joey Win', ()=>{
        expect('Joey Win').equal(getTennisGameScore(5, 3))
    })

})