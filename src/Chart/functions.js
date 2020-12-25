import { l, numberOfPoints } from '../constants'

const points = []

function f(x) {
    if (x < l / 3) {
        return 3 * x / l
    }
    else {
        return 1
    }
}

for (let i = 0; i < numberOfPoints; i++) {
    points[i] = i * l / numberOfPoints
}

const w = []

for (let i = 0; i < numberOfPoints - 1; i++) {
    let res = 0
    for (let j = 0; j < numberOfPoints - 1; j++) {
        res += (f(points[j]) - points[j] / l) * Math.sin(Math.PI * (i + 1) * points[j] / l)
    }
    w[i] = 2 * res / numberOfPoints
}

function u(x, t) {
    let res = x / l
    for (let i = 0; i < numberOfPoints - 1; i++) {
        res += w[i] * Math.exp((-(i + 1) * (i + 1) * t * t) / 100) * Math.sin(Math.PI * (i + 1) * x / l)
    }
    return res
}

export const func = []

export const getPoints = function (value) {
    if(!value && value !== 0) value = 0
    const pointsGraph = []
    for (let i = 0; i < points.length; i++) {
        pointsGraph.push({ y: u(points[i], value), x: points[i] })
    }
    return pointsGraph
}

for (let i = 0; i < points.length; i++) {
    func.push({ y: f(points[i]), x: points[i] })
}