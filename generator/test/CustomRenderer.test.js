const marked = require('marked');
const logger = require("../script/Logger");
const {render_upgrade} = require('../script/CustomRenderer');

describe('Test custom renderer', () => {
    logger.info("testing header token render");
    it('should add class attribute to header token', () => {
        const header = marked("# test",{renderer:render_upgrade({main_color:"red",second_color:"blue",third_color:"black"})})
        expect(header).toBe('<h1 class="heading1" style="color: blue" id="test"><a class="anchor" href="#test"><img src="../assets/anchor.svg" alt></a>test</h1>');
    });

    logger.info("testing link token render");
    it('should add class attribute and style attribute to link token', () => {
        const link = marked("[test](test)",{renderer:render_upgrade({main_color:"red",second_color:"blue"})})
        expect(link).toBe('<p><a class="links" style="color :blue" href="test" title="">test</a></p>\n');
    });

    logger.info("testing code token render");
    it('should add class attribute and style attribute to code token', () => {
        const code = marked("```\ntest\n```",{renderer:render_upgrade({main_color:"red",second_color:"blue",third_color:"black"})})
        expect(code).toBe('<pre style="background-color: red"><code class="code" style="color: black">test</code></pre>');
    });

    logger.info("testing codespan token render");
    it('should add class and style attribute to codespan token', () => {
        const codespan = marked("`test`",{renderer:render_upgrade({main_color:"red",second_color:"blue"})})
        expect(codespan).toBe('<p><code class="codespan" style="color: blue">test</code></p>\n');
    });

    logger.info("testing blockquote token render");
    it('should add class  and style attribute to blockquote token', () => {
        const blockquote = marked(">test",{renderer:render_upgrade({main_color:"red",second_color:"blue"})})
        expect(blockquote).toBe('<blockquote class="blockquotes" style="color: blue;border-left: blue solid;"><p>test</p>\n</blockquote>');
    });

    logger.info("testing image token render");
    it('should add class attribute to image token', () => {
        const image = marked("![test](test.png)",{renderer:render_upgrade({main_color:"red"})})
        expect(image).toBe('<p><img src="test.png" alt="test" title=""></p>\n');
    });

});