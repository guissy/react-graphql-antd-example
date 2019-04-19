import * as React from 'react';
import { SvgCanvas, Rect2D, SvgCanvas2DGradient } from 'red-agate-svg-canvas/modules';
import * as ChartJs from 'chart.js';

// Get the global scope.
// If running on a node, "g" points to a "global" object.
// When running on the browser, "g" points to the "window" object.
const g = Function('return this')();

// https://www.chartjs.org/docs/latest/getting-started/usage.html
export default class Abc extends React.PureComponent {

  state = {
    svg: this.main()
  }

  componentDidMount(): void {
    this.setState({ svg: this.main() });
  }

  main() {
    const opts: any = {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    };
    // SvgCanvas has a "CanvasRenderingContext2D"-compatible interface.
    const ctx = new SvgCanvas();
    // SvgCanvas lacks the canvas property.
    (ctx as any).canvas = {
      width: 800,
      height: 400,
      style: {
        width: '800px',
        height: '400px',
      },
    };

    // SvgCanvas does not have font glyph information,
    // so manually set the ratio of (font height / font width).
    ctx.fontHeightRatio = 2;

    // Chart.js needs a "HTMLCanvasElement"-like interface that has "getContext()" method.
    // "getContext()" should returns a "CanvasRenderingContext2D"-compatible interface.
    const el = { getContext: () => ctx };

    // If "devicePixelRatio" is not set, Chart.js get the devicePixelRatio from "window" object.
    // node.js environment has no window object.
    opts.options.devicePixelRatio = 1;

    // Disable animations.
    opts.options.animation = false;
    opts.options.events = [];
    opts.options.responsive = false;

    // Chart.js needs the "CanvasGradient" in the global scope.
    const savedGradient = g.CanvasGradient;
    g.CanvasGradient = SvgCanvas2DGradient;
    try {
      new ChartJs.Chart(el as any, opts);
      // console.log('☞☞☞ 9527 Abc 94', chart);
    } finally {
      if (savedGradient) {
        g.CanvasGradient = savedGradient;
      }
    }

    // Render as SVG.
    const svgString = ctx.render(new Rect2D(0, 0, 800, 400), 'px');
    // console.log(svgString);
    return svgString;
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return <div dangerouslySetInnerHTML={{ '__html': this.state.svg }}>
    </div>;
  }

}

