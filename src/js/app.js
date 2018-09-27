class App {
	constructor() {
		this.section = $('section').attr('class') || '';
		const isIndex = this.section.split(' ').some(item => item === 'index');

		if(isIndex) this.index = new Index();
	}
}

$(function() {
	var app = new App();
});
