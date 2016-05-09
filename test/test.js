var expect = require('chai').expect;

describe("Testing Suite",function(){
	describe("Basic Functions",function(){
		it("expect 3 to equal 3",function(){
			expect(3).to.equal(3);
		})
		it("expect 3 to not equal 4", function(){
			expect(3).to.not.equal(4);
		})
	})
})
