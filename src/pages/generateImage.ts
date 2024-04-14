import { toBlob } from 'html-to-image';
import * as jsdom from "jsdom";
const { JSDOM } = jsdom;

export async function GET({ params, request }) {

    const c = new JSDOM()
    const document = c.window._document
    const node: HTMLElement = document.createElement('div');
    node.innerHTML = `
    <div class="canves"></div>
    <style>
        .canvas {
            height: 300px;
            width: 400px;
            background-color: red;
        }
    </style>
    `
    const response = await toBlob(node)
    return new Response(response);
}