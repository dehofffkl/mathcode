tell jasmine where to find our code
var math = require('../math');
desccribe("a program that does basic arithmetic", function () {
	it("can add two numbers together", function() {
		expect(math.add(3,5)).toBe(8);
	});
});