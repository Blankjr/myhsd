import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly api_documentation = `<!doctype html>
<html>
<head>
<meta charset='UTF-8'><meta name='viewport' content='width=device-width initial-scale=1'>

<style type='text/css'>html {overflow-x: initial !important;}:root { --bg-color:#ffffff; --text-color:#333333; --select-text-bg-color:#B5D6FC; --select-text-font-color:auto; --monospace:"Lucida Console",Consolas,"Courier",monospace; --title-bar-height:20px; }
.mac-os-11 { --title-bar-height:28px; }
html { font-size: 14px; background-color: var(--bg-color); color: var(--text-color); font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
body { margin: 0px; padding: 0px; height: auto; inset: 0px; font-size: 1rem; line-height: 1.42857; overflow-x: hidden; background: inherit; tab-size: 4; }
iframe { margin: auto; }
a.url { word-break: break-all; }
a:active, a:hover { outline: 0px; }
.in-text-selection, ::selection { text-shadow: none; background: var(--select-text-bg-color); color: var(--select-text-font-color); }
#write { margin: 0px auto; height: auto; width: inherit; word-break: normal; overflow-wrap: break-word; position: relative; white-space: normal; overflow-x: visible; padding-top: 36px; }
#write.first-line-indent p { text-indent: 2em; }
#write.first-line-indent li p, #write.first-line-indent p * { text-indent: 0px; }
#write.first-line-indent li { margin-left: 2em; }
.for-image #write { padding-left: 8px; padding-right: 8px; }
body.typora-export { padding-left: 30px; padding-right: 30px; }
.typora-export .footnote-line, .typora-export li, .typora-export p { white-space: pre-wrap; }
.typora-export .task-list-item input { pointer-events: none; }
@media screen and (max-width: 500px) {
  body.typora-export { padding-left: 0px; padding-right: 0px; }
  #write { padding-left: 20px; padding-right: 20px; }
  .CodeMirror-sizer { margin-left: 0px !important; }
  .CodeMirror-gutters { display: none !important; }
}
#write li > figure:last-child { margin-bottom: 0.5rem; }
#write ol, #write ul { position: relative; }
img { max-width: 100%; vertical-align: middle; image-orientation: from-image; }
button, input, select, textarea { color: inherit; font: inherit; }
input[type="checkbox"], input[type="radio"] { line-height: normal; padding: 0px; }
*, ::after, ::before { box-sizing: border-box; }
#write h1, #write h2, #write h3, #write h4, #write h5, #write h6, #write p, #write pre { width: inherit; }
#write h1, #write h2, #write h3, #write h4, #write h5, #write h6, #write p { position: relative; }
p { line-height: inherit; }
h1, h2, h3, h4, h5, h6 { break-after: avoid-page; break-inside: avoid; orphans: 4; }
p { orphans: 4; }
h1 { font-size: 2rem; }
h2 { font-size: 1.8rem; }
h3 { font-size: 1.6rem; }
h4 { font-size: 1.4rem; }
h5 { font-size: 1.2rem; }
h6 { font-size: 1rem; }
.md-math-block, .md-rawblock, h1, h2, h3, h4, h5, h6, p { margin-top: 1rem; margin-bottom: 1rem; }
.hidden { display: none; }
.md-blockmeta { color: rgb(204, 204, 204); font-weight: 700; font-style: italic; }
a { cursor: pointer; }
sup.md-footnote { padding: 2px 4px; background-color: rgba(238, 238, 238, 0.7); color: rgb(85, 85, 85); border-radius: 4px; cursor: pointer; }
sup.md-footnote a, sup.md-footnote a:hover { color: inherit; text-transform: inherit; text-decoration: inherit; }
#write input[type="checkbox"] { cursor: pointer; width: inherit; height: inherit; }
figure { overflow-x: auto; margin: 1.2em 0px; max-width: calc(100% + 16px); padding: 0px; }
figure > table { margin: 0px; }
tr { break-inside: avoid; break-after: auto; }
thead { display: table-header-group; }
table { border-collapse: collapse; border-spacing: 0px; width: 100%; overflow: auto; break-inside: auto; text-align: left; }
table.md-table td { min-width: 32px; }
.CodeMirror-gutters { border-right: 0px; background-color: inherit; }
.CodeMirror-linenumber { user-select: none; }
.CodeMirror { text-align: left; }
.CodeMirror-placeholder { opacity: 0.3; }
.CodeMirror pre { padding: 0px 4px; }
.CodeMirror-lines { padding: 0px; }
div.hr:focus { cursor: none; }
#write pre { white-space: pre-wrap; }
#write.fences-no-line-wrapping pre { white-space: pre; }
#write pre.ty-contain-cm { white-space: normal; }
.CodeMirror-gutters { margin-right: 4px; }
.md-fences { font-size: 0.9rem; display: block; break-inside: avoid; text-align: left; overflow: visible; white-space: pre; background: inherit; position: relative !important; }
.md-fences-adv-panel { width: 100%; margin-top: 10px; text-align: center; padding-top: 0px; padding-bottom: 8px; overflow-x: auto; }
#write .md-fences.mock-cm { white-space: pre-wrap; }
.md-fences.md-fences-with-lineno { padding-left: 0px; }
#write.fences-no-line-wrapping .md-fences.mock-cm { white-space: pre; overflow-x: auto; }
.md-fences.mock-cm.md-fences-with-lineno { padding-left: 8px; }
.CodeMirror-line, twitterwidget { break-inside: avoid; }
.footnotes { opacity: 0.8; font-size: 0.9rem; margin-top: 1em; margin-bottom: 1em; }
.footnotes + .footnotes { margin-top: 0px; }
.md-reset { margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: top; background: 0px 0px; text-decoration: none; text-shadow: none; float: none; position: static; width: auto; height: auto; white-space: nowrap; cursor: inherit; -webkit-tap-highlight-color: transparent; line-height: normal; font-weight: 400; text-align: left; box-sizing: content-box; direction: ltr; }
li div { padding-top: 0px; }
blockquote { margin: 1rem 0px; }
li .mathjax-block, li p { margin: 0.5rem 0px; }
li blockquote { margin: 1rem 0px; }
li { margin: 0px; position: relative; }
blockquote > :last-child { margin-bottom: 0px; }
blockquote > :first-child, li > :first-child { margin-top: 0px; }
.footnotes-area { color: rgb(136, 136, 136); margin-top: 0.714rem; padding-bottom: 0.143rem; white-space: normal; }
#write .footnote-line { white-space: pre-wrap; }
@media print {
  body, html { border: 1px solid transparent; height: 99%; break-after: avoid; break-before: avoid; font-variant-ligatures: no-common-ligatures; }
  #write { margin-top: 0px; padding-top: 0px; border-color: transparent !important; }
  .typora-export * { -webkit-print-color-adjust: exact; }
  .typora-export #write { break-after: avoid; }
  .typora-export #write::after { height: 0px; }
  .is-mac table { break-inside: avoid; }
  .typora-export-show-outline .typora-export-sidebar { display: none; }
}
.footnote-line { margin-top: 0.714em; font-size: 0.7em; }
a img, img a { cursor: pointer; }
pre.md-meta-block { font-size: 0.8rem; min-height: 0.8rem; white-space: pre-wrap; background: rgb(204, 204, 204); display: block; overflow-x: hidden; }
p > .md-image:only-child:not(.md-img-error) img, p > img:only-child { display: block; margin: auto; }
#write.first-line-indent p > .md-image:only-child:not(.md-img-error) img { left: -2em; position: relative; }
p > .md-image:only-child { display: inline-block; width: 100%; }
#write .MathJax_Display { margin: 0.8em 0px 0px; }
.md-math-block { width: 100%; }
.md-math-block:not(:empty)::after { display: none; }
.MathJax_ref { fill: currentcolor; }
[contenteditable="true"]:active, [contenteditable="true"]:focus, [contenteditable="false"]:active, [contenteditable="false"]:focus { outline: 0px; box-shadow: none; }
.md-task-list-item { position: relative; list-style-type: none; }
.task-list-item.md-task-list-item { padding-left: 0px; }
.md-task-list-item > input { position: absolute; top: 0px; left: 0px; margin-left: -1.2em; margin-top: calc(1em - 10px); border: none; }
.math { font-size: 1rem; }
.md-toc { min-height: 3.58rem; position: relative; font-size: 0.9rem; border-radius: 10px; }
.md-toc-content { position: relative; margin-left: 0px; }
.md-toc-content::after, .md-toc::after { display: none; }
.md-toc-item { display: block; color: rgb(65, 131, 196); }
.md-toc-item a { text-decoration: none; }
.md-toc-inner:hover { text-decoration: underline; }
.md-toc-inner { display: inline-block; cursor: pointer; }
.md-toc-h1 .md-toc-inner { margin-left: 0px; font-weight: 700; }
.md-toc-h2 .md-toc-inner { margin-left: 2em; }
.md-toc-h3 .md-toc-inner { margin-left: 4em; }
.md-toc-h4 .md-toc-inner { margin-left: 6em; }
.md-toc-h5 .md-toc-inner { margin-left: 8em; }
.md-toc-h6 .md-toc-inner { margin-left: 10em; }
@media screen and (max-width: 48em) {
  .md-toc-h3 .md-toc-inner { margin-left: 3.5em; }
  .md-toc-h4 .md-toc-inner { margin-left: 5em; }
  .md-toc-h5 .md-toc-inner { margin-left: 6.5em; }
  .md-toc-h6 .md-toc-inner { margin-left: 8em; }
}
a.md-toc-inner { font-size: inherit; font-style: inherit; font-weight: inherit; line-height: inherit; }
.footnote-line a:not(.reversefootnote) { color: inherit; }
.md-attr { display: none; }
.md-fn-count::after { content: "."; }
code, pre, samp, tt { font-family: var(--monospace); }
kbd { margin: 0px 0.1em; padding: 0.1em 0.6em; font-size: 0.8em; color: rgb(36, 39, 41); background: rgb(255, 255, 255); border: 1px solid rgb(173, 179, 185); border-radius: 3px; box-shadow: rgba(12, 13, 14, 0.2) 0px 1px 0px, rgb(255, 255, 255) 0px 0px 0px 2px inset; white-space: nowrap; vertical-align: middle; }
.md-comment { color: rgb(162, 127, 3); opacity: 0.6; font-family: var(--monospace); }
code { text-align: left; vertical-align: initial; }
a.md-print-anchor { white-space: pre !important; border-width: initial !important; border-style: none !important; border-color: initial !important; display: inline-block !important; position: absolute !important; width: 1px !important; right: 0px !important; outline: 0px !important; background: 0px 0px !important; text-decoration: initial !important; text-shadow: initial !important; }
.os-windows.monocolor-emoji .md-emoji { font-family: "Segoe UI Symbol", sans-serif; }
.md-diagram-panel > svg { max-width: 100%; }
[lang="flow"] svg, [lang="mermaid"] svg { max-width: 100%; height: auto; }
[lang="mermaid"] .node text { font-size: 1rem; }
table tr th { border-bottom: 0px; }
video { max-width: 100%; display: block; margin: 0px auto; }
iframe { max-width: 100%; width: 100%; border: none; }
.highlight td, .highlight tr { border: 0px; }
mark { background: rgb(255, 255, 0); color: rgb(0, 0, 0); }
.md-html-inline .md-plain, .md-html-inline strong, mark .md-inline-math, mark strong { color: inherit; }
.md-expand mark .md-meta { opacity: 0.3 !important; }
mark .md-meta { color: rgb(0, 0, 0); }
@media print {
  .typora-export h1, .typora-export h2, .typora-export h3, .typora-export h4, .typora-export h5, .typora-export h6 { break-inside: avoid; }
}
.md-diagram-panel .messageText { stroke: none !important; }
.md-diagram-panel .start-state { fill: var(--node-fill); }
.md-diagram-panel .edgeLabel rect { opacity: 1 !important; }
.md-fences.md-fences-math { font-size: 1em; }
.md-fences-advanced:not(.md-focus) { padding: 0px; white-space: nowrap; border: 0px; }
.md-fences-advanced:not(.md-focus) { background: inherit; }
.typora-export-show-outline .typora-export-content { max-width: 1440px; margin: auto; display: flex; flex-direction: row; }
.typora-export-sidebar { width: 300px; font-size: 0.8rem; margin-top: 80px; margin-right: 18px; }
.typora-export-show-outline #write { --webkit-flex:2; flex: 2 1 0%; }
.typora-export-sidebar .outline-content { position: fixed; top: 0px; max-height: 100%; overflow: hidden auto; padding-bottom: 30px; padding-top: 60px; width: 300px; }
@media screen and (max-width: 1024px) {
  .typora-export-sidebar, .typora-export-sidebar .outline-content { width: 240px; }
}
@media screen and (max-width: 800px) {
  .typora-export-sidebar { display: none; }
}
.outline-content li, .outline-content ul { margin-left: 0px; margin-right: 0px; padding-left: 0px; padding-right: 0px; list-style: none; }
.outline-content ul { margin-top: 0px; margin-bottom: 0px; }
.outline-content strong { font-weight: 400; }
.outline-expander { width: 1rem; height: 1.42857rem; position: relative; display: table-cell; vertical-align: middle; cursor: pointer; padding-left: 4px; }
.outline-expander::before { content: ""; position: relative; font-family: Ionicons; display: inline-block; font-size: 8px; vertical-align: middle; }
.outline-item { padding-top: 3px; padding-bottom: 3px; cursor: pointer; }
.outline-expander:hover::before { content: ""; }
.outline-h1 > .outline-item { padding-left: 0px; }
.outline-h2 > .outline-item { padding-left: 1em; }
.outline-h3 > .outline-item { padding-left: 2em; }
.outline-h4 > .outline-item { padding-left: 3em; }
.outline-h5 > .outline-item { padding-left: 4em; }
.outline-h6 > .outline-item { padding-left: 5em; }
.outline-label { cursor: pointer; display: table-cell; vertical-align: middle; text-decoration: none; color: inherit; }
.outline-label:hover { text-decoration: underline; }
.outline-item:hover { border-color: rgb(245, 245, 245); background-color: var(--item-hover-bg-color); }
.outline-item:hover { margin-left: -28px; margin-right: -28px; border-left: 28px solid transparent; border-right: 28px solid transparent; }
.outline-item-single .outline-expander::before, .outline-item-single .outline-expander:hover::before { display: none; }
.outline-item-open > .outline-item > .outline-expander::before { content: ""; }
.outline-children { display: none; }
.info-panel-tab-wrapper { display: none; }
.outline-item-open > .outline-children { display: block; }
.typora-export .outline-item { padding-top: 1px; padding-bottom: 1px; }
.typora-export .outline-item:hover { margin-right: -8px; border-right: 8px solid transparent; }
.typora-export .outline-expander::before { content: "+"; font-family: inherit; top: -1px; }
.typora-export .outline-expander:hover::before, .typora-export .outline-item-open > .outline-item > .outline-expander::before { content: "−"; }
.typora-export-collapse-outline .outline-children { display: none; }
.typora-export-collapse-outline .outline-item-open > .outline-children, .typora-export-no-collapse-outline .outline-children { display: block; }
.typora-export-no-collapse-outline .outline-expander::before { content: "" !important; }
.typora-export-show-outline .outline-item-active > .outline-item .outline-label { font-weight: 700; }
.md-inline-math-container mjx-container { zoom: 0.95; }


.CodeMirror { height: auto; }
.CodeMirror.cm-s-inner { background: inherit; }
.CodeMirror-scroll { overflow: auto hidden; z-index: 3; }
.CodeMirror-gutter-filler, .CodeMirror-scrollbar-filler { background-color: rgb(255, 255, 255); }
.CodeMirror-gutters { border-right: 1px solid rgb(221, 221, 221); background: inherit; white-space: nowrap; }
.CodeMirror-linenumber { padding: 0px 3px 0px 5px; text-align: right; color: rgb(153, 153, 153); }
.cm-s-inner .cm-keyword { color: rgb(119, 0, 136); }
.cm-s-inner .cm-atom, .cm-s-inner.cm-atom { color: rgb(34, 17, 153); }
.cm-s-inner .cm-number { color: rgb(17, 102, 68); }
.cm-s-inner .cm-def { color: rgb(0, 0, 255); }
.cm-s-inner .cm-variable { color: rgb(0, 0, 0); }
.cm-s-inner .cm-variable-2 { color: rgb(0, 85, 170); }
.cm-s-inner .cm-variable-3 { color: rgb(0, 136, 85); }
.cm-s-inner .cm-string { color: rgb(170, 17, 17); }
.cm-s-inner .cm-property { color: rgb(0, 0, 0); }
.cm-s-inner .cm-operator { color: rgb(152, 26, 26); }
.cm-s-inner .cm-comment, .cm-s-inner.cm-comment { color: rgb(170, 85, 0); }
.cm-s-inner .cm-string-2 { color: rgb(255, 85, 0); }
.cm-s-inner .cm-meta { color: rgb(85, 85, 85); }
.cm-s-inner .cm-qualifier { color: rgb(85, 85, 85); }
.cm-s-inner .cm-builtin { color: rgb(51, 0, 170); }
.cm-s-inner .cm-bracket { color: rgb(153, 153, 119); }
.cm-s-inner .cm-tag { color: rgb(17, 119, 0); }
.cm-s-inner .cm-attribute { color: rgb(0, 0, 204); }
.cm-s-inner .cm-header, .cm-s-inner.cm-header { color: rgb(0, 0, 255); }
.cm-s-inner .cm-quote, .cm-s-inner.cm-quote { color: rgb(0, 153, 0); }
.cm-s-inner .cm-hr, .cm-s-inner.cm-hr { color: rgb(153, 153, 153); }
.cm-s-inner .cm-link, .cm-s-inner.cm-link { color: rgb(0, 0, 204); }
.cm-negative { color: rgb(221, 68, 68); }
.cm-positive { color: rgb(34, 153, 34); }
.cm-header, .cm-strong { font-weight: 700; }
.cm-del { text-decoration: line-through; }
.cm-em { font-style: italic; }
.cm-link { text-decoration: underline; }
.cm-error { color: red; }
.cm-invalidchar { color: red; }
.cm-constant { color: rgb(38, 139, 210); }
.cm-defined { color: rgb(181, 137, 0); }
div.CodeMirror span.CodeMirror-matchingbracket { color: rgb(0, 255, 0); }
div.CodeMirror span.CodeMirror-nonmatchingbracket { color: rgb(255, 34, 34); }
.cm-s-inner .CodeMirror-activeline-background { background: inherit; }
.CodeMirror { position: relative; overflow: hidden; }
.CodeMirror-scroll { height: 100%; outline: 0px; position: relative; box-sizing: content-box; background: inherit; }
.CodeMirror-sizer { position: relative; }
.CodeMirror-gutter-filler, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-vscrollbar { position: absolute; z-index: 6; display: none; outline: 0px; }
.CodeMirror-vscrollbar { right: 0px; top: 0px; overflow: hidden; }
.CodeMirror-hscrollbar { bottom: 0px; left: 0px; overflow: auto hidden; }
.CodeMirror-scrollbar-filler { right: 0px; bottom: 0px; }
.CodeMirror-gutter-filler { left: 0px; bottom: 0px; }
.CodeMirror-gutters { position: absolute; left: 0px; top: 0px; padding-bottom: 10px; z-index: 3; overflow-y: hidden; }
.CodeMirror-gutter { white-space: normal; height: 100%; box-sizing: content-box; padding-bottom: 30px; margin-bottom: -32px; display: inline-block; }
.CodeMirror-gutter-wrapper { position: absolute; z-index: 4; background: 0px 0px !important; border: none !important; }
.CodeMirror-gutter-background { position: absolute; top: 0px; bottom: 0px; z-index: 4; }
.CodeMirror-gutter-elt { position: absolute; cursor: default; z-index: 4; }
.CodeMirror-lines { cursor: text; }
.CodeMirror pre { border-radius: 0px; border-width: 0px; background: 0px 0px; font-family: inherit; font-size: inherit; margin: 0px; white-space: pre; overflow-wrap: normal; color: inherit; z-index: 2; position: relative; overflow: visible; }
.CodeMirror-wrap pre { overflow-wrap: break-word; white-space: pre-wrap; word-break: normal; }
.CodeMirror-code pre { border-right: 30px solid transparent; width: fit-content; }
.CodeMirror-wrap .CodeMirror-code pre { border-right: none; width: auto; }
.CodeMirror-linebackground { position: absolute; inset: 0px; z-index: 0; }
.CodeMirror-linewidget { position: relative; z-index: 2; overflow: auto; }
.CodeMirror-wrap .CodeMirror-scroll { overflow-x: hidden; }
.CodeMirror-measure { position: absolute; width: 100%; height: 0px; overflow: hidden; visibility: hidden; }
.CodeMirror-measure pre { position: static; }
.CodeMirror div.CodeMirror-cursor { position: absolute; visibility: hidden; border-right: none; width: 0px; }
.CodeMirror div.CodeMirror-cursor { visibility: hidden; }
.CodeMirror-focused div.CodeMirror-cursor { visibility: inherit; }
.cm-searching { background: rgba(255, 255, 0, 0.4); }
span.cm-underlined { text-decoration: underline; }
span.cm-strikethrough { text-decoration: line-through; }
.cm-tw-syntaxerror { color: rgb(255, 255, 255); background-color: rgb(153, 0, 0); }
.cm-tw-deleted { text-decoration: line-through; }
.cm-tw-header5 { font-weight: 700; }
.cm-tw-listitem:first-child { padding-left: 10px; }
.cm-tw-box { border-style: solid; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-color: inherit; border-top-width: 0px !important; }
.cm-tw-underline { text-decoration: underline; }
@media print {
  .CodeMirror div.CodeMirror-cursor { visibility: hidden; }
}


:root {
  --mermaid-theme: night;
}

[lang='mermaid'] .label {
  color: #333;
}

/* CSS Document */

/** code highlight */

.cm-s-inner .cm-variable,
.cm-s-inner .cm-operator,
.cm-s-inner .cm-property {
    color: #b8bfc6;
}

.cm-s-inner .cm-keyword {
    color: #C88FD0;
}

.cm-s-inner .cm-tag {
    color: #7DF46A;
}

.cm-s-inner .cm-attribute {
    color: #7575E4;
}

.CodeMirror div.CodeMirror-cursor {
    border-left: 1px solid #b8bfc6;
    z-index: 3;
}

.cm-s-inner .cm-string {
    color: #D26B6B;
}

.cm-s-inner .cm-comment,
.cm-s-inner.cm-comment {
    color: #DA924A;
}

.cm-s-inner .cm-header,
.cm-s-inner .cm-def,
.cm-s-inner.cm-header,
.cm-s-inner.cm-def {
    color: #8d8df0;
}

.cm-s-inner .cm-quote,
.cm-s-inner.cm-quote {
    color: #57ac57;
}

.cm-s-inner .cm-hr {
    color: #d8d5d5;
}

.cm-s-inner .cm-link {
    color: #d3d3ef;
}

.cm-s-inner .cm-negative {
    color: #d95050;
}

.cm-s-inner .cm-positive {
    color: #50e650;
}

.cm-s-inner .cm-string-2 {
    color: #f50;
}

.cm-s-inner .cm-meta,
.cm-s-inner .cm-qualifier {
    color: #b7b3b3;
}

.cm-s-inner .cm-builtin {
    color: #f3b3f8;
}

.cm-s-inner .cm-bracket {
    color: #997;
}

.cm-s-inner .cm-atom,
.cm-s-inner.cm-atom {
    color: #84B6CB;
}

.cm-s-inner .cm-number {
    color: #64AB8F;
}

.cm-s-inner .cm-variable {
    color: #b8bfc6;
}

.cm-s-inner .cm-variable-2 {
    color: #9FBAD5;
}

.cm-s-inner .cm-variable-3 {
    color: #1cc685;
}

.CodeMirror-selectedtext,
.CodeMirror-selected {
    background: #4a89dc;
    color: #fff !important;
    text-shadow: none;
}

.CodeMirror-gutters {
    border-right: none;
}

/* CSS Document */

/** markdown source **/
.cm-s-typora-default .cm-header, 
.cm-s-typora-default .cm-property
{
    color: #cebcca;
}

.CodeMirror.cm-s-typora-default div.CodeMirror-cursor{
    border-left: 3px solid #b8bfc6;
}

.cm-s-typora-default .cm-comment {
    color: #9FB1FF;
}

.cm-s-typora-default .cm-string {
    color: #A7A7D9
}

.cm-s-typora-default .cm-atom, .cm-s-typora-default .cm-number {
    color: #848695;
    font-style: italic;
}

.cm-s-typora-default .cm-link {
    color: #95B94B;
}

.cm-s-typora-default .CodeMirror-activeline-background {
    background: rgba(51, 51, 51, 0.72);
}

.cm-s-typora-default .cm-comment, .cm-s-typora-default .cm-code {
	color: #8aa1e1;
}@import "";
@import "";
@import "";

:root {
    --bg-color:  #363B40;
    --side-bar-bg-color: #2E3033;
    --text-color: #b8bfc6;

    --select-text-bg-color:#4a89dc;

    --item-hover-bg-color: #0a0d16;
    --control-text-color: #b7b7b7;
    --control-text-hover-color: #eee;
    --window-border: 1px solid #555;

    --active-file-bg-color: rgb(34, 34, 34);
    --active-file-border-color: #8d8df0;

    --primary-color: #a3d5fe;

    --active-file-text-color: white;
    --item-hover-bg-color: #70717d;
    --item-hover-text-color: white;
    --primary-color: #6dc1e7;

    --rawblock-edit-panel-bd: #333;

    --search-select-bg-color: #428bca;
}

html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
}

html,
body {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    background: #363B40;
    background: var(--bg-color);
    fill: currentColor;
    line-height: 1.625rem;
}

#write {
    max-width: 914px;
}


@media only screen and (min-width: 1400px) {
	#write {
		max-width: 1024px;
	}
}

@media only screen and (min-width: 1800px) {
	#write {
		max-width: 1200px;
	}
}

html,
body,
button,
input,
select,
textarea,
div.code-tooltip-content {
    color: #b8bfc6;
    border-color: transparent;
}

div.code-tooltip,
.md-hover-tip .md-arrow:after {
    background: #333;
}

.native-window #md-notification {
    border: 1px solid #70717d;
}

.popover.bottom > .arrow:after {
    border-bottom-color: #333;
}

html,
body,
button,
input,
select,
textarea {
    font-family: "Helvetica Neue", Helvetica, Arial, 'Segoe UI Emoji', sans-serif;
}

hr {
    height: 2px;
    border: 0;
    margin: 24px 0 !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: "Lucida Grande", "Corbel", sans-serif;
    font-weight: normal;
    clear: both;
    -ms-word-wrap: break-word;
    word-wrap: break-word;
    margin: 0;
    padding: 0;
    color: #DEDEDE
}

h1 {
    font-size: 2.5rem;
    /* 36px */
    line-height: 2.75rem;
    /* 40px */
    margin-bottom: 1.5rem;
    /* 24px */
    letter-spacing: -1.5px;
}

h2 {
    font-size: 1.63rem;
    /* 24px */
    line-height: 1.875rem;
    /* 30px */
    margin-bottom: 1.5rem;
    /* 24px */
    letter-spacing: -1px;
    font-weight: bold;
}

h3 {
    font-size: 1.17rem;
    /* 18px */
    line-height: 1.5rem;
    /* 24px */
    margin-bottom: 1.5rem;
    /* 24px */
    letter-spacing: -1px;
    font-weight: bold;
}

h4 {
    font-size: 1.12rem;
    /* 16px */
    line-height: 1.375rem;
    /* 22px */
    margin-bottom: 1.5rem;
    /* 24px */
    color: white;
}

h5 {
    font-size: 0.97rem;
    /* 16px */
    line-height: 1.25rem;
    /* 22px */
    margin-bottom: 1.5rem;
    /* 24px */
    font-weight: bold;
}

h6 {
    font-size: 0.93rem;
    /* 16px */
    line-height: 1rem;
    /* 16px */
    margin-bottom: 0.75rem;
    color: white;
}

@media (min-width: 980px) {
    h3.md-focus:before,
    h4.md-focus:before,
    h5.md-focus:before,
    h6.md-focus:before {
        color: #ddd;
        border: 1px solid #ddd;
        border-radius: 3px;
        position: absolute;
        left: -1.642857143rem;
        top: .357142857rem;
        float: left;
        font-size: 9px;
        padding-left: 2px;
        padding-right: 2px;
        vertical-align: bottom;
        font-weight: normal;
        line-height: normal;
    }

    h3.md-focus:before {
        content: 'h3';
    }

    h4.md-focus:before {
        content: 'h4';
    }

    h5.md-focus:before {
        content: 'h5';
        top: 0px;
    }

    h6.md-focus:before {
        content: 'h6';
        top: 0px;
    }
}

a {
    text-decoration: none;
    outline: 0;
}

a:hover {
    outline: 0;
}

a:focus {
    outline: thin dotted;
}

sup.md-footnote {
    background-color: #555;
    color: #ddd;
}

p {
    -ms-word-wrap: break-word;
    word-wrap: break-word;
}

p,
ul,
dd,
ol,
hr,
address,
pre,
table,
iframe,
.wp-caption,
.wp-audio-shortcode,
.wp-video-shortcode {
    margin-top: 0;
    margin-bottom: 1.5rem;
    /* 24px */
}

audio:not([controls]) {
    display: none;
}

[hidden] {
    display: none;
}

::-moz-selection {
    background: #4a89dc;
    color: #fff;
    text-shadow: none;
}

*.in-text-selection,
::selection {
    background: #4a89dc;
    color: #fff;
    text-shadow: none;
}

ul,
ol {
    padding: 0 0 0 1.875rem;
    /* 30px */
}

ul {
    list-style: square;
}

ol {
    list-style: decimal;
}

ul ul,
ol ol,
ul ol,
ol ul {
    margin: 0;
}

b,
th,
dt,
strong {
    font-weight: bold;
}

i,
em,
dfn,
cite {
    font-style: italic;
}

blockquote {
    padding-left: 1.875rem;
    margin: 0 0 1.875rem 1.875rem;
    border-left: solid 2px #474d54;
    padding-left: 30px;
    margin-top: 35px;
}

pre,
code,
kbd,
tt,
var {
    font-size: 0.875em;
    font-family: Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace;
}

code,
tt,
var {
    background: rgba(0, 0, 0, 0.05);
}

kbd {
    padding: 2px 4px;
    font-size: 90%;
    color: #fff;
    background-color: #333;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 rgba(0,0,0,.25);
}

pre.md-fences {
    padding: 10px 10px 10px 30px;
    margin-bottom: 20px;
    background: #333;
}

.CodeMirror-gutters {
    background: #333;
    border-right: 1px solid transparent;
}

.enable-diagrams pre.md-fences[lang="sequence"] .code-tooltip,
.enable-diagrams pre.md-fences[lang="flow"] .code-tooltip,
.enable-diagrams pre.md-fences[lang="mermaid"] .code-tooltip {
    bottom: -2.2em;
    right: 4px;
}

code,
kbd,
tt,
var {
    padding: 2px 5px;
}

table {
    max-width: 100%;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}

th,
td {
    padding: 5px 10px;
    vertical-align: top;
}

a {
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}

hr {
    background: #474d54;
    /* variable */
}

h1 {
    margin-top: 2em;
}

a {
    color: #e0e0e0;
    text-decoration: underline;
}

a:hover {
    color: #fff;
}

.md-inline-math script {
    color: #81b1db;
}

b,
th,
dt,
strong {
    color: #DEDEDE;
    /* variable */
}

mark {
    background: #D3D40E;
}

blockquote {
    color: #9DA2A6;
}

table a {
    color: #DEDEDE;
    /* variable */
}

th,
td {
    border: solid 1px #474d54;
    /* variable */
}

.task-list {
    padding-left: 0;
}

.md-task-list-item {
    padding-left: 1.25rem;
}

.md-task-list-item > input {
    top: auto;
}

.md-task-list-item > input:before {
    content: "";
    display: inline-block;
    width: 0.875rem;
    height: 0.875rem;
    vertical-align: middle;
    text-align: center;
    border: 1px solid #b8bfc6;
    background-color: #363B40;
    margin-top: -0.4rem;
}

.md-task-list-item > input:checked:before,
.md-task-list-item > input[checked]:before {
    font-size: 0.625rem;
    line-height: 0.625rem;
    color: #DEDEDE;
}

/** quick open **/
.auto-suggest-container {
    border: 0px;
    background-color: #525C65;
}

#typora-quick-open {
    background-color: #525C65;
}

#typora-quick-open input{
    background-color: #525C65;
    border: 0;
    border-bottom: 1px solid grey;
}

.typora-quick-open-item {
    background-color: inherit;
    color: inherit;
}

.typora-quick-open-item.active,
.typora-quick-open-item:hover {
    background-color: #4D8BDB;
    color: white;
}

.typora-quick-open-item:hover {
    background-color: rgba(77, 139, 219, 0.8);
}

.typora-search-spinner > div {
  background-color: #fff;
}

#write pre.md-meta-block {
    border-bottom: 1px dashed #ccc;
    background: transparent;
    padding-bottom: 0.6em;
    line-height: 1.6em;
}

.btn,
.btn .btn-default {
    background: transparent;
    color: #b8bfc6;
}

.ty-table-edit {
    border-top: 1px solid gray;
    background-color: #363B40;
}

.popover-title {
    background: transparent;
}

.md-image>.md-meta {
    color: #BBBBBB;
    background: transparent;
}

.md-expand.md-image>.md-meta {
    color: #DDD;
}

#write>h3:before,
#write>h4:before,
#write>h5:before,
#write>h6:before {
    border: none;
    border-radius: 0px;
    color: #888;
    text-decoration: underline;
    left: -1.4rem;
    top: 0.2rem;
}

#write>h3.md-focus:before {
    top: 2px;
}

#write>h4.md-focus:before {
    top: 2px;
}

.md-toc-item {
    color: #A8C2DC;
}

#write div.md-toc-tooltip {
    background-color: #363B40;
}

.dropdown-menu .btn:hover,
.dropdown-menu .btn:focus,
.md-toc .btn:hover,
.md-toc .btn:focus {
    color: white;
    background: black;
}

#toc-dropmenu {
    background: rgba(50, 54, 59, 0.93);
    border: 1px solid rgba(253, 253, 253, 0.15);
}

#toc-dropmenu .divider {
    background-color: #9b9b9b;
}

.outline-expander:before {
    top: 2px;
}

#typora-sidebar {
    box-shadow: none;
    border-right: 1px dashed;
    border-right: none;
}

.sidebar-tabs {
    border-bottom:0;
}

#typora-sidebar:hover .outline-title-wrapper {
    border-left: 1px dashed;
}

.outline-title-wrapper .btn {
    color: inherit;
}

.outline-item:hover {
    border-color: #363B40;
    background-color: #363B40;
    color: white;
}

h1.md-focus .md-attr,
h2.md-focus .md-attr,
h3.md-focus .md-attr,
h4.md-focus .md-attr,
h5.md-focus .md-attr,
h6.md-focus .md-attr,
.md-header-span .md-attr {
    color: #8C8E92;
    display: inline;
}

.md-comment {
    color: #5a95e3;
    opacity: 0.8;
}

.md-inline-math svg {
    color: #b8bfc6;
}

#math-inline-preview .md-arrow:after {
    background: black;
}

.modal-content {
    background: var(--bg-color);
    border: 0;
}

.modal-title {
    font-size: 1.5em;
}

.modal-content input {
    background-color: rgba(26, 21, 21, 0.51);
    color: white;
}

.modal-content .input-group-addon {
    color: white;
}

.modal-backdrop {
    background-color: rgba(174, 174, 174, 0.7);
}

.modal-content .btn-primary {
    border-color: var(--primary-color);
}

.md-table-resize-popover {
    background-color: #333;
}

.form-inline .input-group .input-group-addon {
    color: white;
}

#md-searchpanel {
    border-bottom: 1px dashed grey;
}

/** UI for electron */

.context-menu,
#spell-check-panel,
#footer-word-count-info {
    background-color: #42464A;
}

.context-menu.dropdown-menu .divider,
.dropdown-menu .divider {
    background-color: #777777;
    opacity: 1;
}

footer {
    color: inherit;
}

@media (max-width: 1000px) {
    footer {
        border-top: none;
    }
    footer:hover {
        color: inherit;
    }
}

#file-info-file-path .file-info-field-value:hover {
    background-color: #555;
    color: #dedede;
}

.megamenu-content,
.megamenu-opened header {
    background: var(--bg-color);
}

.megamenu-menu-panel h2,
.megamenu-menu-panel h1,
.long-btn {
    color: inherit;
}

.megamenu-menu-panel input[type='text'] {
    background: inherit;
    border: 0;
    border-bottom: 1px solid;
}

#recent-file-panel-action-btn {
    background: inherit;
    border: 1px grey solid;
}

.megamenu-menu-panel .dropdown-menu > li > a {
    color: inherit;
    background-color: #2F353A;
    text-decoration: none;
}

.megamenu-menu-panel table td:nth-child(1) {
    color: inherit;
    font-weight: bold;
}

.megamenu-menu-panel tbody tr:hover td:nth-child(1) {
    color: white;
}

.modal-footer .btn-default, 
.modal-footer .btn-primary,
.modal-footer .btn-default:not(:hover) {
    border: 1px solid;
    border-color: transparent;
}

.btn-primary {
    color: white;
}

.btn-default:hover, .btn-default:focus, .btn-default.focus, .btn-default:active, .btn-default.active, .open > .dropdown-toggle.btn-default {
    color: white;
    border: 1px solid #ddd;
    background-color: inherit;
}

.modal-header {
    border-bottom: 0;
}

.modal-footer {
    border-top: 0;
}

#recent-file-panel tbody tr:nth-child(2n-1) {
    background-color: transparent !important;
}

.megamenu-menu-panel tbody tr:hover td:nth-child(2) {
    color: inherit;
}

.megamenu-menu-panel .btn {
    border: 1px solid #eee;
    background: transparent;
}

.mouse-hover .toolbar-icon.btn:hover,
#w-full.mouse-hover,
#w-pin.mouse-hover {
    background-color: inherit;
}

.typora-node::-webkit-scrollbar {
    width: 5px;
}

.typora-node::-webkit-scrollbar-thumb:vertical {
    background: rgba(250, 250, 250, 0.3);
}

.typora-node::-webkit-scrollbar-thumb:vertical:active {
    background: rgba(250, 250, 250, 0.5);
}

#w-unpin {
    background-color: #4182c4;
}

#top-titlebar, #top-titlebar * {
    color: var(--item-hover-text-color);
}

.typora-sourceview-on #toggle-sourceview-btn,
#footer-word-count:hover,
.ty-show-word-count #footer-word-count {
    background: #333333;
}

#toggle-sourceview-btn:hover {
    color: #eee;
    background: #333333;
}

/** focus mode */
.on-focus-mode .md-end-block:not(.md-focus):not(.md-focus-container) * {
    color: #686868 !important;
}

.on-focus-mode .md-end-block:not(.md-focus) img,
.on-focus-mode .md-task-list-item:not(.md-focus-container)>input {
    opacity: #686868 !important;
}

.on-focus-mode li[cid]:not(.md-focus-container){
    color: #686868;
}

.on-focus-mode .md-fences.md-focus .CodeMirror-code>*:not(.CodeMirror-activeline) *,
.on-focus-mode .CodeMirror.cm-s-inner:not(.CodeMirror-focused) * {
    color: #686868 !important;
}

.on-focus-mode .md-focus,
.on-focus-mode .md-focus-container {
    color: #fff;
}

.on-focus-mode #typora-source .CodeMirror-code>*:not(.CodeMirror-activeline) * {
    color: #686868 !important;
}


/*diagrams*/
#write .md-focus .md-diagram-panel {
    border: 1px solid #ddd;
    margin-left: -1px;
    width: calc(100% + 2px);
}

/*diagrams*/
#write .md-focus.md-fences-with-lineno .md-diagram-panel {
    margin-left: auto;
}

.md-diagram-panel-error {
    color: #f1908e;
}

.active-tab-files #info-panel-tab-file,
.active-tab-files #info-panel-tab-file:hover,
.active-tab-outline #info-panel-tab-outline,
.active-tab-outline #info-panel-tab-outline:hover {
    color: #eee;
}

.sidebar-footer-item:hover,
.footer-item:hover {
    background: inherit;
    color: white;
}

.ty-side-sort-btn.active,
.ty-side-sort-btn:hover,
.selected-folder-menu-item a:after {
    color: white;
}

#sidebar-files-menu {
    border:solid 1px;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.79);
    background-color: var(--bg-color);
}

.file-list-item {
    border-bottom:none;
}

.file-list-item-summary {
    opacity: 1;
}

.file-list-item.active:first-child {
    border-top: none;
}

.file-node-background {
    height: 32px;
}

.file-library-node.active>.file-node-content,
.file-list-item.active {
    color: white;
    color: var(--active-file-text-color);
}

.file-library-node.active>.file-node-background{
    background-color: rgb(34, 34, 34);
    background-color: var(--active-file-bg-color);
}
.file-list-item.active {
    background-color: rgb(34, 34, 34);
    background-color: var(--active-file-bg-color);
}

#ty-tooltip {
    background-color: black;
    color: #eee;
}

.md-task-list-item>input {
    margin-left: -1.3em;
    margin-top: 0.3rem;
    -webkit-appearance: none;
}

.md-mathjax-midline {
    background-color: #57616b;
    border-bottom: none;
}

footer.ty-footer {
    border-color: #656565;
}

.ty-preferences .btn-default {
    background: transparent;
}
.ty-preferences .btn-default:hover {
    background: #57616b;
}

.ty-preferences select {
    border: 1px solid #989698;
    height: 21px;
}

.ty-preferences .nav-group-item.active,
.export-item.active,
.export-items-list-control,
.export-detail {
    background: var(--item-hover-bg-color);
}

.ty-preferences input[type="search"] {
    border-color: #333;
    background: #333;
    line-height: 22px;
    border-radius: 6px;
    color: white;
}

.ty-preferences input[type="search"]:focus {
    box-shadow: none;
}

[data-is-directory="true"] .file-node-content {
    margin-bottom: 0;
}

.file-node-title {
    line-height: 22px;
}

.html-for-mac .file-node-open-state, .html-for-mac .file-node-icon {
    line-height: 26px;
}

::-webkit-scrollbar-thumb {
    background: rgba(230, 230, 230, 0.30);
}

::-webkit-scrollbar-thumb:active {
    background: rgba(230, 230, 230, 0.50);
}

#typora-sidebar:hover div.sidebar-content-content::-webkit-scrollbar-thumb:horizontal {
    background: rgba(230, 230, 230, 0.30);
}

.nav-group-item:active {
    background-color: #474d54 !important;
}

.md-search-hit {
    background: rgba(199, 140, 60, 0.81);
    color: #eee;
}

.md-search-hit * {
    color: #eee;
}

#md-searchpanel input {
    color: white;
}

.modal-backdrop.in {
    opacity: 1;
    backdrop-filter: blur(1px);
}

.clear-btn-icon {
    top: 8px;
}


</style><title>api-doc</title>
</head>
<body class='typora-export'><div class='typora-export-content'>
<div id='write'  class=''><h1 id='navigation'><span>Navigation</span></h1><ul><li><p><a href='#mensaplan'><span>Mensaplan</span></a></p><ul><li><a href='#mensaplan'><span>complete weekly list</span></a></li><li><a href='#weekday-filter'><span>Weekday filtered</span></a></li><li><a href='#relative-dates'><span>relative Dates</span></a></li><li><a href='#find-by-id'><span>find food by id</span></a></li></ul></li><li><p><a href='#prüfungsplan'><span>Prüfungsplan</span></a></p></li></ul><h1 id='mensaplan'><span>Mensaplan</span></h1><p><span>Get the complete weekly List of available food of for the local Mensa</span></p><p><strong><span>URL</span></strong><span> : </span><code>/mensaplan/all</code></p><p><strong><span>Method</span></strong><span> : </span><code>GET</code></p><p><strong><span>Auth required</span></strong><span> : NO</span></p><p><strong><span>Permissions required</span></strong><span> : None</span></p><h2 id='success-response-1'><span>Success Response</span></h2><p><strong><span>Code</span></strong><span> : </span><code>200 OK</code></p><p><strong><span>JSON</span></strong><span>:  </span></p><pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="json" style="break-inside: unset;"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="json"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 10.7315px; left: 3.99667px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">[</span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span>{</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"DISPO_ID"</span>: <span class="cm-string">"1.371.415"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"VERBRAUCHSORT"</span>: <span class="cm-string">"3.530"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"BILDSCHIRM"</span>: <span class="cm-string">"1"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"AUSGABETEXT"</span>: <span class="cm-string">"Cordon bleu mit Käse-Schinken-Füllung [S] (2,19,14,15,20a)Bratenjus (21,22,20a,20c)"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"MENSA"</span>: <span class="cm-string">"Mensa Campus Derendorf"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"ORT"</span>: <span class="cm-string">"3.530"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"TYP"</span>: <span class="cm-string">"500"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"DATUM"</span>: <span class="cm-string">"23.05.2022"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"SPEISE"</span>: <span class="cm-string">"Essen I"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"TEXTL1"</span>: <span class="cm-string">"Cordon bleu mit Käse-Schinken-Füllung [S] (2,19,14,15,20a)"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"TEXTL2"</span>: <span class="cm-string">"Bratenjus (21,22,20a,20c)"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"TEXTL3"</span>: <span class="cm-string">""</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"TEXTL4"</span>: <span class="cm-string">""</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"TEXTL5"</span>: <span class="cm-string">""</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"TEXTM1"</span>: <span class="cm-string">"Cordon bleu with cheese and ham filling [S] (2,19,14,15,20a)"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"TEXTM2"</span>: <span class="cm-string">"Roast jus (21,22,20a,20c)"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"TEXTM3"</span>: <span class="cm-string">""</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"TEXTM4"</span>: <span class="cm-string">""</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"TEXTM5"</span>: <span class="cm-string">""</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"STUDIERENDE"</span>: <span class="cm-string">"1,30"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"BEDIENSTETE"</span>: <span class="cm-string">"3,50"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"GAESTE"</span>: <span class="cm-string">"3,50"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"ZSNUMMERN"</span>: <span class="cm-string">"2, 19, 21, 22, 14, 15, 20a, 20c"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"ZSNAMEN"</span>: <span class="cm-string">"mit Antioxidationsmittel, enthält Lactose (Milchzucker), enthält Soja, enthält Sellerie, mit Nitritpökelsalz, mit Milcheiweiß, Weizen, Gerste"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"PFAD"</span>: <span class="cm-string">"https://www3.hhu.de/stw-d/xml-export/img/900069.jpg"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"AMPEL1"</span>: <span class="cm-string">"0,00"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"AMPEL2"</span>: <span class="cm-string">"0,00"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"AMPEL3"</span>: <span class="cm-string">"0,00"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"AMPEL4"</span>: <span class="cm-string">"0,00"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"AMPEL5"</span>: <span class="cm-string">"0,00"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"HINWEISE"</span>: <span class="cm-string">""</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"NAEHRWERTE"</span>: <span class="cm-string">"-"</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span>}<span class="cm-comment">//...</span></span></pre><div class="" style="position: relative;"><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span>]</span></pre></div></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 1008px;"></div><div class="CodeMirror-gutters" style="display: none; height: 1008px;"></div></div></div></pre><h2 id='weekday-filter'><span>Weekday filter</span></h2><h3 id='possible-routes'><span>Possible routes </span></h3><ul><li><p><code>/mensaplan/weekday/[WEEKDAY]</code></p><ul><li><span>Options: [WEEKDAY]= </span><code>monday, tuesday, wednesday, thursday, friday</code></li></ul></li><li><p><span>Example: </span><code>/mensaplan/weekday/monday</code></p></li></ul><h2 id='relative-dates'><span>Relative Dates</span></h2><ul><li><code>/mensaplan/today</code></li></ul><h2 id='find-by-id'><span>Find by Id</span></h2><ul><li><p><code>/mensaplan/seach/:id</code></p></li><li><p><span>Example: </span><code>mensaplan/search/1.371.533</code></p><ul><li><span>id range likely changes between weeks since mensaplan data will be replaced each monday</span></li></ul></li></ul><h1 id='prüfungsplan'><span>Prüfungsplan</span></h1><p><strong><span>URL</span></strong><span> : </span><code>/pruefungsplan/all</code></p><p><strong><span>Method</span></strong><span> : </span><code>GET</code></p><p><strong><span>Auth required</span></strong><span> : NO</span></p><p><strong><span>Permissions required</span></strong><span> : None</span></p><h2 id='success-response-2'><span>Success Response</span></h2><p><strong><span>Code</span></strong><span> : </span><code>200 OK</code></p><p><strong><span>JSON</span></strong><span>:</span></p><pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="json" style="break-inside: unset;"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="json"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 10.7315px; left: 3.99667px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">[</span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span>{</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"Datum"</span>: <span class="cm-string">"13.07.2022"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"Tag"</span>: <span class="cm-string">"Mi"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"Studieng."</span>: <span class="cm-string">"BMI10"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"Code"</span>: <span class="cm-string">"BMI 26"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"Fachname"</span>: <span class="cm-string">"IT-Sicherheit"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"1. PrüferIn"</span>: <span class="cm-string">"Schmidt"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"2. PrüferIn"</span>: <span class="cm-string">"Dahm"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"Raum"</span>: <span class="cm-string">"AM"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"Dauer"</span>: <span class="cm-number">90</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"Beginn"</span>: <span class="cm-string">"13:00"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-string cm-property">"Titel"</span>: <span class="cm-string">""</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span>},</span></pre><div class="" style="position: relative;"><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-comment">//...</span></span></pre></div></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 397px;"></div><div class="CodeMirror-gutters" style="display: none; height: 397px;"></div></div></div></pre><p>&nbsp;</p></div></div>
</body>
</html>`;
  getDocs(): string {
    return this.api_documentation;
  }
  getWelcome(): string {
    return `<style>
    body {
   color: #dedede;
   background-color: #363b40;
   text-align: center;
}
    a:link, a:visited {
  background-color: white;
  color: black;
  border: 2px solid green;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

a:hover, a:active {
  background-color: green;
  color: white;
}
</style>
<h1>Hello User</h1>
<h3>You might take a look at the docs</h3>
<ul>
<li><a href="/docs">/docs</a></li>
</ul>`;
  }
}