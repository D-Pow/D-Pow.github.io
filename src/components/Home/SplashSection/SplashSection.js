import React from 'react';
import 'styles/SplashSection.scss';
import Triangle from 'components/ui/Triangle';
import { isMobileBrowser, randomColor } from 'utils/Functions';

class SplashSection extends React.Component {
    pageText = {
        welcomeTitle: "Hey there, I'm Devon!"
    };

    numRows = 8;

    constructor(props) {
        super(props);
        this.state = {
            windowSize: {
                width: window.innerWidth,
                height: window.innerHeight
            },
            triangleColorMatrix: []
        };
    }

    componentDidMount() {
        this.updateTriangleColorMatrix();

        if (!isMobileBrowser()) {
            window.addEventListener('resize', this.handleResize);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({
            windowSize: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        });
        this.updateTriangleColorMatrix();
    };

    get triangleHeight() {
        return this.state.windowSize.height / this.numRows;
    }

    getNeighboringColors(rowIndex, colIndex, colorMatrix) {
        const neighbors = [];
        if (rowIndex > 0) {
            neighbors.push(colorMatrix[rowIndex-1][colIndex]);
        }
        if (colIndex > 0) {
            neighbors.push(colorMatrix[rowIndex][colIndex-1]);
        }
        return neighbors;
    }

    updateTriangleColorMatrix() {
        const { triangleHeight } = this;
        const { windowSize: { width }, triangleColorMatrix } = this.state;
        const numTrianglesInRow = Math.ceil(width / triangleHeight) * 2; // Two triangles fit inside one base length

        const chosenColors = triangleColorMatrix.map(row => row.slice(0, numTrianglesInRow));  // delete extra, unnecessary rows
        for (let rowIndex = 0; rowIndex < this.numRows; rowIndex++) {
            if (!chosenColors[rowIndex]) {
                chosenColors.push([]);
            }

            const row = chosenColors[rowIndex];
            for (let colIndex = 0; colIndex < numTrianglesInRow; colIndex++) {
                if (!row[colIndex]) {
                    const neighboringColors = this.getNeighboringColors(rowIndex, colIndex, chosenColors);
                    let color = randomColor(neighboringColors, ['primary', 'secondary', 'tertiary', 'info', 'dark']);
                    chosenColors[rowIndex].push(color);
                }
            }
        }

        this.setState({ triangleColorMatrix: chosenColors });
    }

    renderTriangles() {
        const { triangleColorMatrix } = this.state;

        const renderedTriangleMatrix = triangleColorMatrix.map((row, rowIndex) => row.map((col, colIndex) => (
            <Triangle
                color={col}
                height={this.triangleHeight}
                key={`${rowIndex}-${colIndex}`}
                upsideDown={(colIndex + rowIndex) % 2 === 0}
            />
        )));

        return (
            <div className={'triangle-section bg-white'}>
                {renderedTriangleMatrix.map((row, i) => (
                    <div className={'triangle-row'} key={i}>
                        {row}
                    </div>
                ))}
            </div>
        );
    }

    renderWelcomeText() {
        return (
            <div className={'text-center position-absolute w-100 top-30'}>
                <div className={'bg-dark-fadeout rounded m-auto py-2 px-3 display-3'} style={{width: '80%'}}>
                    <h1 className={'text-white display-4'}><strong>{this.pageText.welcomeTitle}</strong></h1>
                </div>
            </div>
        );
    }

    render() {
        return (
            <React.Fragment>
                {this.renderTriangles()}
                {this.renderWelcomeText()}
            </React.Fragment>
        );
    }
}

export default SplashSection;
