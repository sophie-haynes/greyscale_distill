import logo from '../assets/distill-logo.svg';

export const footerTemplate = `
<style>

:host {
  color: rgba(255, 255, 255, 0.5);
  font-weight: 300;
  padding: 2rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  // background-color: hsl(180, 5%, 15%); /*hsl(200, 60%, 15%);*/
  background-color: hsl(60, 100%, 15%);
  text-align: left;
  contain: content;
}

.footer-container .logo svg {
  width: 24px;
  position: relative;
  top: 4px;
  margin-right: 2px;
}

.footer-container .logo svg path {
  fill: none;
  stroke: rgba(255, 255, 255, 0.8);
  stroke-width: 3px;
}

.footer-container .logo {
  font-size: 17px;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  margin-right: 6px;
}

.footer-container {
  grid-column: text;
}

.footer-container .nav {
  font-size: 0.9em;
  margin-top: 1.5em;
}

.footer-container .nav a {
  color: rgba(255, 255, 255, 0.8);
  margin-right: 6px;
  text-decoration: none;
}

</style>

<div class='footer-container'>

  <a href="sophie-distill.space/" class="logo">
    ${logo}
    Sophie Distill</a> is a personal blog of <a href="https://distill.pub/">Distill</a>-like research articles dedicated to reliable AI.

  <div class="nav">
    <a href="sophie-distill.space/about/">About</a>
    <a href="https://github.com/sophie-haynes">GitHub</a>
    <!--<a href="https://distill.pub/journal/">Submit</a>
    <a href="https://distill.pub/prize/">Prize</a>
    <a href="https://distill.pub/archive/">Archive</a>
    <a href="https://distill.pub/rss.xml">RSS</a>
    <a href="https://scholar.google.com/citations?user=qoJcQhoAAAAJ">Scholar</a>
    <a href="https://twitter.com/distillpub">Twitter</a>
    &nbsp;&nbsp;&nbsp;&nbsp; ISSN 2476-0757-->
  </div>

</div>

`;
